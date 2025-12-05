import { atom } from 'jotai';

export const usersAtom = atom<any[]>([]);
export const filteredUsersAtom = atom<any[]>([]);

export const dateRangeAtom = atom<{ startDate: Date | null; endDate: Date | null }>({
  startDate: null,
  endDate: null,
});

export const ageRangeAtom = atom<{ min: number; max: number }>({
  min: 0,
  max: 100,
});

export const statusFilterAtom = atom<string>('');

export const selectedUserAtom = atom<any | null>(null);
export const isLoadingAtom = atom<boolean>(false);
export const errorAtom = atom<string | null>(null);

export const monthBarDataAtom = atom<any[]>([]);
export const ageDistributionAtom = atom<any[]>([]);

export const filteredUsersByDateAtom = atom((get) => {
  const users = get(usersAtom);
  const { startDate, endDate } = get(dateRangeAtom);

  if (!startDate || !endDate) return users;

  return users.filter((user) => {
    const userDate = new Date(user.createdAt);
    return userDate >= startDate && userDate <= endDate;
  });
});

export const filteredUsersByAgeAtom = atom((get) => {
  const users = get(filteredUsersByDateAtom);
  const { min, max } = get(ageRangeAtom);

  return users.filter((user) => user.age >= min && user.age <= max);
});

export const filteredUsersByStatusAtom = atom((get) => {
  const users = get(filteredUsersByAgeAtom);
  const status = get(statusFilterAtom);

  if (!status) return users;
  return users.filter((user) => user.status === status);
});
