export const formatAmount = (amount: number) => {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const generateId = () => {
  const randomPrefix = Math.random().toString(36).substring(2, 11);
  const dateSufix = Date.now().toString(36);

  return randomPrefix + dateSufix;
};

export const formatDate = (dateNumber: number) => {
  const newDate = new Date(dateNumber);

  return newDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
};
