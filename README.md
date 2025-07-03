# Chatbot Tumbuh Kembang Anak 🤖👶

Asisten AI untuk membantu orang tua Indonesia dalam memantau dan mendukung tumbuh kembang anak menggunakan teknologi Google Gemini AI.

## 📋 Fitur Utama

- **💬 Chat Interaktif**: Konsultasi umum tentang tumbuh kembang anak
- **🎯 Ide Stimulasi**: Saran aktivitas edukatif sesuai usia anak
- **📖 Dongeng Interaktif**: Cerita khusus untuk perkembangan anak
- **📊 Milestone Tracking**: Panduan milestone perkembangan anak
- **🇮🇩 Bahasa Indonesia**: Interface lengkap dalam Bahasa Indonesia
- **📱 Mobile Responsive**: Optimal untuk penggunaan di smartphone

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- Google Gemini API Key

### Installation

1. **Clone repository:**
```bash
git clone https://github.com/username/chatbot-tumbuh-kembang.git
cd chatbot-tumbuh-kembang
```

2. **Install dependencies:**
```bash
npm install
```

3. **Setup environment:**
```bash
cp .env.example .env
# Edit .env dan tambahkan GEMINI_API_KEY
```

4. **Start development:**
```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5000`

## 🏗️ Tech Stack

### Frontend
- **React 18** dengan TypeScript
- **Tailwind CSS** untuk styling
- **Shadcn/ui** untuk komponen UI
- **TanStack Query** untuk state management
- **Wouter** untuk routing

### Backend
- **Node.js** dengan Express.js
- **Google Gemini AI** untuk respons AI
- **TypeScript** dengan ES modules
- **Zod** untuk validasi data

### Development
- **Vite** untuk build tool dan hot reload
- **ESBuild** untuk bundling production
- **Drizzle ORM** untuk database operations

## 📁 Struktur Project

```
├── client/              # Frontend React app
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Route pages
│   │   ├── hooks/       # Custom React hooks
│   │   └── lib/         # Utilities dan API client
├── server/              # Backend Express server
│   ├── services/        # Business logic
│   └── routes.ts        # API endpoints
├── shared/              # Shared types dan schemas
└── dist/                # Production build output
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start           # Start production server

# Database
npm run db:generate  # Generate database migrations
npm run db:migrate   # Run database migrations
```

## 🌐 Deployment

### Vercel (Recommended)

1. **Push ke GitHub**
2. **Import project di Vercel**
3. **Set environment variables:**
   - `GEMINI_API_KEY`: Your Google Gemini API key
4. **Deploy!**

Lihat [DEPLOYMENT.md](./DEPLOYMENT.md) untuk panduan lengkap.

## 🔒 Environment Variables

```bash
# Required
GEMINI_API_KEY=your_gemini_api_key_here

# Optional
NODE_ENV=development
DATABASE_URL=your_database_url_here
```

Lihat [.env.example](./.env.example) untuk template lengkap.

## 🎯 Cara Penggunaan

1. **Chat Umum**: Tanyakan hal-hal umum tentang tumbuh kembang anak
2. **Ide Stimulasi**: Klik tombol untuk mendapat saran aktivitas edukatif
3. **Buatkan Dongeng**: Generate cerita interaktif untuk anak
4. **Milestone**: Dapatkan panduan milestone perkembangan

## 🛠️ API Endpoints

```
GET  /api/health           # Health check
POST /api/chat            # Chat dengan AI
```

## 🔍 Features Detail

### Chat System
- Real-time messaging interface
- Support untuk berbagai jenis pertanyaan
- Context-aware AI responses
- Message history

### AI Integration
- Google Gemini 2.0 Flash model
- Specialized prompts untuk setiap fitur
- Safety filtering untuk konten yang sesuai anak
- Indonesian language optimization

### UI/UX
- Mobile-first responsive design
- Dark mode support
- Accessible components
- Loading states dan error handling

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

Jika mengalami masalah:

1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) untuk troubleshooting
2. Buat issue di GitHub repository
3. Pastikan environment variables sudah benar

## 🙏 Acknowledgments

- **Google Gemini AI** untuk teknologi AI
- **Shadcn/ui** untuk komponen UI yang excellent
- **Vercel** untuk platform deployment
- **Open source community** untuk tools yang digunakan

---

**Catatan**: Aplikasi ini adalah asisten AI dan bukan pengganti konsultasi medis profesional. Untuk masalah kesehatan serius, selalu konsultasikan dengan dokter atau ahli kesehatan anak.