import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ConfigurationPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Configuration
                    </span>
                </h1>
                <p className="text-lg text-muted-foreground">
                    Configure the SentinelCore SDK to communicate with your specific project environment.
                </p>
            </div>

            <div className="space-y-6">
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">API Keys</h2>
                    <p className="text-muted-foreground">
                        You can find your API keys in the SentinelCore Dashboard under Settings {'>'} API Keys.
                        Never commit your API keys to version control.
                    </p>

                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                        <p className="text-yellow-200 text-sm">
                            <strong>Warning:</strong> Keep your secret keys safe! If an API key is compromised, rotate it immediately in the dashboard.
                        </p>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Environment Variables</h2>
                    <p className="text-muted-foreground">
                        We recommend using environment variables to manage your configuration.
                    </p>

                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-black border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-muted-foreground">.env</span>
                                <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-white">
                                    <Copy className="w-3 h-3" />
                                </Button>
                            </div>
                            <pre className="text-cyan-400">
                                {`SENTINEL_API_KEY=sk_live_...
SENTINEL_REGION=us-east-1
SENTINEL_LOG_LEVEL=INFO`}
                            </pre>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
