import Link from "next/link";

export default function TailLink({href, title}) {
    return (
        <div><Link href={href} className="hover:bg-slate-950 text-slate-950 hover:text-white p-2 m-2 rounded-md">{title}</Link></div>
    );
}
