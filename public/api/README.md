# Form System API Documentation

## Overview
This API provides endpoints for the admin dashboard to retrieve and manage form submissions.

## Base URL
```
https://your-domain.com/api/
```

## Authentication
All endpoints (except login) require authentication via session cookies.

---

## Endpoints

### 1. Login
Authenticate admin user and create session.

**Endpoint:** `POST /api/login.php`

**Request Body:**
```json
{
  "username": "sjbmedia",
  "password": "sjbmedia2026"
}
```

**Response (Success):**
```json
{
  "success": true,
  "user": {
    "username": "sjbmedia",
    "email": "info@sjbmedia.nl",
    "role": "client_admin",
    "client_code": "sjbmedia",
    "client_name": "SJB Media - De Mensen Wijzer"
  },
  "token": "session_token_here"
}
```

**Response (Error):**
```json
{
  "error": "Invalid username or password"
}
```

---

### 2. Get Submissions
Retrieve form submissions with optional filters.

**Endpoint:** `GET /api/submissions.php`

**Query Parameters:**
- `type` (optional): Filter by form type
  - Values: `contact`, `training_registration`
- `status` (optional): Filter by status
  - Values: `new`, `read`, `contacted`, `completed`, `spam`
- `limit` (optional): Number of results (default: 100, max: 500)
- `offset` (optional): Pagination offset (default: 0)

**Example Request:**
```
GET /api/submissions.php?type=training_registration&status=new&limit=50
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "form_type": "training_registration",
      "name": "Jan Jansen",
      "email": "jan@example.com",
      "phone": "06-12345678",
      "company": "ABC Bedrijf",
      "message": "Ik wil graag meer informatie over de training.",
      "status": "new",
      "submitted_at": "2026-01-11 10:30:00",
      "read_at": null,
      "processed_at": null,
      "notes": null,
      "client_name": "SJB Media - De Mensen Wijzer",
      "client_code": "sjbmedia"
    }
  ],
  "pagination": {
    "total": 150,
    "limit": 50,
    "offset": 0,
    "hasMore": true
  },
  "stats": {
    "total": 150,
    "new": 45,
    "training": 80,
    "contact": 70
  }
}
```

---

## Setup Instructions

### 1. Configure Database
Edit `config.php` and update database credentials:

```php
define('DB_HOST', 'localhost');
define('DB_NAME', 'your_database_name');
define('DB_USER', 'your_database_user');
define('DB_PASS', 'your_database_password');
```

### 2. Configure CORS
Update allowed origins in `config.php`:

```php
define('ALLOWED_ORIGINS', [
    'https://demensenwijzer.nl',
    'https://www.demensenwijzer.nl',
    'http://localhost:5173'
]);
```

### 3. Set Permissions
Ensure the API directory has proper permissions:

```bash
chmod 755 /path/to/public/api
chmod 644 /path/to/public/api/*.php
```

### 4. Test the API
Test login endpoint:

```bash
curl -X POST https://your-domain.com/api/login.php \
  -H "Content-Type: application/json" \
  -d '{"username":"sjbmedia","password":"sjbmedia2026"}'
```

Test submissions endpoint:

```bash
curl https://your-domain.com/api/submissions.php
```

---

## Security Considerations

### Production Checklist
- [ ] Change default admin password
- [ ] Use HTTPS only
- [ ] Implement rate limiting
- [ ] Use environment variables for credentials
- [ ] Enable error logging (disable display_errors)
- [ ] Implement CSRF protection
- [ ] Use prepared statements (already implemented)
- [ ] Validate and sanitize all inputs
- [ ] Implement proper session management
- [ ] Consider using JWT instead of sessions

### Password Hashing
To generate a new password hash for the database:

```php
<?php
$password = 'your_new_password';
$hash = password_hash($password, PASSWORD_DEFAULT);
echo $hash;
?>
```

Then update in database:
```sql
UPDATE admin_users 
SET password_hash = 'generated_hash_here' 
WHERE username = 'sjbmedia';
```

---

## Error Codes

| Code | Description |
|------|-------------|
| 200  | Success |
| 400  | Bad Request - Invalid parameters |
| 401  | Unauthorized - Invalid credentials or session |
| 405  | Method Not Allowed |
| 500  | Internal Server Error |

---

## Integration with Dashboard

Update `public/admin/dashboard.js`:

```javascript
const API_CONFIG = {
    baseUrl: 'https://your-domain.com/api',
    useMockData: false  // Set to false to use real API
};
```

The dashboard will automatically use the API endpoints.

