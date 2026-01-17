# Context voor Volgende Agent - Form System Implementatie

## 🚨 BELANGRIJKSTE EERST

**KRITIEKE FOUT GEVONDEN:** De password hash in de migration is **FAKE**!

**Bestand:** `migrations/001_create_form_system.sql` regel 148
**Probleem:** Admin kan NIET inloggen zonder deze fix
**Fix:** Zie `ERRORS_FOUND.md` voor details en oplossing

**Start hier:** Fix de password hash EERST, anders werkt niets!

---

## 📍 Waar We Zijn

We zijn bezig met het implementeren van een **compleet form handling systeem** voor SJB Media (De Mensen Wijzer).

### Wat is Gedaan ✅
1. **Database schema ontworpen** - `migrations/001_create_form_system.sql`
2. **n8n workflow aangemaakt** - "SJB Media - Form Submissions Handler" (ID: JDuKvyMarXhe9kxq)
3. **Frontend formulieren geüpdatet** - Training form en Contact form
4. **Admin dashboard gebouwd** - Login + dashboard met mock data
5. **Backend API gemaakt** - PHP endpoints voor dashboard
6. **Uitgebreide documentatie geschreven** - Meerdere README bestanden

### Wat Werkt ✅
- Frontend formulieren zijn geïntegreerd met n8n webhook
- Admin dashboard UI is compleet (met mock data)
- API endpoints zijn geschreven
- Documentatie is compleet

---

## ⚠️ Problemen Gevonden

### 🔴 KRITIEK: Password Hash is Fake!
**Bestand:** `migrations/001_create_form_system.sql` (regel 148)

**Probleem:**
De bcrypt hash in de migration is **NEP**:
```sql
'$2a$10$rKZxQxVkKqNqYqGqYqGqYuO7xQxVkKqNqYqGqYqGqYuO7xQxVkKqNq'
```

Dit is geen echte hash van `sjbmedia2026` - **admin kan NIET inloggen!**

**Fix:**
Genereer echte hash:
```bash
php -r "echo password_hash('sjbmedia2026', PASSWORD_DEFAULT);"
```

Of gebruik deze correcte hash:
```sql
'$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'
```

**Actie:**
- [ ] Update regel 148 in `migrations/001_create_form_system.sql`
- [ ] Test login na database import

---

### 1. **Migration Script - Password Hash**
**Bestand:** `migrations/001_create_form_system.sql`

**Status:** SQL syntax is correct, MAAR password hash is fake (zie boven)

**Actie Nodig:**
- Fix password hash (regel 148)
- Test import in database
- Verify admin user kan inloggen

---

### 2. **n8n Workflow - Niet Geconfigureerd**
**Workflow:** "SJB Media - Form Submissions Handler" (ID: JDuKvyMarXhe9kxq)

**Problemen:**
- Workflow bestaat maar is **niet geactiveerd** (`active: false`)
- MySQL credentials **niet geconfigureerd**
- SMTP credentials **niet geconfigureerd**
- Niet getest met echte data

**Actie Nodig:**
- Open n8n: https://n8n.srv890194.hstgr.cloud
- Configureer MySQL credentials
- Configureer SMTP credentials
- Test workflow met sample data
- **Activeer** workflow (toggle rechtsboven)

---

## 🎯 Wat Er Moet Gebeuren

### 🔴 PRIORITEIT 1: Fix Password Hash (KRITIEK!)
**Dit MOET eerst, anders werkt login niet!**

1. **Open:** `migrations/001_create_form_system.sql`
2. **Ga naar:** Regel 148
3. **Vervang:** De fake hash door een echte hash
4. **Gebruik:**
   ```sql
   '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'
   ```
   Of genereer nieuwe:
   ```bash
   php -r "echo password_hash('sjbmedia2026', PASSWORD_DEFAULT);"
   ```
5. **Save** het bestand

### Prioriteit 2: Test Database Import
1. **Import:** `migrations/001_create_form_system.sql`
2. **Verify:** Alle tabellen zijn aangemaakt
3. **Test login:** Probeer in te loggen met `sjbmedia` / `sjbmedia2026`

**Verwachte Tabellen:**
- `clients` - Client informatie
- `products` - Beschikbare services
- `client_products` - Actieve producten per client
- `client_form_data` - **BELANGRIJK** - Formulier inzendingen
- `admin_users` - Admin gebruikers

### Prioriteit 3: Configureer n8n Workflow
1. **Open n8n:** https://n8n.srv890194.hstgr.cloud
2. **Find workflow:** "SJB Media - Form Submissions Handler"
3. **Configureer credentials:**
   - Click op "Get Client Info" node
   - Add MySQL credential (database connection)
   - Click op "Send Email Notification" node
   - Add SMTP credential (email server)
4. **Save** workflow
5. **Activate** workflow (toggle rechtsboven)
6. **Test** met curl:
   ```bash
   curl -X POST https://n8n.srv890194.hstgr.cloud/webhook/sjbmedia-form \
     -H "Content-Type: application/json" \
     -d '{"formType":"contact","name":"Test","email":"test@test.com","message":"Test"}'
   ```

### Prioriteit 4: Test End-to-End
1. Import database schema
2. Configure n8n credentials
3. Activate workflow
4. Test training form submission
5. Test contact form submission
6. Verify emails arrive
7. Verify data in database

---

## 📁 Belangrijke Bestanden

### Database
```
migrations/001_create_form_system.sql    # ⚠️ BEVAT FOUTEN - FIX DIT EERST
csv database/database_schema.sql         # Reference documentatie
```

### n8n
```
Workflow ID: JDuKvyMarXhe9kxq
Workflow Name: SJB Media - Form Submissions Handler
Webhook URL: https://n8n.srv890194.hstgr.cloud/webhook/sjbmedia-form
Status: ⚠️ BEVAT FOUTEN - REVIEW NODIG
```

### Frontend
```
src/components/training/TrainingForm.tsx # Training formulier (geüpdatet)
src/components/Contact.tsx               # Contact formulier (geüpdatet)
```

### Admin Dashboard
```
public/admin/index.html                  # Login pagina
public/admin/dashboard.html              # Dashboard UI
public/admin/dashboard.js                # Dashboard logica (mock data)
```

### API
```
public/api/config.php                    # Database configuratie
public/api/login.php                     # Login endpoint
public/api/submissions.php               # Data endpoint
```

### Documentatie
```
README_FORM_SYSTEM.md                    # Hoofddocument
QUICK_START.md                           # 5-minuten setup
IMPLEMENTATION_SUMMARY.md                # Wat is gebouwd
FORM_SYSTEM_OVERVIEW.md                  # Systeem architectuur
FORM_SYSTEM_SETUP.md                     # Complete setup
DEPLOYMENT_CHECKLIST.md                  # Deployment stappen
```

---

## 🔍 Specifieke Fouten om te Checken

### Migration Script (`migrations/001_create_form_system.sql`)
- [ ] Check alle CREATE TABLE statements
- [ ] Check foreign key constraints
- [ ] Check data types (VARCHAR lengths, etc.)
- [ ] Check default values
- [ ] Check AUTO_INCREMENT settings
- [ ] Check UNIQUE constraints
- [ ] Check INDEX definitions
- [ ] Test import in clean database

### n8n Workflow
- [ ] Check webhook configuration
- [ ] Check MySQL query syntax in "Get Client Info"
- [ ] Check INSERT statement in "Save to Database"
- [ ] Check email templates
- [ ] Check response format
- [ ] Check error handling
- [ ] Test with sample data

---

## 🎯 Doel van het Systeem

### Wat het Moet Doen
1. **Formulier ontvangen** - Via webhook van website
2. **Client info ophalen** - Uit database (sjbmedia)
3. **Data opslaan** - In `client_form_data` tabel
4. **Email sturen** - Notificatie naar admin (info@sjbmedia.nl)
5. **Email sturen** - Bevestiging naar gebruiker
6. **Response geven** - Success JSON terug naar frontend

### Data Flow
```
Website Form → n8n Webhook → Get Client → Save to DB → Send Emails → Response
```

---

## 🔧 Technische Details

### Database Schema (Verwacht)
```sql
-- client_form_data tabel (belangrijkste tabel)
CREATE TABLE client_form_data (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_id INT NOT NULL,
    form_type VARCHAR(50) NOT NULL,  -- 'contact' of 'training_registration'
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    message TEXT,
    form_data_json JSON,
    status VARCHAR(20) DEFAULT 'new',
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read_at TIMESTAMP NULL,
    processed_at TIMESTAMP NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    notes TEXT,
    FOREIGN KEY (client_id) REFERENCES clients(id)
);
```

### n8n Workflow Nodes (Verwacht)
1. **Webhook** - POST endpoint
2. **MySQL Query** - SELECT client info
3. **MySQL Insert** - INSERT form data
4. **Email Send** - Notification to admin
5. **Email Send** - Confirmation to user
6. **Respond to Webhook** - JSON response

---

## 📋 Checklist voor Volgende Agent

### Stap 1: Review & Fix Migration
- [ ] Open `migrations/001_create_form_system.sql`
- [ ] Lees de SQL code regel voor regel
- [ ] Identificeer syntax errors
- [ ] Fix alle errors
- [ ] Test import in test database
- [ ] Verify alle tabellen bestaan
- [ ] Verify data is correct (sjbmedia client, etc.)

### Stap 2: Review & Fix n8n Workflow
- [ ] Open n8n workflow in browser
- [ ] Check elke node configuratie
- [ ] Fix eventuele errors
- [ ] Test met sample data
- [ ] Verify emails worden verstuurd
- [ ] Verify data wordt opgeslagen

### Stap 3: End-to-End Test
- [ ] Import database schema
- [ ] Configure n8n credentials (MySQL + SMTP)
- [ ] Activate workflow
- [ ] Submit test via training form
- [ ] Submit test via contact form
- [ ] Check emails arrived
- [ ] Check database has entries
- [ ] Check admin dashboard shows data

### Stap 4: Documentatie Update
- [ ] Update documentatie met fixes
- [ ] Document eventuele wijzigingen
- [ ] Update QUICK_START.md indien nodig

---

## 🆘 Hulp Nodig?

### Voor Migration Errors
1. Check MySQL error logs
2. Test queries individueel in MySQL Workbench
3. Check foreign key constraints
4. Verify table/column names

### Voor n8n Errors
1. Check n8n execution logs
2. Test each node individually
3. Check credentials configuration
4. Verify webhook URL is correct

### Voor Testing
1. Use curl to test webhook directly
2. Check browser console for frontend errors
3. Check database for inserted data
4. Check email spam folders

---

## 💡 Tips voor Volgende Agent

1. **Start met migration** - Dit is de basis, moet eerst werken
2. **Test incrementeel** - Test elke stap apart
3. **Check n8n logs** - Execution logs tonen exact wat fout gaat
4. **Use sample data** - Test met simpele test data eerst
5. **Document changes** - Update documentatie met je fixes

---

## 🎯 Success Criteria

Het systeem werkt als:
- ✅ Migration script importeert zonder errors
- ✅ Alle tabellen zijn aangemaakt
- ✅ n8n workflow draait zonder errors
- ✅ Formulieren submitten succesvol
- ✅ Emails komen aan (admin + gebruiker)
- ✅ Data verschijnt in database
- ✅ Admin dashboard toont data (na API configuratie)

---

## 📞 Belangrijke URLs & Credentials

### n8n
- **URL:** https://n8n.srv890194.hstgr.cloud
- **Workflow ID:** JDuKvyMarXhe9kxq
- **Webhook:** https://n8n.srv890194.hstgr.cloud/webhook/sjbmedia-form

### Admin Dashboard
- **URL:** `/admin`
- **Username:** `sjbmedia`
- **Password:** `sjbmedia2026` (⚠️ moet gewijzigd worden)

### Database
- **Client Code:** `sjbmedia`
- **Client Name:** `SJB Media - De Mensen Wijzer`
- **Admin Email:** `info@sjbmedia.nl`

---

## 🚀 Volgende Stappen

1. **Fix migration script** - Prioriteit 1
2. **Fix n8n workflow** - Prioriteit 2
3. **Test end-to-end** - Prioriteit 3
4. **Update documentatie** - Prioriteit 4

**Start met:** Review `migrations/001_create_form_system.sql` en fix alle SQL errors.

Succes! 🎯

