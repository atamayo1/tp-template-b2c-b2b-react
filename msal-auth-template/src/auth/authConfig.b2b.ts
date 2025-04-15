import { Configuration } from "@azure/msal-browser";

export const msalConfigB2B: Configuration = {
    auth: {
        clientId: import.meta.env.VITE_B2B_CLIENT_ID,
        authority: import.meta.env.VITE_B2B_AUTHORITY,
        redirectUri: import.meta.env.VITE_REDIRECT_URI,
        postLogoutRedirectUri: import.meta.env.VITE_POST_LOGOUT_REDIRECT_URI,
    },
    cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: false,
    },
};

export const loginRequestB2B = {
    scopes: [import.meta.env.VITE_B2B_SCOPES], // ajusta según config B2B
};
