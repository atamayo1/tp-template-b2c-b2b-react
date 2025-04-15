import { Button, Stack, Typography } from '@mui/material';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import { loginRequestB2C } from '@/auth/authConfig.b2c';
import { loginRequestB2B } from '@/auth/authConfig.b2b';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { daysAgo } from '@/shared';

export const Login = () => {
    const { instance } = useMsal();
    const isAuthenticated = useIsAuthenticated();
    const navigate = useNavigate();

    const version = __APP_VERSION__;
    const platform = navigator.platform || 'web';
    const env = import.meta.env.MODE;
    const buildDate = __BUILD_DATE__;

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/home', { replace: true });
        }
    }, [isAuthenticated, navigate]);

    const handleLoginPopup = (type: 'b2c' | 'b2b') => {
        const request = type === 'b2c' ? loginRequestB2C : loginRequestB2B;
        instance.loginPopup(request).catch(console.error);
    };

    const handleLoginRedirect = (type: 'b2c' | 'b2b') => {
        const request = type === 'b2c' ? loginRequestB2C : loginRequestB2B;
        instance.loginRedirect(request).catch(console.error);
    };

    return (
        <div className={'loginContainer'}>
            <div className={'leftSide'}>
                <div className={'logo'}>{'{Logo or product description here}'}</div>

                <div className={'loginBox'}>
                    <Typography fontSize={14} fontWeight={600} variant="subtitle1" gutterBottom>
                        Sign in with your business account in
                    </Typography>
                    <br />
                    <Stack spacing={1.5} className={'buttonStack'}>
                        <Button variant="contained" color="primary" onClick={() => handleLoginPopup('b2c')}>
                            B2C Login Popup
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => handleLoginRedirect('b2c')}>
                            B2C Login Redirect
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => handleLoginPopup('b2b')}>
                            B2B Login Popup
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => handleLoginRedirect('b2b')}>
                            B2B Login Redirect
                        </Button>
                    </Stack>
                    <br />
                    <Typography fontSize={12} variant="body2" className={'legal'}>
                        By clicking the 'login' button you agree to the{' '}
                        <a href="/terms">terms and conditions</a> and the privacy policy.
                    </Typography>
                    <br />
                    <Typography fontSize={10} variant="caption" className={'version'}>
                        Version: {version} - {platform} - {env} - {daysAgo(buildDate)}
                    </Typography>
                </div>
            </div>

            <div className={'rightSide'}>
                <Typography variant="h4" className={'productText'}>
                    {'{Image or product description here}'}
                </Typography>
            </div>
        </div>
    );
};

