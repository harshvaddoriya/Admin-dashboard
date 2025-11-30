'use client';
import React, { useMemo } from "react";
import { users, User } from "../data/users";
import { getRelativeTime } from "../utils/timeFormatter";

interface ActivityRecord extends User {
  activity: string;
  timestamp: string;
}

const getRecentActivityData = (): ActivityRecord[] => {
  const activities = [
    "Login",
    "Updated Profile",
    "Created Report",
    "Viewed Dashboard",
    "Downloaded File",
    "Changed Settings",
    "Submitted Form",
  ];

 
  return users.map((user, index) => ({
    ...user,
    activity: activities[index % activities.length],
    timestamp: user.created_at,
  }));
};


export const RecentActivity = () => {
  const rowData = useMemo(() => getRecentActivityData().slice(0, 15), []);
  // helper: generate initials for avatar
  const initials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  // color palette for avatars
  const avatarBg = (id: number) => {
    const colors = [
      "bg-indigo-100 text-indigo-700",
      "bg-green-100 text-green-700",
      "bg-pink-100 text-pink-700",
      "bg-yellow-100 text-yellow-800",
      "bg-blue-100 text-blue-700",
    ];
    return colors[id % colors.length];
  };

  return (
    <div className="w-full md:w-1/3">
      <div className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
        <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Recent Activity</h3>
            <p className="text-xs text-gray-500">Latest user actions</p>
          </div>
          {/* header actions removed (non-functional) */}
        </div>

        <div
          className="overflow-auto"
          style={{
            maxHeight: 320,
            scrollBehavior: "smooth",
            WebkitOverflowScrolling: "touch",
          } as React.CSSProperties}
        >
          <ul className="divide-y divide-gray-100">
            {rowData.map((r, idx) => (
              <li
                key={r.id}
                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-150"
              >
                <div className={`flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full ${avatarBg(r.id)}`}>
                  <span className="text-sm font-medium">{initials(r.name)}</span>
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <div className="text-sm font-medium text-gray-900 truncate">{r.name}</div>
                      <div className="text-xs text-gray-500 truncate">{r.email}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">{getRelativeTime(r.timestamp)}</div>
                      <div className="mt-1">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                          {r.activity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-4 py-2 border-t border-gray-100 bg-gray-50 flex items-center justify-between text-xs text-gray-600">
          <div>Showing {rowData.length} recent activities</div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
