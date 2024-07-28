"use client"
import React, {useEffect, useState} from 'react';
import Link from 'next/link';

const Contact = () => {
    const [contact, setContact] = useState<{_id: number, name: string}[]>([]);
    
    const getContact = async() => {
        const cont = [{_id:1, name:"One"}, {_id:2, name:"Two"}]; //await fetch("http://localhost:3000/api/contact");
        setContact(cont);
    };

    useEffect(() => {
        getContact();
    }, []);

    return (
        <div>
            <p><Link href="/">Back</Link></p>
            <p>ContactUs page</p>
            <p>From db</p>
            {contact.length > 1 ?
            contact.map((contact) => (
                <p key={contact._id}>{contact.name}</p>
            ))
        :<p>No contacts available</p>}
            
        </div>
    );
};

export default Contact;

// "use client"
// import React, {useEffect, useState} from 'react';
// import Link from 'next/link';

// const Contact = () => {
//     const [contact, setContact] = useState([]);
//     const getContact = async() => {
//         const cont = [{_id:1,name:"One"},{_id:2, name:"Two"}]//await fetch("http://localhost:3000/api/contact");
//         setContact(cont)
//     }
//     useEffect(()=>{
//         getContact();
//     },[])

//     return(<div>
//         <p><Link href={"/"}>Back</Link></p>
//         <p>ContactUs page</p>
//         <p>From db</p>
//         <p>{contact.forEach((contact)=>contact._id)}</p>
        
//         {/* {contact?.map((contact)=>(
//             <p key={contact._id} >{contact.name}</p>
//         ))} */}
//     </div>)
// };

// export default Contact;