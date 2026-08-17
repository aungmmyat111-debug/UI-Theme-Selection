import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'app-settings'
const DEFAULTS = { theme: 'light', language: 'en' }

const SettingsContext = createContext(null)

// Read saved settings once, falling back to defaults if nothing is stored
// (or if the stored JSON is unreadable).
function loadSettings() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      const { theme, language } = JSON.parse(saved)
      return {
        theme: theme === 'dark' ? 'dark' : DEFAULTS.theme,
        language: language === 'th' ? 'th' : DEFAULTS.language,
      }
    }
  } catch {
    // ignore malformed data and use defaults
  }
  return DEFAULTS
}

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(loadSettings)

  // Persist every change to localStorage.
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  }, [settings])

  // Mirror the theme onto <html> so CSS variables apply to the whole page.
  useEffect(() => {
    document.documentElement.dataset.theme = settings.theme
  }, [settings.theme])

  const setTheme = (theme) => setSettings((prev) => ({ ...prev, theme }))
  const setLanguage = (language) =>
    setSettings((prev) => ({ ...prev, language }))
  const resetSettings = () => setSettings(DEFAULTS)

  return (
    <SettingsContext.Provider
      value={{ ...settings, setTheme, setLanguage, resetSettings }}
    >
      {children}
    </SettingsContext.Provider>
  )
}

// Keep the hook next to its context; only costs fast-refresh granularity.
// oxlint-disable-next-line react/only-export-components
export function useSettings() {
  const context = useContext(SettingsContext)
  if (!context) {
    throw new Error('useSettings must be used inside a SettingsProvider')
  }
  return context
}
