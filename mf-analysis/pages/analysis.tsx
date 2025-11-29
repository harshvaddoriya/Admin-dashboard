    "use client";

    import Layout from "../components/Layout";
    import StatusChart from "../components/StatusChart";
    import MonthBarChart from "../components/MonthBarChart";
    import { users as baseUsers } from "../data/users";
    import { ImNotification } from "react-icons/im";

    export default function Analysis() {
    // Use all users, no filtering
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
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="p-4 rounded-lg bg-blue-50 text-blue-800 shadow-sm">
            <dt className="text-xs sm:text-sm font-medium">Total</dt>
            <dd className="text-lg sm:text-xl font-semibold">{counts.total}</dd>
            </div>
            <div className="p-4 rounded-lg bg-green-50 text-green-800 shadow-sm">
            <dt className="text-xs sm:text-sm font-medium">Active</dt>
            <dd className="text-lg sm:text-xl font-semibold">{counts.active}</dd>
            </div>
            <div className="p-4 rounded-lg bg-yellow-50 text-yellow-800 shadow-sm">
            <dt className="text-xs sm:text-sm font-medium">Pending</dt>
            <dd className="text-lg sm:text-xl font-semibold">{counts.pending}</dd>
            </div>
            <div className="p-4 rounded-lg bg-gray-50 text-gray-800 shadow-sm">
            <dt className="text-xs sm:text-sm font-medium">Inactive</dt>
            <dd className="text-lg sm:text-xl font-semibold">{counts.inactive}</dd>
            </div>
        </div>
        <p className="flex items-center gap-2 text-sm sm:text-base text-black mb-6 bg-red-300 rounded-md p-2">
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
