import { Link } from '@inertiajs/react';
import { ReactNode } from 'react';
import MyNewHeader from '../components/my-new-header';
import MyFooter from '../components/my-footer';

const AiphalibLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <MyNewHeader/>
            <main className="mfont-poppins-regular mx-auto min-h-[100vh]">{children}</main>
            <MyFooter/>
        </>
    );
};

export default AiphalibLayout;
