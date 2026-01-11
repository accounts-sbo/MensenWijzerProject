# Railway Deployment Guide - De Mensen Wijzer

## ✅ Wat is al gedaan:

1. ✅ GitHub repo gecloned naar lokale folder
2. ✅ `railway.json` configuratie aangemaakt
3. ✅ `nixpacks.toml` configuratie aangemaakt
4. ✅ `package.json` start script toegevoegd
5. ✅ Dependencies geïnstalleerd
6. ✅ Build succesvol getest

## 🚀 Railway Deployment Stappen:

### Stap 1: Nieuw Railway Project Aanmaken
1. Ga naar [railway.app](https://railway.app)
2. Log in met je **SBO account**
3. Klik op **"New Project"**
4. Kies **"Deploy from GitHub repo"**

### Stap 2: GitHub Repository Koppelen
1. Selecteer de repository: **`accounts-sbo/MensenWijzerProject`**
2. Railway detecteert automatisch dat het een Node.js project is
3. Railway gebruikt de `railway.json` en `nixpacks.toml` configuratie

### Stap 3: Environment Variables (optioneel)
Als je project environment variables nodig heeft:
1. Ga naar je project in Railway
2. Klik op **"Variables"**
3. Voeg eventuele variabelen toe (bijv. API keys)

### Stap 4: Deploy!
1. Railway start automatisch de eerste deployment
2. Wacht tot de build compleet is (dit kan 2-5 minuten duren)
3. Railway genereert automatisch een URL voor je app

### Stap 5: Custom Domain (optioneel)
1. Ga naar **"Settings"** in je Railway project
2. Klik op **"Domains"**
3. Voeg je custom domain toe (bijv. `demensenwijzer.nl`)
4. Configureer DNS volgens Railway's instructies

## 📝 Belangrijke Configuratie Details:

### Build Command:
```bash
npm install && npm run build
```

### Start Command:
```bash
npm run preview -- --host 0.0.0.0 --port $PORT
```

### Port:
Railway gebruikt automatisch de `$PORT` environment variable (meestal 8080)

## 🔄 Automatische Deployments:

Railway is nu gekoppeld aan je GitHub repo. Elke keer dat je:
- Code pusht naar de `main` branch
- Een pull request merged

...zal Railway automatisch een nieuwe deployment starten!

## 💻 Lokaal Werken:

### Development Server:
```bash
npm run dev
```
Opent op: http://localhost:8080

### Production Build Testen:
```bash
npm run build
npm run preview
```

### Lokale Wijzigingen Pushen:
```bash
git add .
git commit -m "Jouw commit message"
git push origin main
```

## 🐛 Troubleshooting:

### Build Fails:
- Check de Railway logs in het dashboard
- Zorg dat alle dependencies in `package.json` staan
- Test lokaal met `npm run build`

### App Start Niet:
- Check of de `$PORT` variable correct wordt gebruikt
- Bekijk de runtime logs in Railway

### 404 Errors op Routes:
Voor een SPA (Single Page Application) moet je mogelijk een `_redirects` of `vercel.json` toevoegen.
Vite's preview server handelt dit meestal automatisch af.

## 📞 Support:

Als je problemen hebt:
1. Check Railway logs: **"Deployments" → klik op deployment → "View Logs"**
2. Test lokaal eerst met `npm run build && npm run preview`
3. Vraag hulp in de Railway Discord of documentatie

## 🎉 Klaar!

Je app zou nu live moeten zijn op Railway! 🚀

