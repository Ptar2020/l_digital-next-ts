const GET = async(request:Request) => {
    try{
        return new Response(JSON.stringify({success:"Request to contacts successful"}))
    }catch(err){
        return new Response(JSON.stringify({msg:(err as Error).message}))
    }
};

export default GET;