const params: Intl.DateTimeFormatOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

export const formattedDate = (currentDate: Date = new Date()) => (
  currentDate.toLocaleDateString('uk-UA', params));

export const formattedDatePlus3Years = (currentDate: Date = new Date()) => {
  const updatedDate = new Date(
    currentDate.getFullYear() + 3,
    currentDate.getMonth(),
    currentDate.getDate(),
  );

  return formattedDate(updatedDate);
};

const currentDate = new Date();
const day = currentDate.getDate().toString().padStart(2, '0');
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const year = currentDate.getFullYear().toString().slice(-2);

export const dateFormatted = `${day}/${month}/${year}`;
