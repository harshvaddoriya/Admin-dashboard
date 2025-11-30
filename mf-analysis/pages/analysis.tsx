    "use client";

    import Layout from "../components/Layout";
    import StatusChart from "../components/StatusChart";
    import MonthBarChart from "../components/MonthBarChart";
    import { users as baseUsers } from "../data/users";
    import { ImNotification } from "react-icons/im";
    import SummaryCards from "../components/SummaryCards";

    export default function Analysis() {
    const users = baseUsers;

    const counts = {
        total: users.length,
        active: users.filter(u => u.status === "Active").length,
        pending: users.filter(u => u.status === "Pending").length,
        inactive: users.filter(u => u.status === "Inactive").length,
    };

    return (
        <Layout>
        <div className="p-6">
        <SummaryCards counts={counts} />
        <p className="flex items-center gap-2 text-sm sm:text-base text-black mb-6 bg-red-300 rounded-md p-2 mt-4">
            <ImNotification className="text-red-600" />
            <span>
                Out of <strong>{counts.total}</strong> users, <strong>{counts.active}</strong> are active,{" "}
                <strong>{counts.pending}</strong> pending, and <strong>{counts.inactive}</strong> inactive.
            </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-3">
            <MonthBarChart users={users} />
            </div>
            <div className="md:col-span-2">
            <StatusChart users={users} />
            </div>
        </div>
        </div>
        </Layout>
    );
    }
