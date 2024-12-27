// "use client"
// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
// import Image from "next/image";

import { getServerSession } from "next-auth"

// export default function Home() {
//   return <div>
//         <SessionProvider>
//           <OtherHome/>
//         </SessionProvider>

//   </div>
// }


// function OtherHome(){
//   const session=useSession();


//   return <div>
//     {session.status==="authenticated" && <button onClick={()=>signOut()}>LogOut</button>}
//     {session.status==="unauthenticated" && <button onClick={()=>signIn()}>SignIn</button>}
//   </div>
// }

export default async function Home(){

  const session=await getServerSession();

  return <div>
       {JSON.stringify(session)}
  </div>
}