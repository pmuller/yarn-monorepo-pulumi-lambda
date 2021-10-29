export const hello = (name: string): string => {
  if (!name) throw new Error("Name undefined");
  return `Hello ${name}`;
};
