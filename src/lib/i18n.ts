import { Language } from '../../types';

export type I18nText = { fr: string; en: string };

export const emptyI18nText = (): I18nText => ({ fr: '', en: '' });

export const parseI18nText = (value: string | null | undefined): I18nText => {
  if (!value) return emptyI18nText();

  try {
    const parsed = JSON.parse(value);
    if (parsed && typeof parsed === 'object' && (typeof parsed.fr === 'string' || typeof parsed.en === 'string')) {
      return { fr: parsed.fr || '', en: parsed.en || '' };
    }
  } catch {
    /* fall through, treat as plain text */
  }

  return { fr: value, en: value };
};

export const serializeI18nText = (value: I18nText): string => {
  if (!value.fr && !value.en) return '';
  if (value.fr === value.en) return value.fr;
  return JSON.stringify({ fr: value.fr, en: value.en });
};

export const pickI18n = (value: string | null | undefined, language: Language): string => {
  const i18n = parseI18nText(value);
  return language === 'fr' ? i18n.fr || i18n.en : i18n.en || i18n.fr;
};
