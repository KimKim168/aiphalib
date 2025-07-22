import { Head } from '@inertiajs/react';
import BreadcrumbContent from '../components/breadcrumb-content';
import MyBlog from '../components/my-blog';
import AiphalibLayout from '../layout/Layout';

const Index = () => {
    return (
        <AiphalibLayout>
            <Head title={'Blogs'} />
            <BreadcrumbContent title={`blogs`} />
            <MyBlog />
        </AiphalibLayout>
    );
};

export default Index;
