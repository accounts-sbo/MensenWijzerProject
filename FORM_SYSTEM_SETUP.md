# Form Handling System - Setup Instructies

## Overzicht
Dit document beschrijft de complete setup van het formulier handling systeem voor SJB Media (De Mensen Wijzer).

## Componenten
1. **Database** - MySQL tabellen voor opslag van formulier data
2. **n8n Workflow** - Automatische verwerking en email notificaties
3. **Frontend Forms** - Training en Contact formulieren
4. **Admin Dashboard** - Beheer interface voor formulier inzendingen

---

## 1. Database Setup

### Stap 1: Importeer Database Schema
Voer het volgende SQL bestand uit in je MySQL database:

```bash
mysql -u [username] -p [database_name] < migrations/001_create_form_system.sql
```

Of importeer via phpMyAdmin/Adminer.

### Wat wordt aangemaakt:
- ✅ `clients` tabel - Client informatie
- ✅ `products` tabel - Beschikbare producten/services
- ✅ `client_products` tabel - Welke producten zijn actief per client
- ✅ `client_form_data` tabel - **NIEUW** - Alle formulier inzendingen
- ✅ `admin_users` tabel - Admin gebruikers voor dashboard
- ✅ Client "sjbmedia" met actieve producten: website, hosting, forms

### Default Admin Credentials
```
Username: sjbmedia
Password: sjbmedia2026
```
**⚠️ BELANGRIJK: Wijzig dit wachtwoord direct na eerste login!**

---

## 2. n8n Workflow Setup

### Workflow Details
- **Naam**: SJB Media - Form Submissions Handler
- **ID**: JDuKvyMarXhe9kxq
- **Webhook URL**: `https://n8n.srv890194.hstgr.cloud/webhook/sjbmedia-form`

### Wat doet de workflow?
1. ✅ Ontvangt formulier data via webhook (POST)
2. ✅ Haalt client info op uit database (sjbmedia)
3. ✅ Slaat formulier data op in `client_form_data` tabel
4. ✅ Stuurt notificatie email naar info@sjbmedia.nl
5. ✅ Stuurt bevestigingsmail naar de inzender
6. ✅ Retourneert success response naar frontend

### Vereiste Credentials in n8n
Je moet de volgende credentials configureren in n8n:

#### MySQL Credentials (ID: 1)
- Host: [je database host]
- Database: [database naam]
- User: [database gebruiker]
- Password: [database wachtwoord]

#### SMTP Credentials (ID: 2)
- Host: [SMTP server]
- Port: 587 (of 465 voor SSL)
- User: [email gebruiker]
- Password: [email wachtwoord]
- From Email: info@sjbmedia.nl

### Workflow Activeren
1. Open n8n: https://n8n.srv890194.hstgr.cloud
2. Zoek workflow: "SJB Media - Form Submissions Handler"
3. Configureer MySQL en SMTP credentials
4. Klik op **Save**
5. Klik op **Activate** (toggle rechtsboven)

---

## 3. Frontend Formulieren

### Training Form
- **Locatie**: `src/components/training/TrainingForm.tsx`
- **Status**: ✅ Geüpdatet om met n8n webhook te werken
- **Form Type**: `training_registration`

### Contact Form
- **Locatie**: `src/components/Contact.tsx`
- **Status**: ✅ Geüpdatet om met n8n webhook te werken
- **Form Type**: `contact`

### Beide formulieren:
- Sturen data naar n8n webhook
- Tonen loading state tijdens verzenden
- Tonen success/error berichten
- Resetten automatisch na succesvolle verzending

---

## 4. Admin Dashboard

### Toegang
- **URL**: `https://jouw-domein.nl/admin`
- **Login**: `sjbmedia` / `sjbmedia2026`

### Features
- ✅ Overzicht van alle formulier inzendingen
- ✅ Filter op type (Training / Contact)
- ✅ Filter op status (Nieuw / Gelezen / etc.)
- ✅ Statistieken dashboard
- ✅ Direct klikbare email/telefoon links

### Huidige Status
⚠️ **Let op**: Het dashboard gebruikt momenteel **mock data** voor demonstratie.

### Live Data Activeren
Er is een complete PHP API beschikbaar in `/public/api/`:

1. **Configureer database credentials** in `public/api/config.php`:
   ```php
   define('DB_HOST', 'localhost');
   define('DB_NAME', 'your_database_name');
   define('DB_USER', 'your_database_user');
   define('DB_PASS', 'your_database_password');
   ```

2. **Update CORS origins** in `public/api/config.php`:
   ```php
   define('ALLOWED_ORIGINS', [
       'https://demensenwijzer.nl',
       'https://www.demensenwijzer.nl'
   ]);
   ```

3. **Activeer API in dashboard** - wijzig `public/admin/dashboard.js`:
   ```javascript
   const API_CONFIG = {
       baseUrl: 'https://jouw-domein.nl/api',
       useMockData: false  // Zet op false
   };
   ```

4. **Test de API**:
   ```bash
   curl https://jouw-domein.nl/api/submissions.php
   ```

Zie `public/api/README.md` voor volledige API documentatie.

---

## 5. Testing

### Test de Training Form
1. Ga naar: `https://jouw-domein.nl/training`
2. Scroll naar "Schrijf je in"
3. Vul formulier in en verstuur
4. Check:
   - ✅ Success melding in browser
   - ✅ Email ontvangen op info@sjbmedia.nl
   - ✅ Bevestigingsmail ontvangen op ingevuld email adres
   - ✅ Data in database tabel `client_form_data`

### Test de Contact Form
1. Ga naar: `https://jouw-domein.nl#contact`
2. Vul formulier in en verstuur
3. Check dezelfde punten als hierboven

---

## 6. Database Queries (Handig voor Testen)

### Alle formulier inzendingen ophalen
```sql
SELECT * FROM client_form_data 
ORDER BY submitted_at DESC;
```

### Alleen nieuwe inzendingen
```sql
SELECT * FROM client_form_data 
WHERE status = 'new' 
ORDER BY submitted_at DESC;
```

### Training aanmeldingen
```sql
SELECT * FROM client_form_data 
WHERE form_type = 'training_registration' 
ORDER BY submitted_at DESC;
```

### Statistieken
```sql
SELECT 
    form_type,
    status,
    COUNT(*) as count
FROM client_form_data
GROUP BY form_type, status;
```

---

## 7. Volgende Stappen

### Prioriteit 1 - Veiligheid
- [ ] Wijzig admin wachtwoord in database
- [ ] Implementeer echte authenticatie (JWT/sessions)
- [ ] Voeg HTTPS toe aan alle endpoints

### Prioriteit 2 - Backend API
- [ ] Maak API endpoint voor dashboard data
- [ ] Implementeer authenticatie voor API
- [ ] Voeg paginering toe voor grote datasets

### Prioriteit 3 - Features
- [ ] Status wijzigen vanuit dashboard
- [ ] Notities toevoegen aan inzendingen
- [ ] Export naar CSV/Excel
- [ ] Email templates aanpasbaar maken

---

## Support

Bij vragen of problemen:
1. Check n8n workflow executions voor errors
2. Check database logs
3. Check browser console voor frontend errors
4. Controleer SMTP settings als emails niet aankomen

## Bestanden Overzicht

```
/migrations/
  └── 001_create_form_system.sql          # Database migratie

/csv database/
  └── database_schema.sql                  # Complete schema documentatie

/src/components/
  ├── Contact.tsx                          # Contact formulier (geüpdatet)
  └── training/TrainingForm.tsx            # Training formulier (geüpdatet)

/public/admin/
  ├── index.html                           # Login pagina
  ├── dashboard.html                       # Dashboard UI
  └── dashboard.js                         # Dashboard logica

/public/api/
  ├── config.php                           # Database & CORS configuratie
  ├── login.php                            # Login endpoint
  ├── submissions.php                      # Submissions data endpoint
  ├── .htaccess                            # Apache configuratie
  └── README.md                            # API documentatie
```

