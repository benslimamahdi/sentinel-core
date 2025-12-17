"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

/**
 * Navbar Component
 * 
 * A responsive navigation bar that sticks to the top of the viewport.
 * Features a dark theme with the SentinelCore logo.
 * 
 * - Desktop: Displays logo, navigation links, and action buttons.
 * - Mobile: Displays logo and a hamburger menu that toggles a full-width dropdown.
 */
export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
            <div className="container flex h-20 items-center justify-between">
                {/* Logo Section */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/logo-full.png"
                        alt="SentinelCore"
                        width={280}
                        height={70}
                        className="h-14 w-auto"
                        priority
                    />
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex md:items-center md:gap-8">
                    <Link href="#features" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                        Features
                    </Link>
                    <Link href="#product" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                        Product
                    </Link>
                    <Link href="#pricing" className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
                        Pricing
                    </Link>
                </div>

                {/* Desktop Action Button */}
                <div className="hidden md:flex md:items-center md:gap-4">
                    <Link href="#contact">
                        <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full px-6">
                            Book Consultation
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="flex items-center p-2 md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="container md:hidden py-4 pb-6 border-t border-white/10 bg-background">
                    <div className="flex flex-col space-y-4">
                        <Link
                            href="#features"
                            className="text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            Features
                        </Link>
                        <Link
                            href="#product"
                            className="text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            Product
                        </Link>
                        <Link
                            href="#pricing"
                            className="text-sm font-medium transition-colors hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            Pricing
                        </Link>
                        <div className="pt-4">
                            <Link href="#contact" onClick={() => setIsOpen(false)}>
                                <Button className="w-full justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full">
                                    Book Consultation
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
