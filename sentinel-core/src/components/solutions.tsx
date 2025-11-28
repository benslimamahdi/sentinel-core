import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
    {
        title: "For Developers",
        description: "Integrate security directly into your CI/CD pipeline with our CLI tools and API.",
        benefits: ["Automated scanning", "PR comments", "IDE plugins"],
    },
    {
        title: "For Security Teams",
        description: "Get a bird's eye view of your organization's security posture and compliance status.",
        benefits: ["Real-time dashboard", "Custom reporting", "Incident response"],
    },
    {
        title: "For Enterprise",
        description: "Scale securely with dedicated support, SLA guarantees, and custom deployment options.",
        benefits: ["SSO Integration", "Audit logs", "Dedicated success manager"],
    },
];

export function Solutions() {
    return (
        <section id="solutions" className="py-20 bg-background">
            <div className="container">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Solutions for every team
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Whether you're a startup or a Fortune 500, we have the tools you need.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className="flex flex-col rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                        >
                            <h3 className="text-xl font-bold">{solution.title}</h3>
                            <p className="mt-2 text-muted-foreground">
                                {solution.description}
                            </p>
                            <ul className="mt-6 space-y-3 flex-1">
                                {solution.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm">
                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8">
                                <Button variant="outline" className="w-full">
                                    Learn more
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
