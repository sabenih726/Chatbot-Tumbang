# Quick Deploy Guide 🚀

## Langkah Cepat untuk Deploy ke Vercel

### 1. Setup GitHub Repository

```bash
# Jalankan script setup
./setup-github.sh

# Atau manual:
git init
git add .
git commit -m "Initial commit: Chatbot Tumbuh Kembang Anak"
```

### 2. Push ke GitHub

1. Buat repository baru di GitHub dengan nama: `chatbot-tumbuh-kembang`
2. Copy URL repository
3. Run commands:

```bash
git remote add origin https://github.com/YOUR_USERNAME/chatbot-tumbuh-kembang.git
git branch -M main
git push -u origin main
```

### 3. Deploy ke Vercel

1. **Kunjungi**: [vercel.com](https://vercel.com)
2. **Login** dengan GitHub account
3. **Import Project**: Pilih repository `chatbot-tumbuh-kembang`
4. **Configure**:
   - Build Command: `npm run build` ✅ (sudah benar)
   - Output Directory: `dist` ✅ (sudah benar)
5. **Environment Variables**: Tambahkan `GEMINI_API_KEY`
6. **Deploy**: Klik Deploy!

### 4. Verifikasi

✅ Build berhasil (tested)  
✅ All files ready  
✅ vercel.json configured  
✅ Environment variables setup  

## Files yang Sudah Disiapkan

- ✅ `.gitignore` - Mengabaikan file yang tidak perlu
- ✅ `README.md` - Dokumentasi lengkap project  
- ✅ `vercel.json` - Konfigurasi deployment Vercel
- ✅ `.env.example` - Template environment variables
- ✅ `DEPLOYMENT.md` - Panduan deployment detail

## Troubleshooting

**Build gagal?**
- Pastikan `GEMINI_API_KEY` sudah di-set di Vercel environment variables

**API tidak berfungsi?**
- Test API key di [Google AI Studio](https://aistudio.google.com/app/apikey)
- Pastikan kuota API masih ada

**Function timeout?**
- Sudah di-set ke 30 detik di `vercel.json`
- Ini normal untuk respons AI yang kompleks

---
📞 Butuh bantuan? Lihat `DEPLOYMENT.md` untuk panduan lengkap!