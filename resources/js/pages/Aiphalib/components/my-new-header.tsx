import { usePage } from '@inertiajs/react';
import MyMenu from './my-menu';
import Switch from './my-switch';

const MyNewHeader = () => {
    const { application_info } = usePage().props;
    return (
            <div className="bg-white backdrop-blur-md dark:bg-black/80 border-b sticky top-0 z-50">
                <div className="mx-auto flex max-w-screen-2xl items-center gap-2 px-3 py-2 sm:px-10 xl:px-20">
                    <a href="/" className="flex flex-1 items-center gap-2 text-center text-base text-white md:text-xl lg:text-xl">
                        <img
                            src={`/assets/images/application_info/thumb/${application_info?.image}`}
                            alt="logo"
                            className="aspect-square w-14 md:aspect-square md:w-20 object-cover"
                        />
                    </a>
                    <div className='flex gap-6 items-center'>
                        <MyMenu />
                        <Switch/>
                    </div>
                </div>
            </div>
    );
};

export default MyNewHeader;
