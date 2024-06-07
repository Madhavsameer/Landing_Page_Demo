import { useState } from 'react'

import './App.css'
import NavBar from './NavBar'
import Page from './Page'
import ContactUs from './Contact Page/ContactUs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=' bg-white w-full h-svh'>
      <NavBar></NavBar>
      <div className='flex justify-center'>

      <Page></Page>
      </div>
      <ContactUs />
    </div> 
    </>
  )
}

export default App
