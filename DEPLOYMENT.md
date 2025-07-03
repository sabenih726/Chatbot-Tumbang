# Deployment Guide - Vercel

## Persiapan GitHub Repository

1. **Initialize Git Repository:**
```bash
git init
git add .
git commit -m "Initial commit: Chatbot Tumbuh Kembang Anak"
```

2. **Push ke GitHub:**
```bash
# Ganti dengan URL repository Anda
git remote add origin https://github.com/username/chatbot-tumbuh-kembang.git
git branch -M main
git push -u origin main
```

## Deployment ke Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. **Login ke Vercel:**
   - Kunjungi [vercel.com](https://vercel.com)
   - Login dengan GitHub account

2. **Import Project:**
   - Klik "New Project"
   - Pilih repository "chatbot-tumbuh-kembang"
   - Klik "Import"

3. **Configure Project:**
   - Project Name: `chatbot-tumbuh-kembang`
   - Framework Preset: `Other`
   - Root Directory: `./` (default)
   - Build Command: `npm run build`
   - Output Directory: `dist`

4. **Environment Variables:**
   Tambahkan di Vercel Dashboard:
   ```
   GEMINI_API_KEY=your_actual_gemini_api_key
   NODE_ENV=production
   ```

5. **Deploy:**
   - Klik "Deploy"
   - Tunggu proses build selesai

### Method 2: Via Vercel CLI

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Login:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel --prod
```

## Verifikasi Deployment

1. **Check Build Logs:**
   - Pastikan build berhasil tanpa error
   - Lihat console logs di Vercel dashboard

2. **Test API Endpoints:**
```bash
# Ganti dengan URL deployment Anda
curl https://your-app.vercel.app/api/health
```

3. **Test Chat Functionality:**
   - Buka aplikasi di browser
   - Test semua fitur chat

## Troubleshooting

### Build Errors

**Error: Module not found**
```bash
# Pastikan semua dependencies terinstall
npm install
```

**Error: TypeScript compilation**
```bash
# Check TypeScript errors
npm run check
```

### Runtime Errors

**API Key Not Working:**
- Pastikan `GEMINI_API_KEY` sudah di-set di Vercel environment variables
- Cek apakah API key valid di Google AI Studio

**500 Internal Server Error:**
- Check function logs di Vercel dashboard
- Pastikan semua dependencies production sudah ada

### Performance Issues

**Cold Start Issues:**
- Vercel serverless functions mungkin lambat pada first request
- Ini normal untuk free tier

**Function Timeout:**
- Gemini API response kadang lambat
- Sudah di-set timeout 30 detik di vercel.json

## Custom Domain (Opsional)

1. **Beli Domain:**
   - Dari provider seperti Namecheap, GoDaddy, dll

2. **Setup di Vercel:**
   - Go to Project Settings > Domains
   - Add custom domain
   - Follow DNS configuration instructions

## Monitoring

1. **Analytics:**
   - Vercel Analytics tersedia di dashboard
   - Monitor visitor dan performance

2. **Error Tracking:**
   - Check function logs untuk errors
   - Setup error monitoring jika diperlukan

## Environment Variables Setup

Pastikan environment variables berikut di-set di Vercel:

```bash
# Required
GEMINI_API_KEY=AIza...your_actual_key

# Optional
NODE_ENV=production
```

## Post-Deployment Checklist

- [ ] Website dapat diakses di URL Vercel
- [ ] API health check berfungsi (`/api/health`)
- [ ] Chat functionality berfungsi normal
- [ ] All fitur buttons (Stimulasi, Dongeng, Milestone) bekerja
- [ ] Responsive design baik di mobile dan desktop
- [ ] No console errors di browser

## Automatic Deployments

Setelah setup awal, setiap push ke branch `main` akan otomatis:
1. Trigger build di Vercel
2. Deploy jika build berhasil
3. Update production URL

---

🎉 **Selamat! Aplikasi chatbot Anda sudah live dan dapat diakses publik.**