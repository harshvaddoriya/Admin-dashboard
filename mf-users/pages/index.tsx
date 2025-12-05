"use client";

import React, { useEffect } from "react";
import AgUserTable from "../components/AgUserTable";
import Layout from "../components/Layout";
import { users } from "../data/users";
import { useSetAtom } from "jotai";
import { usersAtom } from "@store/userAtoms";

export default function Home() {
  const setUsers = useSetAtom(usersAtom);

  useEffect(() => {
    setUsers(users);
  }, [setUsers]);

  return (
    <Layout>
      <div>
        <h1 className="px-6 py-4 font-semibold text-2xl">Filter & Sorting & Pagination Using Ag-Grid Table Data:</h1>
        <AgUserTable users={users} />
      </div>
    </Layout>
  );
}
