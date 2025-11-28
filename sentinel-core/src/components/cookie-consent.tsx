"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

/**
 * CookieConsent Component
 * 
 * GDPR-compliant cookie consent banner.
 * - Appears on first visit
 * - Stores consent in localStorage
 * - Dark-themed to match the site design
 */
export function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already given consent
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setShowBanner(false);
    };

    const declineCookies = () => {
        localStorage.setItem("cookieConsent", "declined");
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
            <div className="container max-w-6xl">
                <div className="relative rounded-2xl border border-white/10 bg-card/95 backdrop-blur-xl p-6 shadow-2xl">
                    <button
                        onClick={declineCookies}
                        className="absolute top-4 right-4 p-1 hover:bg-white/10 rounded-lg transition-colors"
                        aria-label="Close"
                    >
                        <X className="h-5 w-5 text-muted-foreground" />
                    </button>

                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pr-8">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2">
                                🍪 We value your privacy
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                We use cookies to enhance your browsing experience, analyze site traffic, and personalize
                                content. By clicking "Accept All", you consent to our use of cookies.{" "}
                                <a href="#" className="text-primary hover:underline">
                                    Read our Privacy Policy
                                </a>
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <Button
                                variant="outline"
                                onClick={declineCookies}
                                className="border-white/20 hover:bg-white/10 whitespace-nowrap"
                            >
                                Decline
                            </Button>
                            <Button
                                onClick={acceptCookies}
                                className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap"
                            >
                                Accept All
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
