import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InstallationPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Installation
                    </span>
                </h1>
                <p className="text-lg text-muted-foreground">
                    Get started with SentinelCore by installing our Python SDK. This package allows you to securely stream data from your local devices to our cloud infrastructure.
                </p>
            </div>

            <div className="space-y-6">
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Prerequisites</h2>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-cyan-400" />
                            Python 3.8 or higher
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-cyan-400" />
                            pip package manager
                        </li>
                        <li className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-cyan-400" />
                            Active SentinelCore account
                        </li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Install via pip</h2>
                    <p className="text-muted-foreground">
                        Install the package using pip. We recommend using a virtual environment.
                    </p>

                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-black border border-white/10 rounded-lg p-4 font-mono text-sm text-cyan-400 flex items-center justify-between">
                            <span>pip install sentinelcore</span>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white">
                                <Copy className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Verify Installation</h2>
                    <p className="text-muted-foreground">
                        You can verify that the package was installed correctly by running:
                    </p>

                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-black border border-white/10 rounded-lg p-4 font-mono text-sm text-cyan-400 flex items-center justify-between">
                            <span>python -c "import sentinelcore; print(sentinelcore.__version__)"</span>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white">
                                <Copy className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
