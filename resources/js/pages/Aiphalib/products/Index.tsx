import React from 'react'
import AiphalibLayout from '../layout/Layout'
import BreadcrumbContent from '../components/breadcrumb-content'
import OurProduct from '../components/our-product'
import { Head } from '@inertiajs/react'

const Index = () => {
  return (
    <AiphalibLayout>
        <Head title={('Products')} />
        <BreadcrumbContent title='Products'/>
        <OurProduct/>
    </AiphalibLayout>
  )
}

export default Index
