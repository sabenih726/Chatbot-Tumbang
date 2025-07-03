#!/bin/bash

# Setup GitHub Repository Script
# Jalankan script ini untuk menyiapkan repository GitHub

echo "🚀 Setting up GitHub repository untuk Chatbot Tumbuh Kembang Anak..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git repository initialized"
else
    echo "✅ Git repository already exists"
fi

# Add all files
echo "📁 Adding files to git..."
git add .

# Initial commit
echo "💾 Creating initial commit..."
git commit -m "feat: initial commit - Chatbot Tumbuh Kembang Anak

- React + TypeScript frontend with Tailwind CSS
- Express.js backend with Google Gemini AI integration
- Chat functionality dengan fitur stimulasi, dongeng, dan milestone
- Responsive design untuk mobile dan desktop
- Ready for Vercel deployment"

echo "✅ Initial commit created"

echo ""
echo "🎯 Next steps:"
echo "1. Create new repository di GitHub dengan nama: chatbot-tumbuh-kembang"
echo "2. Copy repository URL dari GitHub"
echo "3. Run commands berikut:"
echo ""
echo "   git remote add origin https://github.com/yourusername/chatbot-tumbuh-kembang.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "4. Setup deployment di Vercel:"
echo "   - Import project dari GitHub"
echo "   - Set environment variable: GEMINI_API_KEY"
echo "   - Deploy!"
echo ""
echo "📖 Lihat DEPLOYMENT.md untuk panduan lengkap deployment"