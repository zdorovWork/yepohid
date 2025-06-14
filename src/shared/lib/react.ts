import { Context, useContext, useReducer, useRef } from "react";

export const useStrictContext = <T extends Record<string, unknown>>(context: Context<T | null>, name?: string): T => {
  const strictContext = useContext(context);

  if (!strictContext) {
    throw new Error("There is no provided context " + name);
  }

  return strictContext;
};

export const useSet = <T extends unknown>(values: T[]) => {
  const setRef = useRef(new Set(values));
  const [, reRender] = useReducer((x) => x + 1, 0);

  setRef.current.add = (...args) => {
    const res = Set.prototype.add.apply(setRef.current, args);
    reRender();

    return res;
  };

  setRef.current.clear = (...args) => {
    Set.prototype.clear.apply(setRef.current, args);
    reRender();
  };

  setRef.current.delete = (...args) => {
    const res = Set.prototype.delete.apply(setRef.current, args);
    reRender();

    return res;
  };

  return setRef.current;
};
