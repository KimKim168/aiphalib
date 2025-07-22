import React from 'react'
import AiphalibLayout from '../layout/Layout'
import BreadcrumbContent from '../components/breadcrumb-content'
import MyBlog from '../components/my-blog'

const Index = () => {
  return (
     <AiphalibLayout>
        <BreadcrumbContent title={`blogs`}/>
        <MyBlog/>
    </AiphalibLayout>
  )
}

export default Index
