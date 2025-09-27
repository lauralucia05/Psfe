# 🚀 Deployment Guide for Psyencia Full-Stack App

## 📋 Prerequisites

1. **Domain Name**: You mentioned you have a domain
2. **GitHub Account**: For version control and deployment
3. **MongoDB Atlas**: Free cloud database
4. **Stripe/PayPal**: For payments
5. **Google OAuth**: For authentication

## 🔧 Environment Variables Setup

### Backend (.env)
```env
# Database
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net

# JWT
JWT_SECRET=your_jwt_secret_key

# Session
SESSION_SECRET=your_session_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key

# PayPal
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret

# Port
PORT=4000
```

### Frontend (.env)
```env
# Backend URL
VITE_BACKEND_URL=https://your-backend-domain.vercel.app

# Google OAuth
VITE_REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id

# Stripe
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# PayPal
VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
```

### Admin (.env)
```env
# Backend URL
VITE_BACKEND_URL=https://your-backend-domain.vercel.app

# Google OAuth
VITE_REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
```

## 🌐 Deployment Steps

### Step 1: Prepare Your Code
1. Push your code to GitHub
2. Ensure all environment variables are ready
3. Test locally with production environment variables

### Step 2: Deploy Backend (Vercel)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your repository
5. Set root directory to `backend/`
6. Add environment variables in Vercel dashboard
7. Deploy

### Step 3: Deploy Frontend (Vercel)
1. Create another Vercel project
2. Set root directory to `frontend/`
3. Add environment variables
4. Deploy

### Step 4: Deploy Admin (Vercel)
1. Create another Vercel project
2. Set root directory to `admin/`
3. Add environment variables
4. Deploy

### Step 5: Configure Domain
1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Configure DNS settings as instructed

## 🔗 Domain Configuration

### Option A: Single Domain with Subdomains
- Main site: `yourdomain.com` (frontend)
- Admin: `admin.yourdomain.com` (admin panel)
- API: `api.yourdomain.com` (backend)

### Option B: Separate Domains
- Main site: `yourdomain.com` (frontend)
- Admin: `admin.yourdomain.com` (admin panel)
- API: `yourdomain-api.com` (backend)

## 📱 Alternative Deployment Options

### Railway (Full-Stack)
1. Go to [railway.app](https://railway.app)
2. Connect GitHub repository
3. Deploy all three apps
4. Configure environment variables
5. Set up custom domains

### Render
1. Go to [render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Configure build settings
5. Add environment variables

## 🔒 Security Checklist

- [ ] Use HTTPS everywhere
- [ ] Set strong JWT secrets
- [ ] Configure CORS properly
- [ ] Use environment variables
- [ ] Set up proper MongoDB access
- [ ] Test payment integrations
- [ ] Set up monitoring

## 🚨 Common Issues & Solutions

### CORS Errors
- Ensure backend CORS is configured for your frontend domain
- Add your domain to allowed origins

### Environment Variables
- Double-check all variables are set in deployment platform
- Use correct variable names (VITE_ prefix for frontend)

### Database Connection
- Ensure MongoDB Atlas IP whitelist includes 0.0.0.0/0
- Check connection string format

### Payment Integration
- Use production API keys
- Test payment flows thoroughly
- Configure webhook URLs

## 📊 Monitoring & Maintenance

1. **Set up logging**: Use Vercel/Railway logs
2. **Monitor performance**: Use built-in analytics
3. **Backup database**: Regular MongoDB backups
4. **Update dependencies**: Regular security updates
5. **SSL certificates**: Automatic with Vercel

## 💰 Cost Estimation

### Vercel (Recommended)
- **Frontend**: Free tier (100GB bandwidth)
- **Admin**: Free tier (100GB bandwidth)
- **Backend**: Free tier (100GB bandwidth)
- **Custom domains**: Free
- **Total**: $0/month for small to medium traffic

### Railway
- **Free tier**: $5/month credit
- **Custom domains**: Free
- **Database**: Included in free tier

## 🎯 Next Steps

1. **Choose deployment platform** (Vercel recommended)
2. **Set up environment variables**
3. **Deploy backend first**
4. **Deploy frontend and admin**
5. **Configure custom domains**
6. **Test all functionality**
7. **Set up monitoring**

## 📞 Support

If you encounter issues:
1. Check deployment platform documentation
2. Review environment variable setup
3. Test locally with production config
4. Check platform logs for errors

Your app is well-structured for deployment! The Vercel configuration files are already in place, making deployment straightforward. 