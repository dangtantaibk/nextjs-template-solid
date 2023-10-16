import i18nInstance  from "./i18n";

export function useTranslation(ns, options = {}) {
  console.log("i18nInstance=========>", i18nInstance)
  console.log("i18nInstance======wwwww===", i18nInstance)
  return {
    t: i18nInstance.getFixedT(i18nInstance.languages, Array.isArray(ns) ? ns[0] : ns, options.keyPrefix),
    i18next: i18nInstance
  }
}