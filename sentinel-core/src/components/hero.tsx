"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Hero Component
 * 
 * The main landing section with dark theme and diagonal grid background.
 * - Features centered layout with shield icon above text.
 * - Main value proposition with cyan gradient text.
 * - Includes primary CTAs.
 */
export function Hero() {
    return (
        <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
            {/* Diagonal Grid Background Pattern */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.03)_49%,rgba(59,130,246,0.03)_51%,transparent_52%)] bg-[length:60px_60px]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
            </div>

            <div className="container">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Shield Icon */}
                    <div className="relative h-[300px] md:h-[400px] w-full flex items-center justify-center mb-8">
                        <div className="relative">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-cyan-500/30 blur-[100px] animate-pulse"></div>

                            {/* Shield image */}
                            <Image
                                src="/hero-shield.png"
                                alt="SentinelCore Security Shield"
                                width={400}
                                height={400}
                                className="relative z-10 w-auto h-[300px] md:h-[400px] object-contain animate-float drop-shadow-[0_0_50px_rgba(6,182,212,0.5)]"
                                priority
                            />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col space-y-8">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                            <span className="text-white">See Everything.</span>
                            <br />
                            <span className="text-white">Know Everything.</span>
                            <br />
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Secure Everything.
                            </span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            SentinelCore leverages advanced AI to predict anomalies before they happen. Secure, decentralized, and built for the next generation of tech.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/get-started"
                                className={cn(buttonVariants({ size: "lg" }), "bg-white hover:bg-white/90 text-black font-semibold rounded-full px-8 h-12")}
                            >
                                Get Started Now
                            </Link>
                            <Button
                                variant="outline"
                                size="lg"
                                className="border-white/20 hover:bg-white/10 rounded-full px-8 h-12 font-semibold"
                            >
                                <Play className="h-4 w-4 mr-2" />
                                Watch Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
