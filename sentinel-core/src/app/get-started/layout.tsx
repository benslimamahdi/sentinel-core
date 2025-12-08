import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Link from "next/link";

export default function GetStartedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col bg-black text-white">
            <Navbar />
            <div className="flex-1 container mx-auto pt-24 pb-12 px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Sidebar Navigation */}
                    <aside className="w-full lg:w-64 shrink-0">
                        <nav className="sticky top-24 space-y-8">
                            <div>
                                <h3 className="font-semibold text-white mb-4">Overview</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link
                                            href="/get-started"
                                            className="block text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                                        >
                                            Our Process
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/get-started/configuration"
                                            className="block text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                                        >
                                            Configuration
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-semibold text-white mb-4">Modules</h3>
                                <ul className="space-y-2">
                                    <li>
                                        <Link
                                            href="/get-started/camera"
                                            className="block text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                                        >
                                            Camera Feed
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/get-started/access-control"
                                            className="block text-sm text-muted-foreground hover:text-cyan-400 transition-colors"
                                        >
                                            Access Control
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 min-w-0">
                        {children}
                    </main>
                </div>
            </div>
            <Footer />
        </div>
    );
}
