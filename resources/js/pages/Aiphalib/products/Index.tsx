import React from 'react'
import AiphalibLayout from '../layout/Layout'
import BreadcrumbContent from '../components/breadcrumb-content'
import OurProduct from '../components/our-product'

const Index = () => {
  return (
    <AiphalibLayout>
        <BreadcrumbContent title='Products'/>
        <OurProduct/>
    </AiphalibLayout>
  )
}

export default Index
