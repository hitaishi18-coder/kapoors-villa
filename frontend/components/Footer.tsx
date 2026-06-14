import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto px-6 py-24">
                <div className="flex flex-col items-center text-center">
                    <h2 className="font-serif text-5xl font-bold text-amber-500">
                        Kapoor&apos;s Villa
                    </h2>

                    <div className="mt-10 flex flex-wrap justify-center gap-8 text-sm">
                        <Link
                            href="/privacy"
                            className="text-muted-foreground hover:text-amber-500"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="/terms"
                            className="text-muted-foreground hover:text-amber-500"
                        >
                            Terms of Service
                        </Link>

                        <Link
                            href="tel:+919820292830"
                            className="text-muted-foreground hover:text-amber-500"
                        >
                            9820292830
                        </Link>
                    </div>

                    <div className="my-12 h-px w-full max-w-3xl bg-amber-500/20" />

                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Kapoor&apos;s Villa. All
                        Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
