import React from "react";
import dynamic from "next/dynamic";
import { users } from "../data/users";

const AgUserTable = dynamic(() => import("../components/AgUserTable"), { ssr: false });

export default function TableData() {
  return (
         <div className='p-2'>
            <h1 className='font-semibold text-2xl'>Users Data : </h1>
             <AgUserTable users={users} />
        </div>
  );
}
