export default async function page() {

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    let y = `${yesterday.getFullYear()}`;
    let m = yesterday.getMonth() + 1;
    m = m < 10 ? `0${m}` : `${m}`;
    let d = yesterday.getDate();
    d = d < 10 ? `0${d}` : `${d}`;

    const cdt = (y + m + d);
    let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=${cdt}`;

    const res = await fetch(url, { next: { revalidate: 0 } });
    const data = await res.json();
    const showRange = data.boxOfficeResult.showRange.split('~')[0];
    const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;

    console.log("showRange :", showRange);
    console.log("dailyBoxOfficeList :", dailyBoxOfficeList);

    return (
        <div>
            <div className="text-3xl font-bold">박스오피스 : {showRange}</div>
            <ul>
                {
                    dailyBoxOfficeList.map((item) =>
                        <li key={item.movieCd}>{item.rank} : {item.movieNm}</li>
                    )
                }
            </ul>
        </div>
    );
}
