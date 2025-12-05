import { atom } from 'jotai';

// Theme atoms
export const themeAtom = atom<'light' | 'dark'>('light');
export const sidebarOpenAtom = atom<boolean>(true);

// Navigation atoms
export const currentPageAtom = atom<string>('dashboard');
export const activeNavItemAtom = atom<string>('');

// Global UI state atoms
export const isLoadingAtom = atom<boolean>(false);
export const notificationsAtom = atom<any[]>([]);
export const unreadNotificationsCountAtom = atom<number>(0);

// User session atoms
export const userSessionAtom = atom<any | null>(null);
export const isAuthenticatedAtom = atom<boolean>(false);

// Modal and dialog atoms
export const isModalOpenAtom = atom<boolean>(false);
export const modalTypeAtom = atom<string>('');
export const modalDataAtom = atom<any>(null);

// Search and filter atoms
export const globalSearchQueryAtom = atom<string>('');
export const globalFilterAtom = atom<Record<string, any>>({});

// Remote data atoms
export const remoteUsersAtom = atom<any[]>([]);

// Derived atoms
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
