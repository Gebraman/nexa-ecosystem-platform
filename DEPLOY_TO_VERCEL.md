# Deploying Nexa Ecosystem Platform to Vercel

This repository contains the complete, modernized, and multi-vertical rebuild of the Nexa platform.

## Method 1: Push to GitHub & Connect to Vercel (Recommended)

1. Open your terminal inside this folder:
   ```bash
   cd "c:\Users\PC\Desktop\yesgeruta lij\nexa_ecosystem_platform"
   ```

2. Initialize Git (or push to your existing GitHub repo `nexadigitalteamhq-design`):
   ```bash
   git init
   git add .
   git commit -m "feat: rebuild Nexa platform as multi-vertical ecosystem v2.0"
   git branch -M main
   git remote add origin https://github.com/<your-username>/nexa-ecosystem-platform.git
   git push -u origin main
   ```

3. Go to [Vercel Dashboard](https://vercel.com/dashboard):
   - Click **Add New...** -> **Project**.
   - Import your GitHub repository.
   - Framework Preset: **Vite**.
   - Build Command: `npm run build`.
   - Output Directory: `dist`.
   - Click **Deploy**.

4. If you already have `nexa-portfolio-theta.vercel.app`:
   - Go to your existing project settings on Vercel.
   - Push this new code to the linked GitHub branch, or update the Git repository root directory. Vercel will automatically redeploy!

---

## Method 2: Instant Deploy via Vercel CLI

```bash
cd "c:\Users\PC\Desktop\yesgeruta lij\nexa_ecosystem_platform"
npm install -g vercel
vercel --prod
```
Follow the interactive prompts to deploy directly to your Vercel account in under 60 seconds.
