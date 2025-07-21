import { usePage } from '@inertiajs/react';
import AiphalibLayout from '../layout/Layout';

const Show = () => {
    const { heroSection } = usePage().props;
    const page = heroSection;
    // console.log(page);
    // const page = {
    //     title: 'Welcome to Our Platform',
    //     published_at: '2025-07-18',
    //     featured_image: '/assets/demo-images/newBanner.png',
    //     content: `
    //   <p>Welcome to our platform! We're excited to introduce you to the features and tools that make our services powerful, efficient, and user-friendly.</p>

    //   <h2>What You’ll Learn</h2>
    //   <p>Through this platform, you'll explore key areas of innovation and growth:</p>
    //   <ul>
    //     <li>Modern Web Technologies</li>
    //     <li>Responsive and Accessible Design</li>
    //     <li>Performance Optimization</li>
    //     <li>Security and Data Protection</li>
    //   </ul>

    //   <h2>Getting Started</h2>
    //   <p>To get started, simply create an account and begin exploring. Our platform is built with a focus on <strong>usability</strong> and <em>performance</em>.</p>

    //   <h2>Key Features</h2>
    //   <ol>
    //     <li><strong>Real-time Data</strong> – Always up-to-date content and analytics.</li>
    //     <li><strong>Custom Dashboards</strong> – Tailor your view to your needs.</li>
    //     <li><strong>24/7 Support</strong> – We're here to help anytime you need.</li>
    //   </ol>

    //   <h2>Why Choose Us?</h2>
    //   <p>Our mission is to empower users through technology and education. Whether you're a developer, a business owner, or just curious, this is the right place for you.</p>

    //   <blockquote>
    //     "The best way to predict the future is to invent it." – Alan Kay
    //   </blockquote>

    //   <p>Thank you for being part of our journey.</p>
    // `,
    // };

    return (
        <AiphalibLayout>
            <section className="mx-auto max-w-7xl px-4 md:px-10 xl:px-0 py-10">
                <section className="prose dark:prose-invert max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: page?.long_description }} />
                </section>
            </section>
        </AiphalibLayout>
    );
};

export default Show;
