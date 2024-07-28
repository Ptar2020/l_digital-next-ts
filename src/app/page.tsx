
import Image from "next/image";
import Link from 'next/link';
export default function Home() {
  return (
    <main className=" flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Link className="mr-3 hover:bg-red-600 text-blue-600 font-bold" href={"/about"} >About</Link>
        <Link className="mr-3 hover:bg-red-400 text-blue-600 font-bold" href={"/services"} >Services</Link>
        <Link className="hover:bg-red-200 text-blue-600 font-bold" href={"/contact"} >Contact</Link>

      </div>

      
    </main>
  );
}
