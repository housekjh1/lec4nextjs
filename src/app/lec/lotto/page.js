"use client"
import Lotto from "@/app/component/02/Lotto";

export default function LottoPage() {
    console.log("LottoPage");
    return (
        <div className="m-10">
            <h1>LottoPage</h1>
            <Lotto />
        </div>
    );
}

// export async function getServerSideProps(ctx){


//     return {
//         props:{
//             data:null
//         }
//     }
// }
