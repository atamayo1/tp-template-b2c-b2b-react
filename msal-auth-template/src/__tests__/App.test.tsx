import React from 'react';
import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '@/App';

// Mock MSAL
vi.mock('@azure/msal-react', async () => {
    const actual = await vi.importActual('@azure/msal-react');
    return {
        ...actual,
        useMsal: () => ({
            instance: {
                loginRedirect: vi.fn(),
                logoutRedirect: vi.fn(),
            },
            accounts: [],
        }),
        useIsAuthenticated: vi.fn().mockReturnValue(false), // default
        MsalProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    };
});

describe('App', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('renders public Home page at / when not authenticated', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getAllByText(/página pública: home/i)).toBeTruthy();
    });

    it('renders Login page at /login when not authenticated', () => {
        render(
            <MemoryRouter initialEntries={['/login']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument();
    });

    it('redirects or hides protected route content when not authenticated', () => {
        render(
            <MemoryRouter initialEntries={['/protected']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.queryByText(/protected page: Only for authenticated users/i)).not.toBeInTheDocument();
    });

    it('renders protected route content when authenticated', async () => {
        const msal = await import('@azure/msal-react');
        (msal.useIsAuthenticated as Mock).mockReturnValue(true);

        render(
            <MemoryRouter initialEntries={['/protected']}>
                <App />
            </MemoryRouter>
        );
        expect(screen.getAllByText(/protected page: Only for authenticated users/i)).toBeTruthy();
    });
});
