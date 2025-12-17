import { Users, Server, LayoutDashboard, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProcessPage() {
    return (
        <div className="space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        How We Work
                    </span>
                </h1>
                <p className="text-lg text-muted-foreground">
                    SentinelCore operates on a consultation-first application model. We partner with you to build a secure, custom-tailored infrastructure.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 -z-10" />

                {/* Step 1 */}
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative bg-black border border-white/10 rounded-2xl p-8 h-full flex flex-col items-center text-center space-y-6 bg-grid-white/[0.02]">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center mb-2 ring-1 ring-white/10 shadow-[0_0_30px_rgba(6,182,212,0.15)] group-hover:scale-110 transition-transform duration-500">
                            <Users className="w-10 h-10 text-cyan-400" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-white">1. Consultation & Strategy</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                We begin with an in-depth meeting to understand your specific challenges. Together, we map out a comprehensive, tailored solution unique to your business needs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 2 */}
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-b from-blue-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative bg-black border border-white/10 rounded-2xl p-8 h-full flex flex-col items-center text-center space-y-6 bg-grid-white/[0.02]">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center mb-2 ring-1 ring-white/10 shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:scale-110 transition-transform duration-500">
                            <Server className="w-10 h-10 text-blue-400" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-white">2. Expert Hardware Setup</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Our certified field experts arrive on-site to deploy and configure the necessary hardware infrastructure, ensuring a robust foundation for your security AI.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Step 3 */}
                <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-b from-purple-500 to-pink-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative bg-black border border-white/10 rounded-2xl p-8 h-full flex flex-col items-center text-center space-y-6 bg-grid-white/[0.02]">
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center mb-2 ring-1 ring-white/10 shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:scale-110 transition-transform duration-500">
                            <LayoutDashboard className="w-10 h-10 text-purple-400" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-white">3. Custom AI & Deployment</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Over 2-4 weeks, we develop bespoke AI models and executive dashboards followed by full installation, delivering a turnkey security ecosystem.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center pt-8">
                <Link href="/#contact">
                    <Button className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-lg rounded-full shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all hover:scale-105">
                        Schedule Your Consultation <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
