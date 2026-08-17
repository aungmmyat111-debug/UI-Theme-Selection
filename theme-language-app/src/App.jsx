import Header from './components/Header'
import SettingsPanel from './components/SettingsPanel'
import PreviewCard from './components/PreviewCard'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="content">
        <SettingsPanel />
        <PreviewCard />
      </main>
    </>
  )
}

export default App
