import Link from "next/link";

export default function AboutLayout({ children }) {
    return (
        <main className="container mx-auto">
            <div className="flex justify-between items-center p-10 h-12 bg-slate-950 text-white my-5">
                <div>About Layout</div>
                <nav>
                    <ul className="flex flex-row items-center justify-between gap-5">
                        <li><Link href="/about/page1">page1</Link></li>
                        <li><Link href="/about/test">test</Link></li>
                        <li><Link href="/about/test1">test1</Link></li>
                        <li><Link href="/about">home</Link></li>
                    </ul>
                </nav>
            </div>
            {children}
        </main>
    );
}
