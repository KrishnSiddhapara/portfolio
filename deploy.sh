#!/bin/bash

# Portfolio Deployment Script
# Usage: ./deploy.sh [vercel|netlify]

set -e

echo "🚀 Starting deployment process..."

# Check if platform is specified
if [ -z "$1" ]; then
    echo "❌ Please specify deployment platform: vercel or netlify"
    echo "Usage: ./deploy.sh [vercel|netlify]"
    exit 1
fi

PLATFORM=$1

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run linting
echo "🔍 Running linter..."
npm run lint

# Build the project
echo "🏗️  Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

echo "✅ Build completed successfully"

# Deploy based on platform
case $PLATFORM in
    "vercel")
        echo "🚀 Deploying to Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
        else
            echo "❌ Vercel CLI not found. Install with: npm install -g vercel"
            exit 1
        fi
        ;;
    "netlify")
        echo "🚀 Deploying to Netlify..."
        if command -v netlify &> /dev/null; then
            netlify deploy --prod --dir=dist
        else
            echo "❌ Netlify CLI not found. Install with: npm install -g netlify-cli"
            exit 1
        fi
        ;;
    *)
        echo "❌ Unknown platform: $PLATFORM"
        echo "Supported platforms: vercel, netlify"
        exit 1
        ;;
esac

echo "🎉 Deployment completed successfully!"
