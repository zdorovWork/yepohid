import { StateStorage } from "zustand/middleware";

export type TStorageImplementation = {
  setItemImpl: (key: string, value: string) => void;
  getItemImpl: (key: string) => Promise<string | null>;
  getItemImplSync: (key: string) => string | null;
  removeItemImpl: (key: string) => void;
};

export const _storageService = ({
  setItemImpl,
  getItemImpl,
  removeItemImpl,
  getItemImplSync,
}: TStorageImplementation): StateStorage & { getItemSync: (key: string) => string | null } => {
  const setItem = (key: string, value: string) => {
    setItemImpl(key, value);
  };
  const getItem = (key: string) => {
    return getItemImpl(key);
  };
  const removeItem = (key: string) => {
    removeItemImpl(key);
  };

  const getItemSync = (key: string) => {
    return getItemImplSync(key);
  };

  return {
    setItem,
    getItem,
    removeItem,
    getItemSync,
  };
};
