export const parseWaitTime = (value: string | undefined): number => {
  const parsed = Number(value);
  if (Number.isNaN(parsed)) {
    return 1;
  }
  if (parsed < 1) return 1;
  return parsed;
};
