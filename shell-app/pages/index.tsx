import React from "react";
import { Layout } from "../components/Layout";
import StatusChart from "@components/StatusChart";
import { users as baseUsers } from "../data/users";
import SummaryCards  from "@components/SummaryCards";

export default function Dashboard() {
  const users = baseUsers;
  const counts = {
    total: baseUsers.length,
    active: baseUsers.filter(u => u.status === "Active").length,
    pending: baseUsers.filter(u => u.status === "Pending").length,
    inactive: baseUsers.filter(u => u.status === "Inactive").length,
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
       <SummaryCards counts={counts} />
      <h1 className="text-2xl font-semibold py-4">User Status Chart : </h1>
        <StatusChart  users={users}/>
    </Layout>
  );
}
