---

# MSAL Auth Template for React (B2C and B2B)

Base template in React + Vite + TypeScript with authentication support using MSAL for Azure AD B2C and B2B.

> ⚡ Perfect for quickly starting new projects with ready-to-use authentication.

---

## 🚀 Features

- 🔐 Authentication with Azure AD B2C and B2B.
- 🔁 Login with redirect and popup options.
- 🔒 Protected routes using `PrivateRoute`.
- 👤 Displays authenticated user info.
- 🎨 Basic UI using Material UI.
- 🌐 Multi-environment support with `.env`.
- 🧪 Tests with Vitest + Testing Library.

---

## 📁 Folder Structure Highlights

- `App.tsx`: Contains routes and authentication logic. Does **not** include a router wrapper. Used for testing.
- `AppWithRouter.tsx`: Wraps `App.tsx` in a `BrowserRouter` for use in `main.tsx`.

---

## 🧪 Run Tests

Make sure dependencies are installed:

```bash
npm install
```

Then run tests with coverage:

```bash
npm run test -- --coverage
```

Or using Yarn:

```bash
yarn test --coverage
```

---

## 🛠 Run Locally

```bash
git clone https://github.com/your-username/msal-auth-template.git
cd msal-auth-template
npm install
npm run dev
```

---

## ⚙️ Environment Configuration

Create a `.env` file in the project root using the example below:

```env
# --- Auth Mode ---
# Options: 'b2b' or 'b2c'
VITE_AUTH_MODE=b2c

# --- Common MSAL Config ---
VITE_REDIRECT_URI=http://localhost:5173/tppsstudio
VITE_POST_LOGOUT_REDIRECT_URI=http://localhost:5173/

# --- Azure AD B2C ---
VITE_B2C_CLIENT_ID=your-b2c-client-id
VITE_B2C_TENANT_NAME=yourtenant.onmicrosoft.com
VITE_B2C_SIGNIN_POLICY=B2C_1_signin
VITE_B2C_AUTHORITY=https://yourtenant.b2clogin.com/yourtenant.onmicrosoft.com/B2C_1_signin
VITE_B2C_KNOWN_AUTHORITY=yourtenant.b2clogin.com
VITE_B2C_SCOPES=https://yourtenant.onmicrosoft.com/your-client-id/your-scope-name

# --- Azure AD B2B ---
VITE_B2B_CLIENT_ID=your-b2b-client-id
VITE_B2B_TENANT_ID=your-b2b-tenant-id
VITE_B2B_AUTHORITY=https://login.microsoftonline.com/your-b2b-tenant-id

# --- APIs (Optional) ---
VITE_API_ADMIN=https://your-api-domain.com/api
VITE_API_PROCESS=https://your-process-api.com/api
VITE_API_ADMIN_USERS=https://your-user-admin-api.com/api

# Template
```

> ✅ Replace `your-client-id-here` and `your-tenant-id-here` with your actual values from the Azure App Registration.

---

## 🔧 Azure AD B2C/B2B Setup (Quick Guide)

1. **Create a B2C/B2B tenant (if you don’t have one)**  
   - Go to [https://portal.azure.com](https://portal.azure.com)  
   - Search for *Azure Active Directory B2C* and create one if needed.

2. **Register a new application**  
   - Inside your tenant: `App registrations > New registration`
   - Name: `msal-auth-template`
   - Redirect URI: `http://localhost:5173`
   - Save the **Application (client) ID** and **Directory (tenant) ID**

3. **Configure permissions**  
   - Go to **API permissions** → **Add a permission**  
   - Microsoft Graph → Delegated permissions: `openid`, `email`, `profile`

4. **Configure authentication settings**  
   - Go to **Authentication**
   - Add `http://localhost:5173` as a redirect URI
   - Check "Access tokens" and "ID tokens" if available

5. **Update your `.env` file** with the correct values

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

⚙️ Environment Configuration
Create a .env file in the root of the project based on the .env.template provided:

bash
Copy
Edit
cp .env.template .env
Edit it with your own Azure AD credentials.

🔄 Switch between B2B and B2C
Set the following variable in your .env:

env
Copy
Edit
VITE_AUTH_MODE=b2c  # or b2b
This will dynamically use either the B2C or B2B configuration based on your selected mode.

