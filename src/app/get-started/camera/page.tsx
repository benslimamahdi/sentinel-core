import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CameraSetupPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Camera Feed Setup
                    </span>
                </h1>
                <p className="text-lg text-muted-foreground">
                    Connect your local cameras to the SentinelCore network for real-time anomaly detection and monitoring.
                </p>
            </div>

            <div className="space-y-6">
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Basic Configuration</h2>
                    <p className="text-muted-foreground">
                        To start streaming from a default webcam, initialize the `CameraClient` with your API key.
                    </p>

                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-black border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-muted-foreground"># main.py</span>
                                <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-white">
                                    <Copy className="w-3 h-3" />
                                </Button>
                            </div>
                            <pre className="text-cyan-400">
                                {`from sentinelcore import CameraClient

# Initialize the client
client = CameraClient(
    api_key="sk_live_...",
    region="us-east-1"
)

# Start streaming from default camera (index 0)
# The stream is automatically encrypted and sent to SentinelCore
client.start_stream(
    source=0,
    resolution=(1920, 1080),
    fps=30
)`}
                            </pre>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">IP Cameras (RTSP)</h2>
                    <p className="text-muted-foreground">
                        You can also connect to IP cameras using RTSP URLs.
                    </p>

                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-black border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                            <pre className="text-cyan-400">
                                {`# Connect to an RTSP stream
client.start_stream(
    source="rtsp://admin:password@192.168.1.100:554/stream1",
    protocol="tcp"
)`}
                            </pre>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
