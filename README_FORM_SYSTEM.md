# 📋 Form Handling System - SJB Media

## 🎯 Overview

Complete form handling system for De Mensen Wijzer website with automated email notifications, database storage, and admin dashboard.

---

## ⚡ Quick Start

**For the impatient:** Read `QUICK_START.md` (5 minutes to get running)

**For the thorough:** Read `FORM_SYSTEM_SETUP.md` (complete setup guide)

**For deployment:** Read `DEPLOYMENT_CHECKLIST.md` (production deployment)

---

## 📚 Documentation Index

| Document | Purpose | When to Read |
|----------|---------|--------------|
| `QUICK_START.md` | Get running in 5 minutes | **Start here** |
| `IMPLEMENTATION_SUMMARY.md` | What was built | Overview of implementation |
| `FORM_SYSTEM_OVERVIEW.md` | System architecture | Understanding the system |
| `FORM_SYSTEM_SETUP.md` | Complete setup guide | Detailed configuration |
| `DEPLOYMENT_CHECKLIST.md` | Production deployment | Before going live |
| `public/api/README.md` | API documentation | API integration |

---

## 🚀 What You Get

### ✅ Working Features
- **Training Registration Form** - Captures training sign-ups
- **Contact Form** - General contact inquiries
- **Automated Emails** - Notifications to admin + confirmations to users
- **Database Storage** - All submissions stored in MySQL
- **Admin Dashboard** - View and manage submissions
- **n8n Workflow** - Automated processing pipeline
- **REST API** - Backend for dashboard

### 📊 System Components
1. **Frontend Forms** (React/TypeScript)
2. **n8n Workflow** (Automation)
3. **MySQL Database** (Data storage)
4. **Admin Dashboard** (HTML/JavaScript)
5. **PHP API** (Backend endpoints)

---

## 🔧 Setup Required

### 1️⃣ Database (2 minutes)
```bash
mysql -u user -p database < migrations/001_create_form_system.sql
```

### 2️⃣ n8n Workflow (2 minutes)
1. Open: https://n8n.srv890194.hstgr.cloud
2. Find: "SJB Media - Form Submissions Handler"
3. Configure MySQL credentials
4. Configure SMTP credentials
5. **Activate** workflow

### 3️⃣ Test (1 minute)
- Submit training form
- Submit contact form
- Check emails
- Check database

**Total setup time: ~5 minutes**

---

## 🎯 Key Information

### n8n Workflow
- **Name:** SJB Media - Form Submissions Handler
- **ID:** JDuKvyMarXhe9kxq
- **Webhook:** `https://n8n.srv890194.hstgr.cloud/webhook/sjbmedia-form`
- **Status:** ⚠️ Needs activation

### Admin Dashboard
- **URL:** `/admin`
- **Username:** `sjbmedia`
- **Password:** `sjbmedia2026` ⚠️ **CHANGE THIS!**

### Database Tables
- `clients` - Client information
- `client_form_data` - **Form submissions** ⭐
- `products` - Services
- `admin_users` - Dashboard users

### Form Types
- `training_registration` - Training form
- `contact` - Contact form

---

## 📁 Important Files

### Database
```
migrations/001_create_form_system.sql    # Import this first
csv database/database_schema.sql         # Schema reference
```

### Frontend
```
src/components/training/TrainingForm.tsx # Training form
src/components/Contact.tsx               # Contact form
```

### Admin
```
public/admin/index.html                  # Login page
public/admin/dashboard.html              # Dashboard
public/admin/dashboard.js                # Dashboard logic
```

### API
```
public/api/config.php                    # Configuration
public/api/login.php                     # Login endpoint
public/api/submissions.php               # Data endpoint
```

---

## ✅ Checklist

### Before Testing
- [ ] Database schema imported
- [ ] n8n MySQL credentials configured
- [ ] n8n SMTP credentials configured
- [ ] n8n workflow activated

### Testing
- [ ] Training form submits successfully
- [ ] Contact form submits successfully
- [ ] Notification emails received
- [ ] Confirmation emails received
- [ ] Data appears in database
- [ ] Admin dashboard accessible

### Before Production
- [ ] Admin password changed
- [ ] HTTPS enabled
- [ ] API credentials configured
- [ ] CORS origins updated
- [ ] File permissions set
- [ ] Error logging enabled

---

## 🆘 Troubleshooting

### Forms not working?
1. Check browser console
2. Verify n8n workflow is **activated**
3. Check n8n execution logs

### Emails not arriving?
1. Check spam folder
2. Verify SMTP credentials in n8n
3. Check n8n execution logs

### Dashboard not loading?
1. Check login credentials
2. Verify API configuration
3. Check browser console

**Full troubleshooting:** See `FORM_SYSTEM_SETUP.md` section 7

---

## 📞 Quick Reference

### URLs
- **Website:** `https://demensenwijzer.nl`
- **Admin:** `https://demensenwijzer.nl/admin`
- **n8n:** `https://n8n.srv890194.hstgr.cloud`
- **Webhook:** `https://n8n.srv890194.hstgr.cloud/webhook/sjbmedia-form`

### Credentials
- **Admin User:** `sjbmedia`
- **Admin Pass:** `sjbmedia2026` (⚠️ change this!)

### Database Queries
```sql
-- View all submissions
SELECT * FROM client_form_data ORDER BY submitted_at DESC;

-- View new submissions
SELECT * FROM client_form_data WHERE status = 'new';

-- Statistics
SELECT form_type, COUNT(*) FROM client_form_data GROUP BY form_type;
```

---

## 🎉 Success!

When everything works, you'll have:
- ✅ Automated form processing
- ✅ Email notifications
- ✅ Secure data storage
- ✅ Admin dashboard
- ✅ Complete audit trail

---

## 📖 Next Steps

1. **Read:** `QUICK_START.md`
2. **Import:** Database schema
3. **Configure:** n8n credentials
4. **Test:** Submit forms
5. **Deploy:** Follow deployment checklist

---

## 🔒 Security Notes

- Change admin password immediately
- Use HTTPS in production
- Keep database credentials secure
- Review CORS settings
- Enable error logging
- Set proper file permissions

---

## 💡 Tips

- Test with real email addresses first
- Check spam folders for emails
- Monitor n8n executions regularly
- Keep documentation updated
- Backup database regularly

---

## 📧 Support

For issues:
1. Check documentation files
2. Review n8n execution logs
3. Check database for data
4. Review browser console

---

**Ready to start?** → Open `QUICK_START.md` 🚀

