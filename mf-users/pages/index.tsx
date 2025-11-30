import React from "react";
import AgUserTable from "../components/AgUserTable";
import { users } from "../data/users"; 

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        User Management
      </h1>

      <AgUserTable users={users} />
    </div>
  );
}
