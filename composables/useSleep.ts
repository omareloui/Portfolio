export const useSleep = () => {
  return (ms: number) => new Promise((res, _rej) => setTimeout(res, ms));
};
