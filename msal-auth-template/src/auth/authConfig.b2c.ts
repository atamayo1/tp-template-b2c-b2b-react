import { Configuration } from "@azure/msal-browser";

export const msalConfigB2C: Configuration = {
    auth: {
        clientId: import.meta.env.VITE_B2C_CLIENT_ID,
        authority: import.meta.env.VITE_B2C_AUTHORITY,
        redirectUri: import.meta.env.VITE_REDIRECT_URI,
        postLogoutRedirectUri: import.meta.env.VITE_POST_LOGOUT_REDIRECT_URI,
        knownAuthorities: [import.meta.env.VITE_B2C_KNOWN_AUTHORITY],
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    },
};

export const loginRequestB2C = {
    scopes: ["openid", "profile", "offline_access"], // ajusta según config B2C
};