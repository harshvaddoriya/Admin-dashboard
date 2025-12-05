import { atom } from 'jotai';

// User data atoms
export const usersAtom = atom<any[]>([]);
export const selectedUserAtom = atom<any | null>(null);

// Table state atoms
export const searchQueryAtom = atom<string>('');
export const sortColumnAtom = atom<string>('');
export const sortDirectionAtom = atom<'asc' | 'desc'>('asc');
export const pageNumberAtom = atom<number>(0);
export const pageSizeAtom = atom<number>(10);

// Modal state atoms
export const isUserModalOpenAtom = atom<boolean>(false);
export const modalModeAtom = atom<'view' | 'edit' | 'create'>('view');

// Loading and error atoms
export const isLoadingAtom = atom<boolean>(false);
export const errorAtom = atom<string | null>(null);
export const successMessageAtom = atom<string | null>(null);

// Filter atoms
export const statusFilterAtom = atom<string>('');
export const roleFilterAtom = atom<string>('');

// Additional filter atoms used in AgUserTable
export const searchTextAtom = atom<string>('');
export const selectedRolesAtom = atom<string[]>([]);
export const selectedStatusesAtom = atom<string[]>([]);

// Derived atoms for filtered and sorted users
export const filteredUsersBySearchAtom = atom((get) => {
  const users = get(usersAtom);
  const query = get(searchQueryAtom).toLowerCase();

  if (!query) return users;

  return users.filter(
    (user) =>
      user.name?.toLowerCase().includes(query) ||
      user.email?.toLowerCase().includes(query) ||
      user.phone?.toLowerCase().includes(query)
  );
});

export const filteredUsersByStatusAtom = atom((get) => {
  const users = get(filteredUsersBySearchAtom);
  const status = get(statusFilterAtom);

  if (!status) return users;
  return users.filter((user) => user.status === status);
});

export const filteredUsersByRoleAtom = atom((get) => {
  const users = get(filteredUsersByStatusAtom);
  const role = get(roleFilterAtom);

  if (!role) return users;
  return users.filter((user) => user.role === role);
});

export const sortedUsersAtom = atom((get) => {
  const users = get(filteredUsersByRoleAtom);
  const sortColumn = get(sortColumnAtom);
  const sortDirection = get(sortDirectionAtom);

  if (!sortColumn) return users;

  const sorted = [...users].sort((a, b) => {
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  return sorted;
});

export const paginatedUsersAtom = atom((get) => {
  const users = get(sortedUsersAtom);
  const pageNumber = get(pageNumberAtom);
  const pageSize = get(pageSizeAtom);

  const startIndex = pageNumber * pageSize;
  const endIndex = startIndex + pageSize;

  return users.slice(startIndex, endIndex);
});

export const totalUsersCountAtom = atom((get) => {
  return get(sortedUsersAtom).length;
});

export const totalPagesAtom = atom((get) => {
  const total = get(totalUsersCountAtom);
  const pageSize = get(pageSizeAtom);
  return Math.ceil(total / pageSize);
});
