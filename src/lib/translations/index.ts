import i18n from 'sveltekit-i18n'


export const { t, locale, locales, setLocale, loading, loadTranslations } = new i18n({
  initLocale: 'en',
  loaders: [
    {
      locale: 'en',
      key: '',
      loader: async () => (await import('./en/common.json')).default
    },
    {
      locale: 'ko',
      key: '',
      loader: async () => (await import('./ko/common.json')).default
    }
  ]
})
