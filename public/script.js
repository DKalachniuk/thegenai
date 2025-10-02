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

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .portfolio-item, .stat, .about-text, .contact-info');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
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
        if (typeof window.analytics !== 'undefined' && window.analytics.logEvent) {
            try {
                window.analytics.logEvent('contact_form_submit', {
                    form_name: 'contact_form',
                    user_name: name,
                    user_email: email,
                    has_company: !!company
                });
            } catch (error) {
                console.log('Analytics tracking failed:', error);
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
            if (typeof window.analytics !== 'undefined' && window.analytics.logEvent) {
                try {
                    window.analytics.logEvent('contact_form_success', {
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
            if (typeof window.analytics !== 'undefined' && window.analytics.logEvent) {
                try {
                    window.analytics.logEvent('contact_form_error', {
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

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual) {
        const rate = scrolled * -0.5;
        heroVisual.style.transform = `translateY(${rate}px)`;
    }
});

// Service cards hover effect enhancement
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

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
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
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

// Add loading state to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        // Don't add loading state to form submit buttons (handled separately)
        if (this.type === 'submit') return;
        
        const originalText = this.textContent;
        this.textContent = 'Loading...';
        this.style.pointerEvents = 'none';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.pointerEvents = 'auto';
        }, 1000);
    });
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // Track page view with analytics
    if (typeof analytics !== 'undefined') {
        analytics.logEvent('page_view', {
            page_title: document.title,
            page_location: window.location.href,
            language: document.documentElement.lang
        });
    }
    
    // Add a subtle entrance animation to the hero
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'opacity 1s ease, transform 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 300);
    }
    
    // Ensure portfolio links work properly
    const portfolioLinks = document.querySelectorAll('a[href*="woonprijs.nl"], .portfolio-link');
    portfolioLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Track portfolio link click
            if (typeof analytics !== 'undefined') {
                analytics.logEvent('portfolio_link_click', {
                    link_url: 'https://woonprijs.nl',
                    link_text: 'View Project'
                });
            }
            
            // Force open the link if default behavior doesn't work
            setTimeout(() => {
                if (!window.open('https://woonprijs.nl', '_blank')) {
                    window.location.href = 'https://woonprijs.nl';
                }
            }, 100);
        });
    });
    
    // Simple button click handler
    const viewProjectBtn = document.querySelector('.portfolio-link');
    if (viewProjectBtn) {
        viewProjectBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            window.open('https://woonprijs.nl', '_blank');
        });
    }
});
