import React, { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Contacts } from '../LayoutMain/OurContacts/ui/Contacts'

interface ILayout {
  children: ReactNode
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
        <main className='main'>
          {children}
          <Contacts />
        </main>
      <Footer />
    </>
  )
}
