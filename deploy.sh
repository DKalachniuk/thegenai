#!/bin/bash

# TheGenAI Website Deployment Script
# This script deploys the website to Firebase Hosting

echo "🚀 Starting TheGenAI website deployment..."

# Check if Firebase CLI is installed
if ! command -v firebase &> /dev/null; then
    echo "❌ Firebase CLI is not installed. Please install it first:"
    echo "   npm install -g firebase-tools"
    exit 1
fi

# Check if user is logged in to Firebase
if ! firebase projects:list &> /dev/null; then
    echo "🔐 Please login to Firebase first:"
    echo "   firebase login"
    exit 1
fi

# Check if logo and favicon exist
if [ ! -f "logo.png" ]; then
    echo "⚠️  Warning: logo.png not found. Please add your logo file."
fi

if [ ! -f "favicon.ico" ]; then
    echo "⚠️  Warning: favicon.ico not found. Please add your favicon file."
fi

# Deploy to Firebase
echo "📦 Deploying to Firebase Hosting..."
firebase deploy --only hosting

if [ $? -eq 0 ]; then
    echo "✅ Deployment successful!"
    echo "🌐 Your website is now live at: https://thegenai-website.web.app"
    echo ""
    echo "📝 Next steps:"
    echo "   - Add your logo.png and favicon.ico files"
    echo "   - Customize the content in index.html"
    echo "   - Update contact information"
    echo "   - Test the website on different devices"
else
    echo "❌ Deployment failed. Please check the error messages above."
    exit 1
fi
