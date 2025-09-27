# 🏥 Psyencia - Full-Stack Healthcare Platform

A comprehensive healthcare platform built with React, Node.js, and MongoDB. Features include doctor appointments, patient management, admin dashboard, and payment integration.

## 🚀 Features

### For Patients
- Browse and search doctors by specialty
- Book appointments with doctors
- Manage personal profile and appointments
- Secure payment processing (Stripe/PayPal)
- Google OAuth authentication

### For Doctors
- Professional profile management
- Appointment scheduling and management
- Patient interaction dashboard
- Earnings tracking

### For Administrators
- Complete system management
- Doctor approval and management
- Appointment oversight
- Analytics and reporting

## 🛠️ Tech Stack

### Frontend
- **React 18** with Vite
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Axios** for API calls
- **React Toastify** for notifications

### Backend
- **Node.js** with Express
- **MongoDB** with Mongoose
- **JWT** for authentication
- **Multer** for file uploads
- **Stripe/PayPal** for payments

### Admin Panel
- **React 18** with Vite
- **Tailwind CSS** for styling
- **Admin-specific components**

## 📁 Project Structure

```
psyencia-full-stack/
├── frontend/          # Patient-facing React app
├── admin/            # Admin panel React app
├── backend/          # Node.js API server
└── DEPLOYMENT_GUIDE.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account
- Stripe/PayPal account

### Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd psyencia-full-stack
   ```

2. **Install dependencies**
   ```bash
   # Install backend dependencies
   cd backend
   npm install
   
   # Install frontend dependencies
   cd ../frontend
   npm install
   
   # Install admin dependencies
   cd ../admin
   npm install
   ```

3. **Set up environment variables**
   
   **Backend (.env)**
   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   SESSION_SECRET=your_session_secret
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   PAYPAL_CLIENT_ID=your_paypal_client_id
   PAYPAL_CLIENT_SECRET=your_paypal_client_secret
   PORT=4000
   ```

   **Frontend (.env)**
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   VITE_REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
   VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   VITE_PAYPAL_CLIENT_ID=your_paypal_client_id
   ```

   **Admin (.env)**
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   VITE_REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
   ```

4. **Start the development servers**
   ```bash
   # Start backend (Terminal 1)
   cd backend
   npm run server
   
   # Start frontend (Terminal 2)
   cd frontend
   npm run dev
   
   # Start admin (Terminal 3)
   cd admin
   npm run dev
   ```

5. **Access the applications**
   - Frontend: http://localhost:5173
   - Admin: http://localhost:5174
   - Backend API: http://localhost:4000

## 🌐 Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions.

### Quick Deployment with Vercel
1. Push code to GitHub
2. Deploy backend to Vercel
3. Deploy frontend to Vercel
4. Deploy admin to Vercel
5. Configure custom domains

## 🔧 Environment Setup

### Required Services

1. **MongoDB Atlas**
   - Create free cluster
   - Get connection string
   - Configure IP whitelist

2. **Google OAuth**
   - Create Google Cloud project
   - Enable Google+ API
   - Create OAuth 2.0 credentials

3. **Stripe**
   - Create Stripe account
   - Get publishable and secret keys

4. **PayPal**
   - Create PayPal developer account
   - Get client ID and secret

## 📱 Features Overview

### Patient Features
- User registration and authentication
- Doctor search and filtering
- Appointment booking
- Payment processing
- Profile management
- Appointment history

### Doctor Features
- Professional profile setup
- Appointment management
- Patient interaction
- Earnings tracking
- Schedule management

### Admin Features
- System overview dashboard
- Doctor management
- Appointment oversight
- User management
- Analytics and reports

## 🔒 Security Features

- JWT-based authentication
- Password encryption with bcrypt
- CORS protection
- Input validation
- Secure file uploads
- HTTPS enforcement

## 🧪 Testing

The project includes Postman collection for API testing:
- Location: `backend/tests/apiTests.postman_collection.json`
- Import to Postman for API testing

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support and questions:
- Check the deployment guide
- Review environment variable setup
- Test locally with production config
- Check platform logs for errors

---

**Built with ❤️ for the healthcare community**
