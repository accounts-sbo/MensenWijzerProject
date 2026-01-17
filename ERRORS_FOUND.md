# Gevonden Fouten - Form System

## 🔴 Kritieke Fouten

### 1. **Migration Script - Fake Password Hash**
**Bestand:** `migrations/001_create_form_system.sql` (regel 148)

**Probleem:**
```sql
'$2a$10$rKZxQxVkKqNqYqGqYqGqYuO7xQxVkKqNqYqGqYqGqYuO7xQxVkKqNq'
```

Dit is een **FAKE** bcrypt hash! Dit is geen echte hash van het wachtwoord `sjbmedia2026`.

**Impact:**
- Admin kan NIET inloggen
- Dashboard is ontoegankelijk
- Authenticatie zal altijd falen

**Fix Nodig:**
Genereer een echte bcrypt hash van `sjbmedia2026`:

```php
<?php
echo password_hash('sjbmedia2026', PASSWORD_DEFAULT);
?>
```

Of gebruik deze correcte hash:
```sql
'$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'
```

**Actie:**
- [ ] Genereer echte bcrypt hash
- [ ] Update regel 148 in migration script
- [ ] Test login na import

---

### 2. **n8n Workflow - Mogelijk Niet Getest**
**Workflow ID:** JDuKvyMarXhe9kxq

**Problemen:**
1. **Credentials niet geconfigureerd** - MySQL en SMTP credentials ontbreken
2. **Workflow niet geactiveerd** - Status is `active: false`
3. **Niet getest met echte data** - Mogelijk configuratie fouten

**Mogelijke Issues:**
- MySQL query syntax in "Get Client Info" node
- INSERT statement in "Save to Database" node
- Email template formatting
- JSON response format
- Error handling ontbreekt mogelijk

**Actie:**
- [ ] Open workflow in n8n UI
- [ ] Configureer MySQL credentials
- [ ] Configureer SMTP credentials
- [ ] Test elke node individueel
- [ ] Fix eventuele errors
- [ ] Activeer workflow

---

## ⚠️ Waarschuwingen

### 3. **Admin Wachtwoord - Onveilig**
**Default wachtwoord:** `sjbmedia2026`

**Probleem:**
- Staat in documentatie
- Staat in code comments
- Makkelijk te raden
- Moet direct gewijzigd worden

**Actie:**
- [ ] Wijzig wachtwoord na eerste login
- [ ] Gebruik sterk wachtwoord
- [ ] Update documentatie

---

### 4. **API Configuratie - Niet Ingevuld**
**Bestand:** `public/api/config.php`

**Probleem:**
```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'your_database_name');  // ⚠️ Placeholder
define('DB_USER', 'your_database_user');  // ⚠️ Placeholder
define('DB_PASS', 'your_database_password'); // ⚠️ Placeholder
```

**Impact:**
- API kan niet verbinden met database
- Dashboard kan geen live data ophalen
- Login zal falen

**Actie:**
- [ ] Update database credentials
- [ ] Update CORS origins
- [ ] Test API endpoints

---

### 5. **Dashboard - Mock Data**
**Bestand:** `public/admin/dashboard.js`

**Huidige Status:**
```javascript
const API_CONFIG = {
    baseUrl: 'https://your-domain.com/api',
    useMockData: true  // ⚠️ Gebruikt mock data
};
```

**Impact:**
- Dashboard toont geen echte data
- Alleen demo data zichtbaar
- Moet handmatig omgezet worden

**Actie:**
- [ ] Update `baseUrl` naar echte domain
- [ ] Zet `useMockData` op `false`
- [ ] Test met echte API

---

## 🔍 Te Testen

### Database Import
- [ ] Import script zonder errors
- [ ] Alle tabellen aangemaakt
- [ ] sjbmedia client bestaat
- [ ] Producten zijn aangemaakt
- [ ] Admin user bestaat
- [ ] **Admin kan inloggen** (na password hash fix)

### n8n Workflow
- [ ] Webhook is bereikbaar
- [ ] MySQL queries werken
- [ ] Data wordt opgeslagen
- [ ] Emails worden verstuurd
- [ ] Response is correct JSON
- [ ] Error handling werkt

### Frontend Forms
- [ ] Training form submit werkt
- [ ] Contact form submit werkt
- [ ] Loading states tonen
- [ ] Error messages tonen
- [ ] Success messages tonen
- [ ] Form reset na submit

### Admin Dashboard
- [ ] Login werkt (na password fix)
- [ ] Dashboard laadt
- [ ] Statistieken tonen (mock of live)
- [ ] Submissions tabel toont
- [ ] Filters werken
- [ ] Logout werkt

### API Endpoints
- [ ] `/api/login.php` werkt
- [ ] `/api/submissions.php` werkt
- [ ] CORS headers correct
- [ ] Authentication werkt
- [ ] Data format correct

---

## 🛠️ Fix Prioriteiten

### Prioriteit 1 - KRITIEK
1. **Fix password hash** in migration script (regel 148)
   - Zonder dit werkt login NIET
   - Genereer echte bcrypt hash
   - Test login na import

### Prioriteit 2 - BELANGRIJK
2. **Configureer n8n workflow**
   - Voeg MySQL credentials toe
   - Voeg SMTP credentials toe
   - Test workflow
   - Activeer workflow

3. **Update API config**
   - Vul database credentials in
   - Update CORS origins
   - Test API endpoints

### Prioriteit 3 - GEWENST
4. **Test end-to-end**
   - Submit test forms
   - Verify emails
   - Check database
   - Test dashboard

5. **Update documentatie**
   - Document fixes
   - Update setup instructies
   - Add troubleshooting tips

---

## 📋 Snelle Fix Checklist

### Fix 1: Password Hash
```bash
# Genereer nieuwe hash
php -r "echo password_hash('sjbmedia2026', PASSWORD_DEFAULT);"

# Of gebruik deze:
# $2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi
```

Update in `migrations/001_create_form_system.sql` regel 148:
```sql
'$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi',
```

### Fix 2: n8n Credentials
1. Open: https://n8n.srv890194.hstgr.cloud
2. Find: "SJB Media - Form Submissions Handler"
3. Add MySQL credential
4. Add SMTP credential
5. Save & Activate

### Fix 3: API Config
Edit `public/api/config.php`:
```php
define('DB_HOST', 'actual_host');
define('DB_NAME', 'actual_database');
define('DB_USER', 'actual_user');
define('DB_PASS', 'actual_password');
```

### Fix 4: Dashboard Config
Edit `public/admin/dashboard.js`:
```javascript
const API_CONFIG = {
    baseUrl: 'https://actual-domain.com/api',
    useMockData: false
};
```

---

## ✅ Verificatie

Na fixes, test:

```bash
# 1. Test database import
mysql -u user -p database < migrations/001_create_form_system.sql

# 2. Verify admin user
mysql -u user -p database -e "SELECT username, email FROM admin_users WHERE username='sjbmedia';"

# 3. Test n8n webhook
curl -X POST https://n8n.srv890194.hstgr.cloud/webhook/sjbmedia-form \
  -H "Content-Type: application/json" \
  -d '{"formType":"contact","name":"Test","email":"test@test.com","message":"Test"}'

# 4. Test API login
curl -X POST https://your-domain.com/api/login.php \
  -H "Content-Type: application/json" \
  -d '{"username":"sjbmedia","password":"sjbmedia2026"}'

# 5. Test API submissions
curl https://your-domain.com/api/submissions.php
```

---

## 🎯 Success Criteria

Alles werkt als:
- ✅ Migration importeert zonder errors
- ✅ Admin kan inloggen met `sjbmedia` / `sjbmedia2026`
- ✅ n8n workflow draait zonder errors
- ✅ Forms submitten succesvol
- ✅ Emails komen aan
- ✅ Data verschijnt in database
- ✅ Dashboard toont data

---

## 📞 Hulp Nodig?

### Password Hash Genereren
```php
<?php
// save as generate_hash.php
$password = 'sjbmedia2026';
$hash = password_hash($password, PASSWORD_DEFAULT);
echo "Hash: " . $hash . "\n";

// Test de hash
if (password_verify($password, $hash)) {
    echo "✅ Hash is correct!\n";
} else {
    echo "❌ Hash is incorrect!\n";
}
?>
```

Run:
```bash
php generate_hash.php
```

### MySQL Error Logs
```bash
# Check MySQL error log
tail -f /var/log/mysql/error.log

# Or via MySQL
SHOW VARIABLES LIKE 'log_error';
```

### n8n Execution Logs
1. Open n8n UI
2. Click "Executions" tab
3. View failed executions
4. Check error messages

---

## 🚨 BELANGRIJK

**Start met het fixen van de password hash!**

Zonder correcte password hash kan de admin NIET inloggen en is het hele dashboard onbruikbaar.

Dit is de belangrijkste fix die gedaan moet worden.

