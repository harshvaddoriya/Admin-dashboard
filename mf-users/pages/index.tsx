import React from "react";
import AgUserTable from "../components/AgUserTable";
import { users } from "../data/users"; 
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <AgUserTable users={users} />
      </div>
    </Layout>
  );
}
