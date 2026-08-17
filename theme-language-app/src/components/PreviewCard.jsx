import { useSettings } from '../context/SettingsContext'
import { translations } from '../translations'

function PreviewCard() {
  const { theme, language } = useSettings()
  const t = translations[language]

  return (
    <section className="preview-card">
      <h2>{t.previewTitle}</h2>
      <dl>
        <div>
          <dt>{t.currentTheme}</dt>
          <dd>{theme === 'dark' ? t.themeDark : t.themeLight}</dd>
        </div>
        <div>
          <dt>{t.currentLanguage}</dt>
          <dd>{language === 'th' ? t.languageThai : t.languageEnglish}</dd>
        </div>
      </dl>
      <p className="sample-message">{t.sampleMessage}</p>
    </section>
  )
}

export default PreviewCard
