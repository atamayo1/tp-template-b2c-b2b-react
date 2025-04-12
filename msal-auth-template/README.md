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
VITE_AZURE_CLIENT_ID=your-client-id-here
VITE_AZURE_TENANT_ID=your-tenant-id-here
VITE_AZURE_AUTHORITY=https://login.microsoftonline.com/your-tenant-id
VITE_AZURE_REDIRECT_URI=http://localhost:5173
VITE_AZURE_POST_LOGOUT_REDIRECT_URI=http://localhost:5173
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

