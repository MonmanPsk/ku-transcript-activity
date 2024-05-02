import fetchUser from './api/user'

import Header from './components/Header'
import Profile from './components/Profile'
import Downloader from './components/Downloader'
import TranscriptReport from './components/TranscriptReport/TranscriptReport'

import './styles/App.css'

function App() {
  console.log(fetchUser());
  
  return (
    <>
      <Header />
      <Profile />
      <Downloader />
      <TranscriptReport />
    </>
  )
}

export default App
