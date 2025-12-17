import { Activity, Bell, BarChart3, TrendingUp } from "lucide-react";

const features = [
    {
        icon: Bell,
        title: "Real-Time Alerts",
        description: "Receive instant, intelligent notifications about security breaches and system anomalies the moment they occur.",
    },
    {
        icon: BarChart3,
        title: "Data Analytics",
        description: "Transform raw logs into actionable insights with our advanced analytics engine and visualization tools.",
    },
    {
        icon: TrendingUp,
        title: "System Optimizations",
        description: "Automatically identify bottlenecks and auto-tune your infrastructure for peak performance and reduced latency.",
    },
    {
        icon: Activity,
        title: "Live Statistics",
        description: "Monitor vital health metrics, uptime status, and resource consumption with millisecond-precision statistics.",
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
                    <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Experience the power of our integrated platform, designed to deliver critical insights and keeping your operations running smoothly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col p-6 bg-card border border-white/5 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-bold text-white leading-tight">{feature.title}</h3>
                            </div>
                            <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
