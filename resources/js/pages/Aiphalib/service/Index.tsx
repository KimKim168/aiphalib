import React from 'react'
import AiphalibLayout from '../layout/Layout'
import BreadcrumbContent from '../components/breadcrumb-content'
import MyService from '../components/my-service'

const Index = () => {
  return (
    <AiphalibLayout>
        <BreadcrumbContent title={`Services`}/>
        <MyService/>
    </AiphalibLayout>
  )
}

export default Index
