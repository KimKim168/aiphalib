import React from 'react'
import AiphalibLayout from '../layout/Layout'
import { MyNewSlide } from '@/pages/westernUniversityNew/components/my-slide'
import MyHero from '../components/my-hero'
import MyService from '../components/my-service-home'
import OurPartner from '../components/our-partner'
import OurBlog from '../components/our-blog'

const Index = () => {
  return (
    <AiphalibLayout>
        <MyNewSlide/>
        <MyHero/>
        <MyService/>
        <OurPartner/>
        <OurBlog/>
    </AiphalibLayout>
  )
}

export default Index
