import Image from "next/image";
import Link from "next/link";

/**
 * Footer Component
 * 
 * Dark-themed footer with logo, links, and copyright.
 */
export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="flex flex-col gap-4">
                        <Link href="/">
                            <Image
                                src="/new full logo.png"
                                alt="SentinelCore"
                                width={240}
                                height={60}
                                className="h-12 w-auto"
                            />
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Securing the future of digital infrastructure with advanced threat protection.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">Product</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#features" className="hover:text-primary transition-colors">Features</Link></li>
                            <li><Link href="#product" className="hover:text-primary transition-colors">Dashboard</Link></li>
                            <li><Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Integrations</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">Company</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-white">Legal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-primary transition-colors">Privacy</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Terms</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors">Security</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} SentinelCore. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
