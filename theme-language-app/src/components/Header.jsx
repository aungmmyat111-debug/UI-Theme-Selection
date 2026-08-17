import { useSettings } from '../context/SettingsContext'
import { translations } from '../translations'

function Header() {
  const { language } = useSettings()
  const t = translations[language]

  return (
    <header className="header">
      <h1>{t.appTitle}</h1>
    </header>
  )
}

export default Header
