export const useMath = () => {
  return {
    lerp: (p1: number, p2: number, t: number) => p1 + (p2 - p1) * t,
  };
};
