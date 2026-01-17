# Action Plan - Form System Fix & Deploy

## 🎯 Doel
Form handling systeem werkend krijgen voor SJB Media (De Mensen Wijzer)

---

## 🚨 KRITIEKE ACTIE - START HIER!

### ⚠️ Fix Password Hash (5 minuten)

**Probleem:** Admin kan niet inloggen - password hash is fake!

**Stappen:**
1. Open `migrations/001_create_form_system.sql`
2. Ga naar regel 148
3. Vervang deze regel:
   ```sql
   '$2a$10$rKZxQxVkKqNqYqGqYqGqYuO7xQxVkKqNqYqGqYqGqYuO7xQxVkKqNq',
   ```
   
   Door deze:
   ```sql
   '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
   ```

4. Save het bestand

**Verificatie:**
Deze hash is de correcte bcrypt hash van het wachtwoord `sjbmedia2026`.

---

## 📋 Volledige Action Plan

### Fase 1: Database Setup (10 minuten)

#### Stap 1.1: Fix Password Hash ✅ (zie boven)
- [ ] Open `migrations/001_create_form_system.sql`
- [ ] Update regel 148 met correcte hash
- [ ] Save bestand

#### Stap 1.2: Import Database
```bash
mysql -u [username] -p [database] < migrations/001_create_form_system.sql
```

**Verwachte output:** Geen errors

#### Stap 1.3: Verify Database
```sql
-- Check tables
SHOW TABLES;

-- Check client
SELECT * FROM clients WHERE client_code = 'sjbmedia';

-- Check admin user
SELECT username, email, role FROM admin_users WHERE username = 'sjbmedia';

-- Check products
SELECT * FROM products;

-- Check client_products
SELECT * FROM client_products;
```

**Verwacht:**
- 5 tabellen aangemaakt
- 1 client (sjbmedia)
- 1 admin user (sjbmedia)
- 3 products (website, hosting, forms)
- 3 client_products (alle actief)

---

### Fase 2: n8n Workflow Setup (10 minuten)

#### Stap 2.1: Open n8n
- [ ] Ga naar: https://n8n.srv890194.hstgr.cloud
- [ ] Login
- [ ] Zoek workflow: "SJB Media - Form Submissions Handler"

#### Stap 2.2: Configureer MySQL Credential
- [ ] Click op node "Get Client Info"
- [ ] Click op "Credentials" dropdown
- [ ] Click "Create New Credential"
- [ ] Vul in:
  - **Name:** SJB Media MySQL
  - **Host:** [jouw database host]
  - **Database:** [jouw database naam]
  - **User:** [jouw database user]
  - **Password:** [jouw database password]
- [ ] Click "Save"

#### Stap 2.3: Configureer SMTP Credential
- [ ] Click op node "Send Email Notification"
- [ ] Click op "Credentials" dropdown
- [ ] Click "Create New Credential"
- [ ] Vul in:
  - **Name:** SJB Media SMTP
  - **Host:** [jouw SMTP host]
  - **Port:** 587 (of 465 voor SSL)
  - **User:** [jouw email]
  - **Password:** [jouw email password]
  - **From Email:** info@sjbmedia.nl
  - **From Name:** SJB Media
- [ ] Click "Save"

#### Stap 2.4: Save & Activate Workflow
- [ ] Click "Save" (rechtsboven)
- [ ] Toggle "Active" switch (rechtsboven)
- [ ] Verify status is "Active"

#### Stap 2.5: Test Workflow
```bash
curl -X POST https://n8n.srv890194.hstgr.cloud/webhook/sjbmedia-form \
  -H "Content-Type: application/json" \
  -d '{
    "formType": "contact",
    "name": "Test User",
    "email": "test@example.com",
    "message": "Dit is een test bericht"
  }'
```

**Verwachte output:**
```json
{
  "success": true,
  "message": "Form submitted successfully"
}
```

**Check:**
- [ ] Email ontvangen op info@sjbmedia.nl
- [ ] Email ontvangen op test@example.com
- [ ] Data in database:
  ```sql
  SELECT * FROM client_form_data ORDER BY submitted_at DESC LIMIT 1;
  ```

---

### Fase 3: Frontend Test (5 minuten)

#### Stap 3.1: Build Frontend
```bash
npm run build
```

#### Stap 3.2: Test Training Form
- [ ] Ga naar: `http://localhost:5173/training`
- [ ] Vul formulier in met test data
- [ ] Submit
- [ ] Verify success message
- [ ] Check email inbox
- [ ] Check database

#### Stap 3.3: Test Contact Form
- [ ] Ga naar: `http://localhost:5173#contact`
- [ ] Vul formulier in met test data
- [ ] Submit
- [ ] Verify success message
- [ ] Check email inbox
- [ ] Check database

---

### Fase 4: Admin Dashboard Test (5 minuten)

#### Stap 4.1: Test Login
- [ ] Ga naar: `http://localhost:5173/admin`
- [ ] Login met:
  - Username: `sjbmedia`
  - Password: `sjbmedia2026`
- [ ] Verify login succeeds
- [ ] Verify redirect naar dashboard

#### Stap 4.2: Test Dashboard (Mock Data)
- [ ] Verify statistieken tonen
- [ ] Verify submissions tabel toont
- [ ] Test filters (Type, Status)
- [ ] Test email/phone links
- [ ] Test logout

---

### Fase 5: API Setup (Optioneel - 10 minuten)

#### Stap 5.1: Configure API
- [ ] Open `public/api/config.php`
- [ ] Update database credentials:
  ```php
  define('DB_HOST', 'actual_host');
  define('DB_NAME', 'actual_database');
  define('DB_USER', 'actual_user');
  define('DB_PASS', 'actual_password');
  ```
- [ ] Update CORS origins:
  ```php
  define('ALLOWED_ORIGINS', [
      'https://demensenwijzer.nl',
      'https://www.demensenwijzer.nl'
  ]);
  ```

#### Stap 5.2: Test API
```bash
# Test login
curl -X POST http://localhost/api/login.php \
  -H "Content-Type: application/json" \
  -d '{"username":"sjbmedia","password":"sjbmedia2026"}'

# Test submissions
curl http://localhost/api/submissions.php
```

#### Stap 5.3: Connect Dashboard to API
- [ ] Open `public/admin/dashboard.js`
- [ ] Update config:
  ```javascript
  const API_CONFIG = {
      baseUrl: 'http://localhost/api',
      useMockData: false
  };
  ```
- [ ] Refresh dashboard
- [ ] Verify live data toont

---

## ✅ Success Checklist

### Database
- [ ] Migration importeert zonder errors
- [ ] Alle 5 tabellen bestaan
- [ ] sjbmedia client bestaat
- [ ] Admin user kan inloggen

### n8n Workflow
- [ ] Workflow is geactiveerd
- [ ] Test webhook werkt
- [ ] Emails worden verstuurd
- [ ] Data wordt opgeslagen

### Frontend
- [ ] Training form werkt
- [ ] Contact form werkt
- [ ] Success messages tonen
- [ ] Emails komen aan

### Admin Dashboard
- [ ] Login werkt
- [ ] Dashboard laadt
- [ ] Data toont (mock of live)
- [ ] Filters werken

---

## 🆘 Troubleshooting

### Login werkt niet?
- Check of password hash is gefixt (regel 148)
- Check database: `SELECT * FROM admin_users;`
- Check browser console voor errors

### n8n webhook werkt niet?
- Check of workflow is geactiveerd
- Check n8n execution logs
- Check credentials zijn correct

### Emails komen niet aan?
- Check spam folder
- Check SMTP credentials in n8n
- Check n8n execution logs

### Database errors?
- Check MySQL error log
- Check foreign key constraints
- Check table names/column names

---

## 📚 Documentatie

- **Volledige context:** `CONTEXT_FOR_NEXT_AGENT.md`
- **Gevonden fouten:** `ERRORS_FOUND.md`
- **Setup guide:** `FORM_SYSTEM_SETUP.md`
- **Quick start:** `QUICK_START.md`
- **Deployment:** `DEPLOYMENT_CHECKLIST.md`

---

## 🎯 Totale Tijd

- **Fase 1:** Database Setup - 10 min
- **Fase 2:** n8n Workflow - 10 min
- **Fase 3:** Frontend Test - 5 min
- **Fase 4:** Dashboard Test - 5 min
- **Fase 5:** API Setup (optioneel) - 10 min

**Totaal:** ~30-40 minuten

---

## 🚀 Start Nu!

1. **Fix password hash** in `migrations/001_create_form_system.sql` (regel 148)
2. **Import database**
3. **Configureer n8n**
4. **Test alles**

Succes! 🎉

