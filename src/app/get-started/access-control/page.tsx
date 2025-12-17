import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AccessControlPage() {
    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Access Control Integration
                    </span>
                </h1>
                <p className="text-lg text-muted-foreground">
                    Integrate physical security devices like badge readers and biometric scanners directly into your SentinelCore dashboard.
                </p>
            </div>

            <div className="space-y-6">
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Badge Readers (RFID/NFC)</h2>
                    <p className="text-muted-foreground">
                        Listen for badge scans and verify access permissions in real-time.
                    </p>

                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-black border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                            <div className="flex justify-between items-start mb-2">
                                <span className="text-muted-foreground"># access_control.py</span>
                                <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-white">
                                    <Copy className="w-3 h-3" />
                                </Button>
                            </div>
                            <pre className="text-cyan-400">
                                {`from sentinelcore import AccessController, AccessEvent

# Initialize controller
controller = AccessController(api_key="sk_live_...")

@controller.on_scan
def handle_badge_scan(event: AccessEvent):
    print(f"Badge scanned: {event.badge_id} at {event.reader_id}")
    
    # Verify access with SentinelCore cloud
    result = controller.verify_access(
        badge_id=event.badge_id,
        location_id=event.reader_id
    )
    
    if result.allowed:
        print("Access Granted")
        controller.unlock_door(event.reader_id)
    else:
        print(f"Access Denied: {result.reason}")
        controller.trigger_alarm(event.reader_id)`}
                            </pre>
                        </div>
                    </div>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-white">Biometric Scanners</h2>
                    <p className="text-muted-foreground">
                        Handle biometric data securely. SentinelCore supports fingerprint and retinal scanners.
                    </p>

                    <div className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative bg-black border border-white/10 rounded-lg p-6 font-mono text-sm overflow-x-auto">
                            <pre className="text-cyan-400">
                                {`# Handle biometric verification
@controller.on_biometric
def handle_biometric(data):
    # Biometric data is automatically hashed before transmission
    verification = controller.verify_biometric(
        data=data.template,
        type="fingerprint", # or "retina", "face"
        device_id="scanner_01"
    )
    
    if verification.score > 0.95:
        controller.unlock_door("secure_lab")`}
                            </pre>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
