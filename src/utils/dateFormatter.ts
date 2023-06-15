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
    currentDate.getMonth(), currentDate.getDate(),
  );

  return formattedDate(updatedDate);
};
