"use client"
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
const About = () => {
    const [myReq, setMyReq] = useState < {success: string}>();
    const getAbout = async() => {
        const reply = await fetch("http://localhost:3000/api/about");
        setMyReq(await reply.json());
    }

    useEffect(()=>{
        getAbout();
    },[])

    return(<div>
        <p>About returning</p>
        <p>  {myReq?.success}</p>
        <Link href={"/"} >Back</Link>
    </div>)
};

export default About;