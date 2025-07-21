import { usePage } from '@inertiajs/react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
    const { headingContact, application_info } = usePage().props;
    const { locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-siemreap-regular' : '';
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className={`text-primary mb-2 text-center text-base font-bold ${fontClass}`}>
                    {locale === 'kh' ? (headingContact?.title_kh ?? headingContact?.title) : headingContact?.title}
                </h2>
                <p className={`mb-10 text-center text-xl font-bold text-gray-700 sm:text-3xl dark:text-gray-200 ${fontClass}`}>
                    {locale === 'kh'
                        ? (headingContact?.short_description_kh ?? headingContact?.short_description)
                        : headingContact?.short_description}
                </p>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3">
                {/* Email */}
                <div className="flex items-center gap-4 rounded-xl bg-gray-100 p-6 shadow-sm">
                    <div className="rounded-full bg-teal-700 p-4 text-white">
                        <Mail className="h-8 w-8" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-900">Our Email</h4>
                        <p className="text-gray-600">{application_info?.email}</p>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 rounded-xl bg-gray-100 p-6 shadow-sm">
                    <div className="rounded-full bg-teal-700 p-4 text-white">
                        <Phone className="h-8 w-8" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">{application_info?.phone}</p>
                    </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4 rounded-xl bg-gray-100 p-6 shadow-sm">
                    <div className="rounded-full bg-teal-700 p-4 text-white">
                        <MapPin className="h-8 w-8" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-900">Address</h4>
                        <p className="text-gray-600">{application_info?.address}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
