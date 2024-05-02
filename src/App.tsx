import { useEffect, useState } from 'react'
import fetchUser from './api/user'

import Header from './components/Header'
import Profile from './components/Profile'
import Downloader from './components/Downloader'
import TranscriptReport from './components/TranscriptReport/TranscriptReport'

import './styles/App.css'

function App() {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    fetchUser().then(data => {
      setUserData(data)
    })
  }, [])

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
