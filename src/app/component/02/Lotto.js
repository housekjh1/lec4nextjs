import { useState, useEffect } from 'react';
import LottoNums from './LottoNums';
import ButtonBlue from '@/app/comm/ButtonBlue';

const Lotto = () => {

    const [nums, setNums] = useState();
    //버튼 클릭
    const handleClick = () => {
        let temp = [];
        // while (true) {
        //     if (temp.length === 7) break;
        // }
        while (temp.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;
            if (temp.indexOf(n) < 0) temp.push(n);
        }
        setNums(temp);
    }

    useEffect(() => {
        console.log("nums=", nums);

    }, [nums]);
    // nums의 초기값이 null인 경우 LottoNums로 값이 넘어가면 ns가 map을 돌 때 에러가 발생
    return (// 하나의 태그만 리턴이 가능 단, 자식 노드들은 제한없이 달고갈 수 있음, <></>프래그먼트 태그도 사용가능
        // <main className="container">
            <article className='flex flex-col justify-center items-center gap-5'>
                <header>
                    <h1>로또생성기</h1>
                </header>
                    {nums ? <LottoNums ns={nums}/> : '숫자가 없습니다.'}
                <footer>
                    <ButtonBlue caption={'생성하기'} handleClick={handleClick} />
                </footer>
            </article>
        // </main>
    );
}

export default Lotto;