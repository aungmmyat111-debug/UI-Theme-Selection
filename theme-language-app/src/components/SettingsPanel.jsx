import { useSettings } from '../context/SettingsContext'
import { translations } from '../translations'

function SettingsPanel() {
  const { theme, language, setTheme, setLanguage, resetSettings } =
    useSettings()
  const t = translations[language]

  return (
    <section className="settings-panel">
      <h2>{t.settingsTitle}</h2>

      <div className="setting-group">
        <span className="setting-label">{t.themeLabel}</span>
        <div className="button-group">
          <button
            type="button"
            className={theme === 'light' ? 'active' : ''}
            onClick={() => setTheme('light')}
          >
            {t.themeLight}
          </button>
          <button
            type="button"
            className={theme === 'dark' ? 'active' : ''}
            onClick={() => setTheme('dark')}
          >
            {t.themeDark}
          </button>
        </div>
      </div>

      <div className="setting-group">
        <span className="setting-label">{t.languageLabel}</span>
        <div className="button-group">
          <button
            type="button"
            className={language === 'en' ? 'active' : ''}
            onClick={() => setLanguage('en')}
          >
            {t.languageEnglish}
          </button>
          <button
            type="button"
            className={language === 'th' ? 'active' : ''}
            onClick={() => setLanguage('th')}
          >
            {t.languageThai}
          </button>
        </div>
      </div>

      <button type="button" className="reset" onClick={resetSettings}>
        {t.reset}
      </button>
    </section>
  )
}

export default SettingsPanel
