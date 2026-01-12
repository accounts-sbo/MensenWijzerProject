# Form System - Quick Start Guide

## ⚡ 5-Minute Setup

### Step 1: Import Database (2 min)
```bash
mysql -u your_user -p your_database < migrations/001_create_form_system.sql
```

Or via phpMyAdmin:
1. Open phpMyAdmin
2. Select your database
3. Click "Import"
4. Choose `migrations/001_create_form_system.sql`
5. Click "Go"

**Verify:**
```sql
SELECT * FROM clients WHERE client_code = 'sjbmedia';
-- Should return 1 row
```

---

### Step 2: Configure n8n Workflow (2 min)

1. **Open n8n:** https://n8n.srv890194.hstgr.cloud

2. **Find workflow:** "SJB Media - Form Submissions Handler"

3. **Configure MySQL credential:**
   - Click on "Get Client Info" node
   - Click "Credentials" dropdown
   - Add new MySQL credential:
     - Host: `your-db-host`
     - Database: `your-db-name`
     - User: `your-db-user`
     - Password: `your-db-password`

4. **Configure SMTP credential:**
   - Click on "Send Email Notification" node
   - Click "Credentials" dropdown
   - Add new SMTP credential:
     - Host: `your-smtp-host`
     - Port: `587` (or 465 for SSL)
     - User: `your-email@domain.com`
     - Password: `your-email-password`

5. **Save & Activate:**
   - Click "Save" (top right)
   - Toggle "Active" switch (top right)

**Verify:**
```bash
curl -X POST https://n8n.srv890194.hstgr.cloud/webhook/sjbmedia-form \
  -H "Content-Type: application/json" \
  -d '{"formType":"contact","name":"Test","email":"test@test.com","message":"Test"}'
```

---

### Step 3: Test Forms (1 min)

1. **Build frontend:**
   ```bash
   npm run build
   ```

2. **Test Training Form:**
   - Go to: `http://localhost:5173/training`
   - Fill out form
   - Submit
   - Check email inbox

3. **Test Contact Form:**
   - Go to: `http://localhost:5173#contact`
   - Fill out form
   - Submit
   - Check email inbox

**Verify in database:**
```sql
SELECT * FROM client_form_data ORDER BY submitted_at DESC LIMIT 5;
```

---

## 🎯 What You Get

✅ **Working Forms**
- Training registration form
- Contact form
- Both integrated with n8n webhook

✅ **Automated Emails**
- Notification to admin (info@sjbmedia.nl)
- Confirmation to user

✅ **Database Storage**
- All submissions stored in MySQL
- Includes metadata (IP, timestamp, etc.)

✅ **Admin Dashboard**
- Login at `/admin`
- View all submissions
- Filter by type/status
- Statistics overview

---

## 🔐 Default Credentials

### Admin Dashboard
```
URL: https://your-domain.com/admin
Username: sjbmedia
Password: sjbmedia2026
```

⚠️ **IMPORTANT:** Change this password immediately!

**To change password:**
```php
<?php
$newPassword = 'your_secure_password';
echo password_hash($newPassword, PASSWORD_DEFAULT);
?>
```

```sql
UPDATE admin_users 
SET password_hash = 'paste_hash_here' 
WHERE username = 'sjbmedia';
```

---

## 🚀 Deploy to Production

### Option 1: Railway (Recommended)
```bash
# Already configured in railway.json
railway up
```

### Option 2: Manual Deploy
1. Upload `dist/` folder to web server
2. Upload `public/api/` folder
3. Configure `public/api/config.php` with production DB credentials
4. Set file permissions:
   ```bash
   chmod 755 public/api
   chmod 644 public/api/*.php
   ```

---

## 📋 Post-Deployment Checklist

- [ ] Forms submit successfully
- [ ] Emails arrive (check spam folder)
- [ ] Data appears in database
- [ ] Admin dashboard accessible
- [ ] Admin password changed
- [ ] HTTPS enabled
- [ ] n8n workflow activated

---

## 🆘 Troubleshooting

### Forms not submitting?
1. Check browser console for errors
2. Verify n8n webhook URL in form components
3. Check n8n workflow is activated

### Emails not arriving?
1. Check n8n execution logs
2. Verify SMTP credentials
3. Check spam folder

### Dashboard not loading?
1. Check `public/api/config.php` database credentials
2. Verify API files are uploaded
3. Check browser console

---

## 📚 Full Documentation

- **Setup Guide:** `FORM_SYSTEM_SETUP.md`
- **Deployment:** `DEPLOYMENT_CHECKLIST.md`
- **Overview:** `FORM_SYSTEM_OVERVIEW.md`
- **API Docs:** `public/api/README.md`

---

## 🎉 You're Done!

Your form system is now ready to:
- ✅ Capture form submissions
- ✅ Send automated emails
- ✅ Store data securely
- ✅ Provide admin access

**Need help?** Check the documentation files or review n8n execution logs.

---

## 🔄 Next Steps

### Immediate
1. Change admin password
2. Test all forms
3. Verify emails arrive

### Soon
1. Connect dashboard to live API
2. Customize email templates
3. Add status management

### Later
1. Add export to CSV
2. Add analytics
3. Add mobile app

---

## 📞 Quick Reference

**n8n Workflow ID:** JDuKvyMarXhe9kxq  
**Webhook URL:** `https://n8n.srv890194.hstgr.cloud/webhook/sjbmedia-form`  
**Admin URL:** `/admin`  
**API Base:** `/api/`

**Database Tables:**
- `clients` - Client info
- `client_form_data` - Form submissions ⭐
- `products` - Services
- `admin_users` - Dashboard users

**Form Types:**
- `training_registration` - Training form
- `contact` - Contact form

**Statuses:**
- `new` - Just submitted
- `read` - Viewed in dashboard
- `contacted` - Follow-up sent
- `completed` - Closed
- `spam` - Marked as spam

