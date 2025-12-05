"use client";
import { atom } from "jotai";
import type { User } from "../data/users";

export const usersAtom = atom<User[]>([]);

export const searchTextAtom = atom<string>("");
export const selectedRolesAtom = atom<string[]>([]);
export const selectedStatusesAtom = atom<string[]>([]);

export const modalOpenAtom = atom<boolean>(false);

// export const viewUserAtom = atom<User | null>(null);
// export const editingUserAtom = atom<User | null>(null);
