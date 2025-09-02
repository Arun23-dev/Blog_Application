# Blog Website with Auth0 Integration

This project includes both traditional email/password authentication and Auth0 social login integration.

## Features

### Authentication
- ✅ **Traditional Login/Signup**: Email and password authentication
- ✅ **Auth0 Integration**: Social login with Google, GitHub, etc.
- ✅ **Role-based Access**: Admin and user roles
- ✅ **Session Management**: Persistent authentication state
- ✅ **Protected Routes**: Admin panel access control

### AI Features
- ✅ **AI Chatbot**: Interactive chat with AI assistance
- ✅ **AI Search**: Intelligent search with suggestions
- ✅ **AI Content Recommendations**: Personalized content suggestions

### Admin Panel
- ✅ **Dashboard**: Drag-and-drop customizable dashboard
- ✅ **User Management**: CRUD operations for users
- ✅ **Analytics**: Website analytics and reporting

## Setup Instructions

### 1. Backend Setup
```bash
cd Backend
npm install
npm start
```

### 2. Frontend Setup
```bash
cd Frontend
npm install
npm run dev
```

### 3. Auth0 Setup

1. **Create Auth0 Account**
   - Go to [https://auth0.com](https://auth0.com)
   - Create a new account

2. **Create Application**
   - Create a new application
   - Choose "Single Page Application"
   - Go to Settings tab

3. **Configure Application**
   - Copy your Domain and Client ID
   - Add these URLs to Allowed Callback URLs:
     ```
     http://localhost:5174
     http://localhost:5173
     ```
   - Add these URLs to Allowed Logout URLs:
     ```
     http://localhost:5174
     http://localhost:5173
     ```
   - Add these URLs to Allowed Web Origins:
     ```
     http://localhost:5174
     http://localhost:5173
     ```

4. **Update Configuration**
   - Open `Frontend/src/config/auth0.js`
   - Replace the placeholder values with your actual Auth0 settings:
     ```javascript
     export const auth0Config = {
       domain: "your-actual-domain.auth0.com",
       clientId: "your-actual-client-id",
       audience: "your-api-identifier",
       redirectUri: window.location.origin,
       scope: "openid profile email"
     };
     ```

### 4. Database Setup
```bash
cd Backend
node createAdmin.js
```

This creates test users:
- **Admin**: admin@example.com / Admin@123
- **Regular User**: user@example.com / User@123

## Usage

### Traditional Authentication
1. Go to `/signup` or `/login`
2. Use email/password to create account or login
3. Admin users will be redirected to admin panel

### Auth0 Authentication
1. Click "Sign Up with Auth0" or "Login with Auth0"
2. Choose your preferred social login provider
3. Complete the authentication flow
4. You'll be automatically logged in and redirected

### Admin Panel
- Access: `/admin` (only for admin users)
- Features: Dashboard, User Management, Analytics

## File Structure

```
Frontend/
├── src/
│   ├── components/
│   │   ├── AIChatbot.jsx
│   │   ├── AISearch.jsx
│   │   ├── AIContentSuggestions.jsx
│   │   ├── AuthProvider.jsx
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── SignUp.jsx
│   │   └── admin/
│   ├── config/
│   │   └── auth0.js
│   ├── routes/
│   │   └── AdminRoute.jsx
│   └── App.jsx
├── authSlice.js
├── store/
│   └── store.js
└── main.jsx

Backend/
├── src/
│   ├── controllers/
│   │   └── userAuthent.js
│   ├── models/
│   │   └── user.js
│   └── routes/
│       └── userAuth.js
└── createAdmin.js
```

## Technologies Used

- **Frontend**: React 19, Vite, Tailwind CSS, Redux Toolkit
- **Backend**: Node.js, Express.js, MongoDB, JWT
- **Authentication**: Auth0, Custom JWT
- **AI**: Custom AI integration with backend
- **Charts**: Recharts for analytics

## Security Features

- JWT token-based authentication
- Token blacklisting on logout
- Role-based access control
- Protected routes
- Secure password hashing
- CORS configuration
- Input validation

## Environment Variables

### Backend (.env)
```
PORT=3000
DB_CONNECT_KEY=your_mongodb_connection_string
JWT_KEY=your_jwt_secret_key
```

### Frontend
- Auth0 configuration in `src/config/auth0.js`
- ImageKit configuration in environment variables
