export const validatePhone = (value: string): boolean =>
  /^\+7\d{10}$/.test(value);

export const validateRequired = (value: string): boolean =>
  value.trim().length > 0;

export const validateDateTime = (value: string): boolean =>
  Boolean(Date.parse(value));
