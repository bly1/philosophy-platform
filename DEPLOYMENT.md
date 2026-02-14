# Spring FES Video - Deployment Guide

This guide covers deploying the Spring FES Video application to production using Vercel.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Environment Configuration](#environment-configuration)
3. [Vercel Deployment](#vercel-deployment)
4. [Post-Deployment Steps](#post-deployment-steps)
5. [Monitoring and Maintenance](#monitoring-and-maintenance)
6. [Troubleshooting](#troubleshooting)

## Prerequisites

### Required Accounts
- [Vercel Account](https://vercel.com/signup) (GitHub/GitLab/Bitbucket integration)
- [Supabase Project](https://supabase.com/sign-up) (already configured for development)
- [Zhipu AI Account](https://open.bigmodel.cn/) for API key
- [Volcano Engine Account](https://www.volcengine.com/) for API keys

### Database Setup
Ensure your Supabase project is properly configured:
```sql
-- Run migration if not already done
-- File: supabase/migrations/001_initial_schema.sql
```

### Security Checklist
- [ ] RLS (Row Level Security) policies enabled in Supabase
- [ ] Environment variables are set in production
- [ ] API keys have appropriate permissions
- [ ] CORS configured for your domain

## Environment Configuration

### 1. Create Production Environment Variables

In Vercel dashboard, navigate to **Settings → Environment Variables** and add:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key

# AI Service Keys
ZHIPU_API_KEY=your-zhipu-api-key
VOLC_ACCESS_KEY=your-volc-access-key
VOLC_SECRET_KEY=your-volc-secret-key
VOLC_IMAGE_ENDPOINT=https://ark.cn-beijing.volces.com/api/v3/images/generations
VOLC_VIDEO_ENDPOINT=https://ark.cn-beijing.volces.com/api/v3/contents/generations/tasks

# Optional: Custom Domains
IMAGE_DOMAINS=your-custom-domain.com
```

### 2. Environment-Specific Variables

Create environments for:
- **Preview**: For pull request previews (use test/staging API keys)
- **Production**: For live deployment

## Vercel Deployment

### Option A: GitHub Integration (Recommended)

1. **Push Code to GitHub**
   ```bash
   git add .
   git commit -m "Configure for Vercel deployment"
   git push origin main
   ```

2. **Connect Vercel to GitHub**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project"
   - Import your GitHub repository
   - Select "Next.js" framework

3. **Configure Build Settings**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Add Environment Variables**
   - Add all variables from the [Environment Configuration](#environment-configuration) section

5. **Deploy**
   - Click "Deploy" to deploy your application
   - Vercel will provide a preview URL

### Option B: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy Preview**
   ```bash
   npm run deploy:preview
   ```

4. **Deploy to Production**
   ```bash
   npm run deploy:prod
   ```

## Post-Deployment Steps

### 1. Verify Application
- [ ] Home page loads correctly
- [ ] Authentication flows work
- [ ] Project creation functions
- [ ] AI generation features operational
- [ ] File uploads to Supabase Storage work

### 2. Configure Custom Domain (Optional)
1. In Vercel dashboard, go to **Settings → Domains**
2. Add your custom domain
3. Update DNS records as instructed
4. Configure SSL certificate

### 3. Set Up Analytics
- Enable [Vercel Analytics](https://vercel.com/docs/analytics)
- Consider [Sentry](https://sentry.io/) for error tracking
- Monitor API usage through your AI service providers

### 4. Rate Limiting
Consider implementing rate limiting for expensive operations:
```javascript
// Example: lib/rate-limit.ts
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "1 m"),
  analytics: true,
});
```

## Monitoring and Maintenance

### Health Checks
Monitor these endpoints:
- `/` - Application health
- `/api/projects` - API functionality
- AI service response times

### Important Metrics
- API success rates
- Generation completion rates
- User activity
- Error rates
- Response times

### Backup Strategy
- Supabase handles automatic database backups
- Consider backing up user-generated content
- Monitor storage usage in Supabase

### Scaling Considerations
- Vercel automatically scales with traffic
- Monitor Supabase usage limits
- Consider CDN for media-heavy content
- Review AI API quotas and costs

## Troubleshooting

### Common Issues

#### 1. Build Errors
```bash
# Check locally first
npm run build
npm run type-check
```

#### 2. Environment Variables
- Verify all required variables are set
- Check `NEXT_PUBLIC_` prefix for client-side access
- Ensure no trailing spaces in values

#### 3. CORS Errors
In Supabase dashboard, add your domain to:
- Authentication → URL Configuration
- Settings → API → Additional Headers

#### 4. Image/Video Loading
- Check Storage permissions in Supabase
- Verify signed URL functionality
- Check CORS for media endpoints

#### 5. API Timeouts
The `vercel.json` config includes extended timeouts:
- Regular API routes: 60 seconds
- Generation endpoints: 300 seconds

If still timing out, consider:
```javascript
// Implement webhook pattern for long-running tasks
// Store task status in database
// Poll from client instead of long-polling on server
```

### Debug Mode
Enable debug logging in production:
```javascript
// In vercel.json
"build": {
  "env": {
    "DEBUG": "true"
  }
}
```

### Emergency Rollback
```bash
# Quickly rollback to previous deployment
vercel rollback [deployment-url]
```

## Security Best Practices

### 1. API Key Security
- Never expose service role keys on client side
- Rotate API keys regularly
- Use environment-specific keys

### 2. Database Security
- Keep RLS policies enabled
- Audit user permissions
- Monitor database access logs

### 3. Content Security Policy
Consider adding a CSP header:
```javascript
// in next.config.ts
headers: [
  {
    source: '/(.*)',
    headers: [
      {
        key: 'Content-Security-Policy',
        value: "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; media-src 'self' https:;",
      },
    ],
  },
]
```

## Support
- [Vercel Documentation](https://vercel.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)

---

## Quick Deployment Checklist

- [ ] Code committed to Git
- [ ] Environment variables configured
- [ ] Supabase project production-ready
- [ ] API keys have production access
- [ ] Domain configured (if using custom domain)
- [ ] SSL certificate active
- [ ] Analytics set up
- [ ] Error tracking configured
- [ ] Rate limiting implemented
- [ ] Initial tests passed
- [ ] Team notified of deployment