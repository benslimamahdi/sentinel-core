import Image from "next/image";

export function About() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container">
                <div className="flex flex-col gap-12 md:flex-row md:items-center">
                    <div className="flex-1">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                            Securing the digital frontier
                        </h2>
                        <div className="space-y-4 text-lg text-muted-foreground">
                            <p>
                                Founded in 2024, SentinelCore was born from a simple idea: security shouldn't be a bottleneck to innovation.
                            </p>
                            <p>
                                We believe that developers want to write secure code, but traditional tools are slow, clunky, and get in the way. We're changing that by building security tools that developers actually love to use.
                            </p>
                            <p>
                                Our team consists of security veterans and passionate developers working together to make the internet a safer place.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4 border-t pt-8">
                            <div>
                                <div className="text-3xl font-bold text-primary">99.99%</div>
                                <div className="text-sm text-muted-foreground">Uptime SLA</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-primary">500M+</div>
                                <div className="text-sm text-muted-foreground">Requests Secured</div>
                            </div>
                        </div>
                    </div>

                    {/* Placeholder for an image - using a div with gradient for now to keep it lightweight */}
                    <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary border shadow-xl">
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 font-medium">
                            About Us Image
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
