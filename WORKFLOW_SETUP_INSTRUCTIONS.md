# 🚀 n8n Workflow Setup - SJB Media Form Handler

## ✅ Workflow Status
- **Workflow ID**: `RbOQSNG5NMqD4XSs`
- **Name**: SJB Media - Form Submissions Handler
- **Webhook URL**: `https://n8n.srv890194.hstgr.cloud/webhook/sjbmedia-form`
- **Status**: ✅ VALID (0 errors, 4 minor warnings)
- **Active**: ❌ NO (moet je nog activeren)

---

## 📋 Wat Moet Je Doen?

### Stap 1: Open de Workflow in n8n
1. Ga naar: https://n8n.srv890194.hstgr.cloud
2. Zoek workflow: **"SJB Media - Form Submissions Handler"**
3. Open de workflow

### Stap 2: Configureer MySQL Credentials
De workflow heeft 2 MySQL nodes die credentials nodig hebben:

#### Node: "Get Client Info"
1. Klik op de node
2. Klik op **"Credential to connect with"**
3. Selecteer je MySQL database credential OF maak een nieuwe aan:
   - **Host**: Je database host (bijv. `localhost` of Railway host)
   - **Database**: Je database naam
   - **User**: Database gebruiker
   - **Password**: Database wachtwoord
   - **Port**: `3306` (standaard MySQL)

#### Node: "Save to Database"
1. Klik op de node
2. Gebruik **DEZELFDE** MySQL credential als bij "Get Client Info"

### Stap 3: Configureer SMTP Credentials (Email)
De workflow heeft 2 email nodes die SMTP credentials nodig hebben:

#### Node: "Send Email Notification"
1. Klik op de node
2. Klik op **"Credential to connect with"**
3. Selecteer je SMTP credential OF maak een nieuwe aan:
   - **Host**: Je SMTP server (bijv. `smtp.gmail.com`, `smtp.transip.nl`)
   - **Port**: `587` (TLS) of `465` (SSL)
   - **User**: Je email adres
   - **Password**: Je email wachtwoord of app-specific password
   - **Secure**: Ja (voor SSL/TLS)

#### Node: "Send Confirmation to User"
1. Klik op de node
2. Gebruik **DEZELFDE** SMTP credential als bij "Send Email Notification"

### Stap 4: Test de Workflow
1. Klik op **"Test workflow"** rechtsboven
2. Klik op **"Listen for test event"** bij de webhook node
3. Test met curl:
```bash
curl -X POST https://n8n.srv890194.hstgr.cloud/webhook/sjbmedia-form \
  -H "Content-Type: application/json" \
  -d '{
    "formType": "contact",
    "name": "Test User",
    "email": "test@example.com",
    "phone": "0612345678",
    "company": "Test BV",
    "message": "Dit is een test bericht"
  }'
```

**Verwacht resultaat:**
```json
{
  "success": true,
  "message": "Formulier succesvol ontvangen",
  "submissionId": 1
}
```

### Stap 5: Activeer de Workflow
1. Klik op de **"Active"** toggle rechtsboven (moet groen worden)
2. Verschuif een node een klein beetje
3. Klik op **"Save"**

---

## 🔧 Workflow Details

### Flow:
```
Form Webhook 
  → Get Client Info (MySQL)
  → Save to Database (MySQL)
  → Send Email Notification (SMTP)
  → Send Confirmation to User (SMTP)
  → Success Response
```

### Nodes:
1. **Form Webhook** - Ontvangt POST requests van formulieren
2. **Get Client Info** - Haalt client ID op uit database
3. **Save to Database** - Slaat formulier data op in `client_form_data` tabel
4. **Send Email Notification** - Stuurt email naar `info@sjbmedia.nl`
5. **Send Confirmation to User** - Stuurt bevestiging naar gebruiker
6. **Success Response** - Stuurt JSON response terug naar frontend

### Error Handling:
- ✅ Webhook: `onError: continueRegularOutput`
- ✅ MySQL nodes: `retryOnFail: true, maxTries: 3`
- ✅ Email nodes: `onError: continueRegularOutput` (workflow stopt niet als email faalt)

---

## 📊 Database Vereisten

Zorg dat deze tabel bestaat in je database:
```sql
CREATE TABLE `client_form_data` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `client_id` INT NOT NULL,
  `form_type` ENUM('contact', 'training_registration') NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50),
  `company` VARCHAR(255),
  `message` TEXT,
  `form_data_json` JSON,
  `ip_address` VARCHAR(45),
  `user_agent` VARCHAR(500),
  `status` ENUM('new', 'read', 'contacted', 'completed', 'spam') DEFAULT 'new',
  `submitted_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `read_at` TIMESTAMP NULL,
  `processed_at` TIMESTAMP NULL,
  `notes` TEXT,
  FOREIGN KEY (`client_id`) REFERENCES `clients`(`id`) ON DELETE CASCADE
);
```

Importeer: `migrations/001_create_form_system.sql`

---

## 🎯 Frontend Integratie

De frontend formulieren zijn al geconfigureerd:
- **Training Form**: `src/components/training/TrainingForm.tsx`
- **Contact Form**: `src/components/Contact.tsx`

Beide sturen naar: `https://n8n.srv890194.hstgr.cloud/webhook/sjbmedia-form`

---

## ⚠️ Troubleshooting

### Workflow werkt niet?
1. Check of workflow **Active** is (groene toggle)
2. Check of MySQL credentials correct zijn
3. Check of SMTP credentials correct zijn
4. Check database connection (kan je verbinden?)
5. Kijk in n8n **Executions** tab voor errors

### Geen emails ontvangen?
1. Check SMTP credentials
2. Check spam folder
3. Test SMTP node apart (klik op node → Execute node)

### Database errors?
1. Check of `client_form_data` tabel bestaat
2. Check of `clients` tabel bestaat met `client_code = 'sjbmedia'`
3. Check database permissions

---

## 📝 Volgende Stappen

Na activatie:
1. ✅ Test met echt formulier op website
2. ✅ Check of emails aankomen
3. ✅ Check of data in database staat
4. ✅ Test admin dashboard om submissions te bekijken

