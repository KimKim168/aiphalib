import { Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-primary-two mb-2 text-center text-base font-bold">Get In Touch</h2>
                <p className="mb-10 text-center text-2xl font-bold text-gray-700 sm:text-3xl dark:text-gray-200">
                    Let’s Discuss Your Business Needs
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
                        <p className="text-gray-600">example@gmail.com</p>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 rounded-xl bg-gray-100 p-6 shadow-sm">
                    <div className="rounded-full bg-teal-700 p-4 text-white">
                        <Phone className="h-8 w-8" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">+1 123 456 7890</p>
                    </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4 rounded-xl bg-gray-100 p-6 shadow-sm">
                    <div className="rounded-full bg-teal-700 p-4 text-white">
                        <MapPin className="h-8 w-8" />
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-gray-900">Address</h4>
                        <p className="text-gray-600">789 Discovery, New York</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
