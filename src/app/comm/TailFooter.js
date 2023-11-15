export default function TailFooter() {
    const address = "(46241) 부산광역시 금정구 부산대학로63번길 2 (장전동) 부산대학교 소프트웨어교육센터 TEL : 051-510-3737, 3738, 3624";
    const copyright = "COPYRIGHT(C) PUSAN NATIONAL UNIVERSITY. ALL RIGHT RESERVED";
    return (
        <div className="container flex flex-col items-center text-sm bg-slate-950 text-white p-5 m-5 rounded-md">
            <p>{address}</p>
            <p>{copyright}</p>
        </div>
    );
}
