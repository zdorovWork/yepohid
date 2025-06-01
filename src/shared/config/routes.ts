export const Routes = {
  Home: "index",
  LISTS: "lists",
} as const;

export type TRoutes = (typeof Routes)[keyof typeof Routes];
