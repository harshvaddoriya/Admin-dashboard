"use client";

import React, { useEffect, useState } from "react";
import { Layout } from "../components/Layout";
import {StatusChart} from "../remotes/analysisComponents"
import SummaryCards from "@components/SummaryCards";

export default function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    import("analysis/data").then((mod) => {
      setUsers(mod.users);
    });
  }, []);

  if (users.length === 0) return <p>Loading remote users...</p>;

  const counts = {
    total: users.length,
    active: users.filter((u) => u.status === "Active").length,
    pending: users.filter((u) => u.status === "Pending").length,
    inactive: users.filter((u) => u.status === "Inactive").length,
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <SummaryCards counts={counts} />

      <h1 className="text-2xl font-semibold py-4">
        User Status Chart :
      </h1>

      <StatusChart users={users} />
    </Layout>
  );
}
