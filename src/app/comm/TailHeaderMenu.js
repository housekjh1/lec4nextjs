import TailLink from "./TailLink";

export default function TailHeaderMenu() {
    return (
        <div className="container border-b-2 border-gray-200 p-5 m-5 rounded-md">
            <div className="flex flex-row justify-between">
                <div>Next JS 실습</div>
                <nav className="flex flex-row">
                    <TailLink href="/lec/clock" title="Clock" />
                    <TailLink href="/lec/lotto" title="Lotto" />
                    <TailLink href="/lec/boxoffice" title="BoxOffice" />
                    <TailLink href="/lec/boxoffices" title="최신BoxOffice" />
                    <TailLink href="/" title="Home" />
                </nav>
            </div>
        </div>
    );
}
