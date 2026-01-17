# Form System - Deployment Checklist

## Pre-Deployment

### Database
- [ ] MySQL database is created
- [ ] Database user has proper permissions (SELECT, INSERT, UPDATE)
- [ ] Migration script executed: `migrations/001_create_form_system.sql`
- [ ] Verify tables exist:
  ```sql
  SHOW TABLES LIKE 'client_form_data';
  SHOW TABLES LIKE 'clients';
  SHOW TABLES LIKE 'admin_users';
  ```
- [ ] Verify sjbmedia client exists:
  ```sql
  SELECT * FROM clients WHERE client_code = 'sjbmedia';
  ```
- [ ] **IMPORTANT**: Change admin password:
  ```php
  <?php
  $newPassword = 'your_secure_password_here';
  $hash = password_hash($newPassword, PASSWORD_DEFAULT);
  echo $hash;
  ?>
  ```
  ```sql
  UPDATE admin_users 
  SET password_hash = 'generated_hash_here' 
  WHERE username = 'sjbmedia';
  ```

### n8n Workflow
- [ ] n8n instance is accessible
- [ ] MySQL credentials configured in n8n (ID: 1)
- [ ] SMTP credentials configured in n8n (ID: 2)
- [ ] Workflow "SJB Media - Form Submissions Handler" exists
- [ ] Workflow is **ACTIVATED** (toggle in n8n UI)
- [ ] Test webhook URL is accessible:
  ```bash
  curl -X POST https://n8n.srv890194.hstgr.cloud/webhook/sjbmedia-form \
    -H "Content-Type: application/json" \
    -d '{"formType":"contact","name":"Test","email":"test@test.com"}'
  ```

### API Configuration
- [ ] Update database credentials in `public/api/config.php`
- [ ] Update CORS origins in `public/api/config.php`
- [ ] Set proper file permissions:
  ```bash
  chmod 755 public/api
  chmod 644 public/api/*.php
  chmod 644 public/api/.htaccess
  ```
- [ ] Test API endpoints:
  ```bash
  # Test submissions endpoint
  curl https://your-domain.com/api/submissions.php
  
  # Test login endpoint
  curl -X POST https://your-domain.com/api/login.php \
    -H "Content-Type: application/json" \
    -d '{"username":"sjbmedia","password":"your_password"}'
  ```

### Frontend
- [ ] Build production version:
  ```bash
  npm run build
  ```
- [ ] Verify webhook URL in forms is correct:
  - `src/components/training/TrainingForm.tsx` (line ~25)
  - `src/components/Contact.tsx` (line ~35)
- [ ] Test forms on staging environment
- [ ] Verify HTTPS is enabled

---

## Deployment Steps

### 1. Deploy Database
```bash
# Connect to production database
mysql -u [user] -p [database] < migrations/001_create_form_system.sql

# Verify
mysql -u [user] -p [database] -e "SELECT COUNT(*) FROM client_form_data;"
```

### 2. Deploy Frontend
```bash
# Build
npm run build

# Deploy dist folder to production
# (Method depends on your hosting - Railway, Vercel, etc.)
```

### 3. Deploy API
```bash
# Upload public/api folder to production
# Ensure .htaccess is uploaded
# Set file permissions (see above)
```

### 4. Configure n8n
1. Open n8n: https://n8n.srv890194.hstgr.cloud
2. Find workflow: "SJB Media - Form Submissions Handler"
3. Configure credentials:
   - MySQL: Production database credentials
   - SMTP: Production email credentials
4. **Save** workflow
5. **Activate** workflow (toggle top-right)

### 5. Update Dashboard
Edit `public/admin/dashboard.js`:
```javascript
const API_CONFIG = {
    baseUrl: 'https://your-production-domain.com/api',
    useMockData: false
};
```

---

## Post-Deployment Testing

### Test Training Form
1. [ ] Go to: `https://your-domain.com/training`
2. [ ] Fill out and submit form
3. [ ] Verify:
   - [ ] Success message appears
   - [ ] Email received at info@sjbmedia.nl
   - [ ] Confirmation email received at submitted email
   - [ ] Entry appears in database:
     ```sql
     SELECT * FROM client_form_data 
     WHERE form_type = 'training_registration' 
     ORDER BY submitted_at DESC LIMIT 1;
     ```
   - [ ] Entry visible in admin dashboard

### Test Contact Form
1. [ ] Go to: `https://your-domain.com#contact`
2. [ ] Fill out and submit form
3. [ ] Verify same points as above (with form_type = 'contact')

### Test Admin Dashboard
1. [ ] Go to: `https://your-domain.com/admin`
2. [ ] Login with credentials
3. [ ] Verify:
   - [ ] Statistics show correct numbers
   - [ ] Submissions table loads
   - [ ] Filters work (Type, Status)
   - [ ] Email/phone links are clickable
   - [ ] Logout works

### Test n8n Workflow
1. [ ] Open n8n workflow
2. [ ] Check "Executions" tab
3. [ ] Verify recent executions are successful
4. [ ] Check for any error messages

---

## Monitoring

### Daily Checks
- [ ] Check n8n executions for errors
- [ ] Monitor email delivery
- [ ] Check database for new submissions

### Weekly Checks
- [ ] Review spam submissions (if any)
- [ ] Check disk space (database growth)
- [ ] Review error logs

### Error Logs Locations
- **n8n**: Check executions in n8n UI
- **PHP API**: Check server error logs
- **Database**: Check MySQL error log
- **Frontend**: Check browser console

---

## Rollback Plan

If something goes wrong:

### Rollback Database
```sql
-- Remove new table (if needed)
DROP TABLE IF EXISTS client_form_data;

-- Remove test data
DELETE FROM client_form_data WHERE id > 0;
```

### Rollback Frontend
```bash
# Redeploy previous version
git checkout [previous-commit]
npm run build
# Deploy
```

### Rollback n8n
1. Deactivate workflow
2. Restore previous workflow version (if available)

---

## Security Checklist

- [ ] HTTPS enabled on all endpoints
- [ ] Database credentials not in version control
- [ ] Admin password changed from default
- [ ] CORS properly configured
- [ ] File permissions set correctly
- [ ] Error display disabled in production
- [ ] SQL injection protection (using prepared statements ✓)
- [ ] XSS protection headers enabled
- [ ] Rate limiting considered (optional)

---

## Support Contacts

- **Database Issues**: [Your DB admin contact]
- **n8n Issues**: Check n8n documentation or support
- **Hosting Issues**: [Your hosting provider]
- **Email Issues**: [Your email provider]

---

## Success Criteria

✅ Deployment is successful when:
1. Forms submit without errors
2. Emails are received (both notification and confirmation)
3. Data appears in database
4. Admin dashboard shows submissions
5. No errors in n8n executions
6. No errors in server logs

---

## Next Steps After Deployment

1. Monitor for 24 hours
2. Collect user feedback
3. Plan improvements:
   - Add status update functionality
   - Add notes/comments to submissions
   - Add export to CSV feature
   - Add email templates customization
   - Add analytics/reporting

