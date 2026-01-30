# ApplyUniNow - Backend API

## Overview
AdonisJS 5-based REST API server for the ApplyUniNow platform. Provides comprehensive backend services for student application management, university catalog, lead capture, and administrative functions.

## Prerequisites
- **Node.js**: 18.x or higher
- **npm**: 8.x or higher
- **MySQL**: 8.0 or higher
- **AWS Account**: For S3 file storage (optional for development)

## Quick Start

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
```

> **Note**: The `--legacy-peer-deps` flag is required due to a peer dependency conflict between `@adonisjs/auth@8.2.3` and `@adonisjs/lucid@15.0.3`. This is safe and the application will work correctly.

### 2. Configure Environment
```bash
cp .env.example .env
```

Edit `.env` with your configuration (see Environment Variables section below).

### 3. Generate Application Key
```bash
node ace generate:key
```

Copy the generated key to `APP_KEY` in your `.env` file.

### 4. Setup Database
```bash
# Create database
mysql -u root -p -e "CREATE DATABASE applyuninow CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

# Run migrations
node ace migration:run

# Seed initial data (optional)
node ace db:seed
```

### 5. Start Server
```bash
# Development mode with hot reload
npm run dev

# Production mode
npm run build
npm start
```

The API will be available at: **http://localhost:3337**

## Project Structure

```
applyuninow-backend/
├── app/
│   ├── Controllers/Http/      # API Controllers
│   ├── Models/                # Database Models (Lucid ORM)
│   ├── Middleware/            # Custom Middleware
│   ├── Services/              # Business Logic Services
│   ├── Helpers/               # Helper Functions
│   └── Exceptions/            # Exception Handlers
├── config/                    # Configuration Files
│   ├── app.ts                 # App configuration
│   ├── auth.ts                # Authentication config
│   ├── database.ts            # Database config
│   ├── mail.ts                # Email config
│   └── cors.ts                # CORS config
├── database/
│   ├── migrations/            # Database Migrations
│   ├── seeders/               # Seed Data
│   └── factories/             # Model Factories
├── start/                     # Bootstrap Files
│   ├── routes.ts              # API Routes
│   ├── kernel.ts              # Middleware Registration
│   ├── socket.ts              # WebSocket Setup
│   └── events.ts              # Event Listeners
├── contracts/                 # TypeScript Contracts
├── providers/                 # Service Providers
└── commands/                  # Custom CLI Commands
```

## Environment Variables

### Required Variables

```env
# Application
PORT=3337
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=<generate-using-node-ace-generate:key>
APP_NAME=ApplyUniNow

# Database
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password
DB_DATABASE=applyuninow

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:3001

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your_email@gmail.com
SMTP_PASSWORD=your_app_password
MAIL_FROM=noreply@applyuninow.com

# AWS S3 (for file uploads)
AWS_S3_BUCKET=your-bucket-name
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key
AWS_REGION=us-east-1

# Session
SESSION_DRIVER=cookie
```

### Optional Variables

```env
# Redis (if using Redis for sessions/cache)
REDIS_CONNECTION=local
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
REDIS_PASSWORD=

# Logging
LOG_LEVEL=info
```

## API Endpoints

### Authentication
```
POST   /login                    # User login
POST   /forgot-password          # Request password reset
POST   /reset-password           # Reset password
POST   /update-password          # Update password (authenticated)
POST   /logout                   # Logout (authenticated)
```

### Public Endpoints
```
GET    /prerequisite             # Get form prerequisites
GET    /study-areas              # Get study areas
GET    /study-sub-industries/:id # Get sub-industries
POST   /contact-request          # Submit contact request
POST   /contact-us               # Contact us form
GET    /page/:slug               # Get CMS page
POST   /faqs/countries           # Get country FAQs
```

### Admin Endpoints (Authenticated)
All admin endpoints require authentication and are prefixed with `/admin`:

```
# Students
GET    /admin/students
POST   /admin/students
GET    /admin/students/:id
PUT    /admin/students/:id
DELETE /admin/students/:id

# Users
GET    /admin/users
POST   /admin/users
GET    /admin/users/:id
PUT    /admin/users/:id

# Universities
GET    /admin/universities
POST   /admin/universities
GET    /admin/universities/:id
PUT    /admin/universities/:id

# Contact Requests (Leads)
GET    /admin/contact-requests
GET    /admin/contact-requests/:id
PATCH  /admin/contact-requests/status/:id

# Resources
GET    /admin/resources
POST   /admin/resources
PUT    /admin/resources/:id

# FAQs
GET    /admin/faqs
POST   /admin/faqs
PUT    /admin/faqs/:id

# Notifications
GET    /admin/notifications
POST   /admin/notifications/mark_as_read

# Chat
GET    /admin/chats
POST   /admin/chats
```

See `API_DOCUMENTATION.md` for complete endpoint reference.

## Database

### Migrations

```bash
# Run all pending migrations
node ace migration:run

# Rollback last batch
node ace migration:rollback

# Reset database (rollback all)
node ace migration:reset

# Refresh database (reset + run)
node ace migration:refresh

# Check migration status
node ace migration:status
```

### Seeders

```bash
# Run all seeders
node ace db:seed

# Run specific seeder
node ace db:seed --files=database/seeders/User.ts
```

### Database Schema

See `docs/DATABASE_SCHEMA.md` for complete schema documentation.

## Authentication

The API uses JWT (JSON Web Tokens) for authentication:

1. **Login**: POST `/login` with credentials
2. **Receive Token**: Store token on client
3. **Authenticate Requests**: Include token in Authorization header:
   ```
   Authorization: Bearer <your-token>
   ```

## File Uploads

Files are uploaded to AWS S3:

```bash
POST /admin/upload
Content-Type: multipart/form-data

# Supported formats: jpg, png, jpeg, pdf, doc, docx
# Max size: 20MB
```

## WebSocket

Real-time features use Socket.io:

```javascript
// Client connection
import io from 'socket.io-client';
const socket = io('http://localhost:3337');

// Events
socket.on('notification', (data) => {
  console.log('New notification:', data);
});
```

## Docker Deployment

### Build Image
```bash
docker build -t applyuninow-backend .
```

### Run with Docker Compose
```bash
docker-compose up -d
```

This starts:
- Backend API on port 3337
- MySQL database on port 3306

## Testing

```bash
# Run all tests
npm test

# Run specific test file
node ace test tests/unit/example.spec.ts

# Run with coverage
npm run test:coverage
```

## CLI Commands

```bash
# List all commands
node ace list

# Generate migration
node ace make:migration create_table_name

# Generate model
node ace make:model ModelName

# Generate controller
node ace make:controller ControllerName

# Generate seeder
node ace make:seeder SeederName
```

## Performance Optimization

- **Database Indexing**: Indexes on frequently queried columns
- **Query Optimization**: Use eager loading to prevent N+1 queries
- **Caching**: Implement Redis caching for frequently accessed data
- **Connection Pooling**: MySQL connection pool configured

## Security

- **CORS**: Configured in `config/cors.ts`
- **Rate Limiting**: Implement rate limiting middleware
- **SQL Injection**: Protected by Lucid ORM parameterized queries
- **XSS Protection**: Input validation and sanitization
- **HTTPS**: Required in production

## Monitoring

### Logs
```bash
# View logs
tail -f tmp/logs/app.log

# Production logs
pm2 logs applyuninow-backend
```

### Health Check
```bash
GET /
# Returns: {"hello": "world without build"}
```

## Troubleshooting

### npm Install Errors (Peer Dependency Conflicts)
If you encounter `ERESOLVE` errors during `npm install`:
```bash
npm install --legacy-peer-deps
```

This is due to a known peer dependency conflict between AdonisJS packages and is safe to ignore.

### Database Connection Issues
```bash
# Test database connection
mysql -h localhost -u root -p applyuninow

# Check MySQL service
sudo systemctl status mysql
```

### Migration Errors
```bash
# Reset and re-run migrations
node ace migration:reset
node ace migration:run
```

### Port Already in Use
```bash
# Find and kill process on port 3337
lsof -ti:3337 | xargs kill -9
```

### Email Not Sending
- Verify SMTP credentials
- Check firewall settings
- For Gmail, enable "Less secure app access" or use App Password

## Production Deployment

See `DEPLOYMENT.md` for detailed production deployment instructions.

## API Documentation

Complete API documentation available in `API_DOCUMENTATION.md`.

## Support

For issues or questions:
- Check `docs/TROUBLESHOOTING.md`
- Review error logs in `tmp/logs/`
- Contact development team

## License

Proprietary - ApplyUniNow Platform
