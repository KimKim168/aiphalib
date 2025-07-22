import React from 'react'
import AiphalibLayout from '../layout/Layout'
import BreadcrumbContent from '../components/breadcrumb-content'
import MyService from '../components/my-service'
import { Head } from '@inertiajs/react'

const Index = () => {
  return (
    <AiphalibLayout>
        <Head title={('Services')} />
        <BreadcrumbContent title={`Services`}/>
        <MyService/>
    </AiphalibLayout>
  )
}

export default Index
