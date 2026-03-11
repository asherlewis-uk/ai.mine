import Dexie, { type Table } from "dexie";

export type ChatRecord = {
  id: string;
  title: string;
  updatedAt: string;
  isTemporary: boolean;
};

export type LibraryItemRecord = {
  id: string;
  label: string;
  kind: "snippet" | "note" | "reference";
  updatedAt: string;
};

export type SettingRecord = {
  key: string;
  value: string;
};

export class AiMineDatabase extends Dexie {
  chats!: Table<ChatRecord, string>;
  libraryItems!: Table<LibraryItemRecord, string>;
  settings!: Table<SettingRecord, string>;

  constructor() {
    super("ai.mine");

    this.version(1).stores({
      chats: "id, updatedAt, isTemporary",
      libraryItems: "id, kind, updatedAt",
      settings: "key",
    });
  }
}

export const appDb = new AiMineDatabase();
