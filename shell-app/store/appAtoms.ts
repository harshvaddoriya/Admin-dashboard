import { atom } from 'jotai';

export const themeAtom = atom<'light' | 'dark'>('light');
export const sidebarOpenAtom = atom<boolean>(true);

export const currentPageAtom = atom<string>('dashboard');
export const activeNavItemAtom = atom<string>('');

export const isLoadingAtom = atom<boolean>(false);
export const notificationsAtom = atom<any[]>([]);
export const unreadNotificationsCountAtom = atom<number>(0);

export const userSessionAtom = atom<any | null>(null);
export const isAuthenticatedAtom = atom<boolean>(false);

export const isModalOpenAtom = atom<boolean>(false);
export const modalTypeAtom = atom<string>('');
export const modalDataAtom = atom<any>(null);

export const globalSearchQueryAtom = atom<string>('');
export const globalFilterAtom = atom<Record<string, any>>({});

export const remoteUsersAtom = atom<any[]>([]);


export const isDarkModeAtom = atom((get) => {
  return get(themeAtom) === 'dark';
});

export const hasUnreadNotificationsAtom = atom((get) => {
  return get(unreadNotificationsCountAtom) > 0;
});

export const filteredNotificationsAtom = atom((get) => {
  const notifications = get(notificationsAtom);
  const query = get(globalSearchQueryAtom).toLowerCase();

  if (!query) return notifications;

  return notifications.filter(
    (notification) =>
      notification.title?.toLowerCase().includes(query) ||
      notification.message?.toLowerCase().includes(query)
  );
});
