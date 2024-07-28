// import Error from "next/error"
export async function GET(request: Request) {
    try {
        console.log("Backend attacked");
        return new Response(JSON.stringify({ success: "Request successfully made" }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        console.log((err as Error).message);
        return new Response(JSON.stringify({ msg: (err as Error).message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}


// // import Error from "next/error"
// export async function GET(request: ){
//     try{
//         console.log("Backend attacked")
//         return new Response(JSON.stringify({success: "Request successfully made"}))
//     }
//     catch(err: ){
//         console.log(err.message);
//         return new Response(JSON.stringify(err.message))
//     }
// }