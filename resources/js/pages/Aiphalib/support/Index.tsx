import React from 'react'
import AiphalibLayout from '../layout/Layout'
import BreadcrumbContent from '../components/breadcrumb-content'
import ContactSection from '../components/contact-section'
import Modern from '../components/modern'

const Index = () => {
  return (
    <AiphalibLayout>
        <BreadcrumbContent title='Support'/>
        <ContactSection/>
        <Modern/>
    </AiphalibLayout>
  )
}

export default Index
