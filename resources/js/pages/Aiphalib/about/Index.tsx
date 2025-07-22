
import { Head } from '@inertiajs/react';
import BreadcrumbContent from '../components/breadcrumb-content';
import MyHero from '../components/my-hero';
import AiphalibLayout from '../layout/Layout';

const Index = () => {
  return (
    <AiphalibLayout>
        <Head title={('About Us')} />
        <BreadcrumbContent title={'About'}/>
        <MyHero/>
    </AiphalibLayout>
  );
};

export default Index;
