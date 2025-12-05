"use client";

import React, { useEffect } from "react";
import AgUserTable from "../components/AgUserTable";
import { users } from "../data/users";
import { useSetAtom } from "jotai";
import { usersAtom } from "@store/userAtoms";

export default function TableData() {
  const setUsers = useSetAtom(usersAtom);

  useEffect(() => {
    setUsers(users);
  }, [setUsers]);

  return (
         <div className='p-2'>
            <h1 className='font-semibold text-2xl'>Users Data : </h1>
             <AgUserTable users={users} />
        </div>
  );
}
