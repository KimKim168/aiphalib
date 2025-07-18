import { usePage } from '@inertiajs/react';
import MyMenu from './my-menu';
import ToggleModeSwitch from '@/components/toggle-mode-switch';

const MyNewHeader = () => {
    const { application_info } = usePage().props;
    return (
        <div>
            {/* nav and slide */}
            <div className="bg-white dark:bg-black">
                <div className="mx-auto flex max-w-screen-2xl items-center gap-2 px-3 py-2 sm:px-10 xl:px-20">
                    <a href="/" className="flex flex-1 items-center gap-2 text-center text-base text-white md:text-xl lg:text-xl">
                        <img
                            src={`/assets/images/application_info/thumb/${application_info?.image}`}
                            alt="logo"
                            className="h-14 w-14 md:h-20 md:w-20"
                        />
                        {/* <p className="font-siemreap-regular text-lg font-semibold xl:text-xl">
                            {application_info?.name_kh}
                            <br />
                            <span className="font-normal">{application_info?.name}</span>
                        </p> */}
                    </a>
                    <div className='flex gap-6'>
                        <MyMenu />
                        <ToggleModeSwitch/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyNewHeader;
