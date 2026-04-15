// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 60; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Trailing slash enforcement for blog directory (prevents broken relative links)
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.protocol !== 'file:' && window.location.pathname.endsWith('/blog')) {
        window.location.href = window.location.href + '/';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .stat, .about-text, .contact-info');
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const company = formData.get('company');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Track form submission attempt
        if (typeof window.umami !== 'undefined') {
            try {
                window.umami.track('contact_form_submit', {
                    form_name: 'contact_form',
                    has_company: !!company
                });
            } catch (error) {
                console.log('Umami tracking failed:', error);
            }
        }
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Add loading animation
        submitBtn.style.opacity = '0.7';
        submitBtn.style.cursor = 'not-allowed';
        
        // Save message to Firestore
        try {
            // Check if Firebase is properly initialized
            if (!window.db) {
                throw new Error('Firebase not initialized');
            }

            const messageData = {
                name: name,
                email: email,
                company: company || '',
                message: message,
                timestamp: window.serverTimestamp(),
                ip: await getClientIP(),
                userAgent: navigator.userAgent,
                status: 'new'
            };

            const docRef = await window.addDoc(window.collection(window.db, 'contact_messages'), messageData);
            
            // Track successful submission
            if (typeof window.umami !== 'undefined') {
                try {
                    window.umami.track('contact_form_success', {
                        form_name: 'contact_form',
                        message_length: message.length
                    });
                } catch (error) {
                    // Analytics tracking failed silently
                }
            }
            
            showNotification('Thank you for your message! We\'ll get back to you within 24 hours.', 'success');
            contactForm.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
            
            // Optional: Scroll to top to show the success message
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
        } catch (error) {
            
            // Track error
            if (typeof window.umami !== 'undefined') {
                try {
                    window.umami.track('contact_form_error', {
                        error: error.message,
                        code: error.code
                    });
                } catch (analyticsError) {
                    // Analytics tracking failed silently
                }
            }
            
            // Show specific error message
            let errorMessage = 'Sorry, there was an error sending your message. Please try again.';
            if (error.message.includes('permission')) {
                errorMessage = 'Database permission error. Please contact support.';
            } else if (error.message.includes('network')) {
                errorMessage = 'Network error. Please check your connection and try again.';
            }
            
            showNotification(errorMessage, 'error');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            submitBtn.style.opacity = '1';
            submitBtn.style.cursor = 'pointer';
        }
        
        return false;
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Get client IP function
async function getClientIP() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        return 'unknown';
    }
}

// Test Firestore function
window.testFirestore = async function() {
    try {
        if (!window.db) {
            throw new Error('Firebase not initialized');
        }
        
        const testData = {
            message: 'Test message from website',
            timestamp: window.serverTimestamp(),
            test: true
        };
        
        const docRef = await window.addDoc(window.collection(window.db, 'test_messages'), testData);
        
        alert('Test message saved successfully! Check Firestore console.');
        
    } catch (error) {
        alert('Test failed: ' + error.message);
    }
};

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: ${type === 'success' ? '#28ca42' : type === 'error' ? '#ff3b30' : '#007aff'};
        color: white;
        padding: 16px 24px;
        border-radius: 12px;
        font-weight: 500;
        font-size: 16px;
        z-index: 10000;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Parallax effect removed — was conflicting with 3D bento hover transforms
// Service card hover removed — CSS handles it with better transitions

// Portfolio item click tracking
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', (e) => {
        // Don't trigger if clicking on a link, button, or portfolio-link
        if (e.target.tagName === 'A' || 
            e.target.tagName === 'BUTTON' || 
            e.target.closest('a') || 
            e.target.closest('button') ||
            e.target.classList.contains('portfolio-link') ||
            e.target.closest('.portfolio-link') ||
            e.target.classList.contains('btn') ||
            e.target.closest('.btn')) {
            return;
        }
        
        const projectTitle = item.querySelector('h3').textContent;
        
        // Add a subtle animation
        item.style.transform = 'scale(0.98)';
        setTimeout(() => {
            item.style.transform = 'scale(1)';
        }, 150);
    });
});

// Loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        // If the image is already loaded (e.g. from cache)
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });
            
            // Set initial opacity for images not yet loaded
            img.style.opacity = '0';
        }
        
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentNode;
        const isActive = item.classList.contains('active');
        
        // Close all other items
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            otherItem.classList.remove('active');
        });
        
        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Newsletter Form Handling
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('newsletter-email');
        const email = emailInput.value.trim();
        
        if (email) {
            const submitBtn = newsletterForm.querySelector('button');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = '...';
            submitBtn.disabled = true;
            
            try {
                // 1. Track in Umami
                if (typeof window.umami !== 'undefined') {
                    window.umami.track('newsletter_signup', {
                        email: email
                    });
                }

                // 2. Save to Firestore
                if (window.db && window.addDoc && window.collection) {
                    const subscriptionData = {
                        email: email,
                        timestamp: window.serverTimestamp(),
                        ip: await getClientIP(),
                        userAgent: navigator.userAgent,
                        source: window.location.pathname,
                        status: 'active'
                    };

                    await window.addDoc(window.collection(window.db, 'newsletter_subscriptions'), subscriptionData);
                } else {
                    // Fallback or wait for Firebase
                    console.warn('Firebase not ready, retrying once...');
                    await new Promise(resolve => setTimeout(resolve, 1000));
                    
                    if (window.db && window.addDoc && window.collection) {
                        const subscriptionData = {
                            email: email,
                            timestamp: window.serverTimestamp(),
                            ip: await getClientIP(),
                            userAgent: navigator.userAgent,
                            source: window.location.pathname,
                            status: 'active'
                        };
                        await window.addDoc(window.collection(window.db, 'newsletter_subscriptions'), subscriptionData);
                    } else {
                        throw new Error('Database connection unavailable. Please refresh and try again.');
                    }
                }

                showNotification('Thanks for subscribing! Check your inbox soon.', 'success');
                emailInput.value = '';
                
            } catch (error) {
                console.error('Newsletter subscription error:', error);
                showNotification('Something went wrong. Please try again later.', 'error');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        }
    });
}

// Loading state removed from anchor-link buttons — only async operations show loading

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Handle initial hash in URL (for scrolling to sections on page load)
    if (window.location.hash) {
        setTimeout(() => {
            const target = document.querySelector(window.location.hash);
            if (target) {
                const offsetTop = target.offsetTop - 60; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
    
    // Track page view with Umami (Umami tracks automatically, but we can log custom data if needed)
    if (typeof window.umami !== 'undefined') {
        try {
            // Umami tracks pageviews automatically by default. 
            // We can track a custom event if we want more control.
        } catch (error) {
            // Analytics tracking failed silently
        }
    }
    
    // Add a subtle entrance animation to the hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        setTimeout(() => {
            heroContent.classList.add('reveal-visible');
        }, 300);
    }
    
    // Ensure portfolio links work properly - removed hardcoded woonprijs redirect
});

// Local file protocol support - handles directory links when viewing without a server
if (window.location.protocol === 'file:') {
    // Fix standard links
    document.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.endsWith('/')) {
            link.setAttribute('href', href + 'index.html');
        } else if (href && !href.includes('.') && !href.startsWith('#') && !href.includes(':')) {
            link.setAttribute('href', href + '/index.html');
        }
    });

    // Fix onclick navigation patterns in portfolio/blog cards
    document.querySelectorAll('[onclick*="window.location.href"]').forEach(el => {
        const attr = el.getAttribute('onclick');
        if (attr.includes("'./") && attr.endsWith("/'")) {
            const newAttr = attr.replace("/'", "/index.html'");
            el.setAttribute('onclick', newAttr);
        }
    });
}

// Copy to Keyboard functionality for Prompt Boxes
document.addEventListener('click', (e) => {
    if (e.target.closest('.prompt-box')) {
        const promptBox = e.target.closest('.prompt-box');
        const text = promptBox.innerText.replace('Ready to copy', '').trim();
        
        navigator.clipboard.writeText(text).then(() => {
            const statusText = promptBox.querySelector('.prompt-header span:last-child');
            const originalText = statusText.textContent;
            statusText.textContent = 'Copied!';
            statusText.style.color = '#4ade80';
            
            setTimeout(() => {
                statusText.textContent = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }
});
