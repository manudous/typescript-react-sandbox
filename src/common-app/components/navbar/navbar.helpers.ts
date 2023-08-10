export const isActiveRoute = (
  currentPath: string,
  targetPath: string
): boolean => currentPath.includes(targetPath);
