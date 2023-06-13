export const getTwoDigits = (data: number) => (
  data < 10
    ? `0${data}`
    : data
);
