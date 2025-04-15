import React from 'react'
import Hero from './page/Hero'
import Features from './page/Features'
import Owners from './page/Owner'
import ClientReviewSlider from './page/ClientReviewSlider'
import LetsTalk from './page/LetsTalk'

export const Home = () => {
  return (
    <div>
        <Hero />
        <Features />
        <Owners />
        <ClientReviewSlider />
        <LetsTalk />
    </div>
  )
}