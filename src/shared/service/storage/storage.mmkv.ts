import { MMKV, Mode } from "react-native-mmkv";

import { TStorageImplementation } from "./storageService";

const storage = new MMKV({
  id: `yepohid-storage`,
  // path: `${USER_DIRECTORY}/storage`,
  encryptionKey: "hunter2",
  mode: Mode.MULTI_PROCESS,
});

export const mmkvImpl = (): TStorageImplementation => {
  return {
    setItemImpl: (key: string, value: string) => storage.set(key, value),
    getItemImpl: (key: string) => new Promise((resolve) => resolve(storage.getString(key) || null)),
    getItemImplSync: (key: string) => storage.getString(key) || null,
    removeItemImpl: (key: string) => storage.delete(key),
  };
};
