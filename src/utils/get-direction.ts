export function getDirection(locale: string | undefined) {
  if (!locale) return 'ltr';
  const rtlLanguages = [''];
  return rtlLanguages.includes(locale) ? 'rtl' : 'ltr';
}
