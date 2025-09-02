// Auth0 Configuration
// Replace these values with your actual Auth0 application settings

export const auth0Config = {
  domain: "arunchaudhary.us.auth0.com",
  clientId: "7N3dhdzev0415F5K0QgdjCyqN3Y0UcBn",
  audience: "https://arunchaudhary.us.auth0.com/api/v2/",
  redirectUri: window.location.origin,
  scope: "openid profile email"
};

// Instructions to set up Auth0:
// 1. Go to https://auth0.com and create an account
// 2. Create a new application (Single Page Application)
// 3. Go to Settings tab
// 4. Copy the Domain and Client ID
// 5. Add http://localhost:5174 to Allowed Callback URLs
// 6. Add http://localhost:5174 to Allowed Logout URLs
// 7. Add http://localhost:5174 to Allowed Web Origins
// 8. Replace the values above with your actual settings
