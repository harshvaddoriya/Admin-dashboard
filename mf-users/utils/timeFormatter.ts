/**
 * Converts a date to a relative time string (e.g., "1 day ago", "2 weeks ago")
 * @param dateString - ISO date string (YYYY-MM-DD)
 * @returns Relative time string
 */
export const getRelativeTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "Today";
  } else if (diffDays === 1) {
    return "1 day ago";
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 14) {
    const weeks = Math.floor(diffDays / 7);
    return weeks === 1 ? "1 week ago" : `${weeks} weeks ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} weeks ago`;
  } else if (diffDays < 60) {
    return "1 month ago";
  } else {
    const months = Math.floor(diffDays / 30);
    return `${months} months ago`;
  }
};

/**
 * Get a status badge color based on the status
 */
export const getStatusColor = (status: string): string => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-800";
    case "Inactive":
      return "bg-red-100 text-red-800";
    case "Pending":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

/**
 * Get a role badge color based on the role
 */
export const getRoleColor = (role: string): string => {
  switch (role) {
    case "Admin":
      return "bg-purple-100 text-purple-800";
    case "Manager":
      return "bg-blue-100 text-blue-800";
    case "User":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};
