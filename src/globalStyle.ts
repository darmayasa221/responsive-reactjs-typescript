const breakpoints: Array<number> = [576, 768, 992, 960, 1200];
export const mq: Array<{ [key: number]: string } | string> = breakpoints.map(
  (bp) => `@media screen and (max-width: ${bp}px)`
);
