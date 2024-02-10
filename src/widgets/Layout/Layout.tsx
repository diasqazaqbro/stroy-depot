import React, { ReactNode } from 'react'

interface ILayout {
  children: ReactNode
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <main></main>
  )
}

export default Layout