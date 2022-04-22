import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import Teams from '../../components/Teams'

export default function MyTeams() {
  return (
    <div>
      <Hero pageName="Our Team" />
      <Teams />
      <Footer />
    </div>
  )
}
