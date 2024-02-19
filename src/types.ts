import { AutomergeUrl } from "@automerge/automerge-repo";

/** Inside an Automerge change function, any arrays found on the document have these utility functions */
export interface ExtendedArray<T> extends Array<T> {
  insertAt(index: number, ...args: T[]): ExtendedArray<T>;
  deleteAt(index: number, numDelete?: number): ExtendedArray<T>;
}

export interface State {
  form: AutomergeUrl[];
}

export interface TodoData {
  url: AutomergeUrl;
  content: string;
  completed: boolean;
}

export interface UserFormData {
  url: AutomergeUrl;
  name: string;
  email: string;
  phone: number;
}

export const Filter = {
  all: "all",
  incomplete: "incomplete",
  completed: "completed",
} as const;
export type Filter = (typeof Filter)[keyof typeof Filter];
