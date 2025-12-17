import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Starter",
        price: "$9",
        description: "Perfect for small projects and testing.",
        features: [
            "Up to 1,000 requests/mo",
            "Basic anomaly detection",
            "Email support",
            "1 Team member",
            "1 GB log storage",
        ],
        cta: "Get Started",
        popular: false,
    },
    {
        name: "Pro",
        price: "$49",
        description: "For growing businesses and teams.",
        features: [
            "Up to 1 million requests/mo",
            "Advanced AI predictions",
            "Priority support",
            "5 Team members",
            "50 GB log storage",
            "Custom alerts",
        ],
        cta: "Start Free Trial",
        popular: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "For large-scale mission-critical apps.",
        features: [
            "Unlimited requests",
            "Dedicated support manager",
            "SLA guarantees",
            "Unlimited team members",
            "Unlimited storage",
            "SSO & SAML",
        ],
        cta: "Contact Sales",
        popular: false,
    },
];

/**
 * Pricing Component
 * 
 * Displays subscription plans in a dark-themed grid.
 * - Highlights the "Popular" plan with a distinct border and badge.
 * - Uses rounded cards with hover effects.
 */
export function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-background">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
                        Simple,{" "}
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            transparent pricing
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Choose the plan that's right for you. All plans include our core security features.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col p-8 rounded-2xl border ${plan.popular
                                    ? "border-primary/50 bg-card shadow-xl shadow-primary/10"
                                    : "border-white/5 bg-card"
                                } transition-all duration-300 hover:border-primary/30`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-xs font-bold">
                                    MOST POPULAR
                                </div>
                            )}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                                <div className="mt-4 flex items-baseline">
                                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                                    {plan.price !== "Custom" && (
                                        <span className="text-muted-foreground ml-2">/month</span>
                                    )}
                                </div>
                                <p className="mt-4 text-muted-foreground">{plan.description}</p>
                            </div>
                            <ul className="flex-1 space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Check className="h-5 w-5 text-primary shrink-0" />
                                        <span className="text-sm text-foreground/80">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                variant={plan.popular ? "default" : "outline"}
                                className={plan.popular
                                    ? "w-full bg-white hover:bg-white/90 text-black font-semibold"
                                    : "w-full border-white/20 hover:bg-white/10 font-semibold"
                                }
                            >
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
