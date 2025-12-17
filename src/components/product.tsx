import Image from "next/image";
import { BASE_PATH } from "@/lib/constants";

/**
 * Product Component
 * 
 * Displays the dashboard product screenshot with description.
 * Showcases the actual SentinelCore interface to potential clients.
 * Features a subtle tilt animation on hover.
 */
export function Product() {
    return (
        <section id="product" className="py-20 bg-card/30">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
                        Real-time{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Infrastructure Monitoring
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Get complete visibility into your infrastructure with our intuitive dashboard. Monitor metrics, detect anomalies, and respond to threats—all in real-time.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto [perspective:1000px]">
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:rotate-1 transform-gpu">
                        <Image
                            src={`${BASE_PATH}/dashboard.jpg`}
                            alt="SentinelCore Dashboard"
                            width={1920}
                            height={1080}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                    {/* Decorative glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-3xl -z-10 opacity-50"></div>
                </div>
            </div>
        </section>
    );
}
