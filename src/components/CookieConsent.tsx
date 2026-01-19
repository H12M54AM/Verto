"use client";

import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';

export default function CookieConsent() {
    const [consent, setConsent] = useState<boolean | null>(null);

    // Helper to get cookie value by name
    const getCookie = (name: string) => {
        if (typeof document === 'undefined') return null;
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop()?.split(';').shift();
        return null;
    };

    // Helper to set cookie with 6 month expiry
    const setCookie = (name: string, value: string, days: number) => {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        const expires = `expires=${date.toUTCString()}`;
        document.cookie = `${name}=${value};${expires};path=/;SameSite=Lax`;
    };

    useEffect(() => {
        // Check for existing cookie
        const cookieValue = getCookie('verto_consent');
        if (cookieValue === 'true') {
            setConsent(true);
        } else if (cookieValue === 'false') {
            setConsent(false);
        } else {
            setConsent(null);
        }
    }, []);

    const handleAccept = () => {
        // Set cookie for 6 months (approx 180 days)
        setCookie('verto_consent', 'true', 180);
        setConsent(true);
    };

    const handleDecline = () => {
        // Set cookie for 6 months so we remember the decline
        setCookie('verto_consent', 'false', 180);
        setConsent(false);
    };

    // If consent is explicitly true, we render the Analytics component.
    if (consent === true) {
        return <Analytics />;
    }

    // If consent is explicitly false, we render nothing (no tracking).
    if (consent === false) {
        return null;
    }

    // If consent is null (user hasn't decided yet), show the Toast.
    // Note: We do NOT render <Analytics /> here yet.
    return (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-50 max-w-sm bg-white/95 backdrop-blur-md text-slate-900 p-5 rounded-2xl shadow-xl border border-slate-200 animate-in slide-in-from-bottom-5 duration-300">
            <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                            <path d="M8.5 8.5h.01" />
                            <path d="M16 15h.01" />
                            <path d="M9 16h.01" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="font-bold text-sm text-slate-900">Analytics Consent</h3>
                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                            We use analytics cookies to understand how you use our site and improve your experience.
                        </p>
                    </div>
                </div>

                <div className="flex gap-2 mt-1">
                    <button
                        onClick={handleDecline}
                        className="flex-1 px-4 py-2 text-xs font-semibold text-slate-600 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-lg transition-colors border border-slate-200"
                    >
                        Decline
                    </button>
                    <button
                        onClick={handleAccept}
                        className="flex-1 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm shadow-blue-200"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );
}
