import { Activity, Shield, Cpu } from "lucide-react";

const features = [
    {
        icon: Activity,
        title: "Predictive Anomaly Detection",
        description: "Our AI models analyze historical data to forecast irregularities before they impact your system uptime.",
    },
    {
        icon: Shield,
        title: "Decentralized Security",
        description: "End-to-end encryption distributed across a mesh network ensures your data remains sovereign and untouchable.",
    },
    {
        icon: Cpu,
        title: "Intelligent Automation",
        description: "Set complex triggers and let SentinelCore handle the remediation automatically, 24/7.",
    },
];

/**
 * Features Component
 * 
 * Displays core capabilities in a dark-themed grid layout.
 * - Features gradient heading matching the original design.
 * - Dark card backgrounds with icon highlights.
 */
export function Features() {
    return (
        <section id="features" className="py-20 bg-background">
            <div className="container">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                        CORE CAPABILITIES
                    </div>
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        Engineered for{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Performance
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col p-8 bg-card border border-white/5 rounded-2xl hover:border-primary/30 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                                    <feature.icon className="h-7 w-7 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
