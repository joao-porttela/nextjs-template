import { defineRouting } from 'next-intl/routing';
import { i18n } from './i18-config';
export const routing = defineRouting({
  locales: i18n.locales,
  defaultLocale: i18n.defaultLocale,
  localePrefix: 'as-needed',
});