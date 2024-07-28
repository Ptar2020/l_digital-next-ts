
// export default function myLayout({children}:{children:React.ReactNode})

// {return(<html lang="eng">
// <body>{children}</body>
// </html>)
// };


const myLayout = ( {children}:{children:React.ReactNode}) =>{

    return (
        <div>
            <p className="text-red-300">About Layout</p>
            {children}
        </div>)
        // <html lang="eng">
        //     <body  >
        //         <p className="text-red-300">About Layout</p>
        //         {children}
        //         </body>
        // </html>)
};

export default myLayout;