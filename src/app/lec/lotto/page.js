import Lotto from "@/app/component/02/Lotto";

export default function page() {
    console.log("LottoPage");
    return (
        <div className="flex flex-col items-center">
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
