import { Head } from '@inertiajs/react';
import BreadcrumbContent from '../components/breadcrumb-content';
import ContactSection from '../components/contact-section';
import Modern from '../components/modern';
import AiphalibLayout from '../layout/Layout';

const Index = () => {
    return (
        <AiphalibLayout>
            <Head title={'Support'} />
            <BreadcrumbContent title="Support" />
            <ContactSection />
            <Modern />
        </AiphalibLayout>
    );
};

export default Index;
