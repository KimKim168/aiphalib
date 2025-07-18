import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

type BreadcrumbContentProps = {
  title: string;
};

const BreadcrumbContent: React.FC<BreadcrumbContentProps> = ({ title }) => {
  return (
    <div className="relative flex h-40 w-full items-center justify-center overflow-hidden lg:h-60">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/demo-images/newBanner.png"
          alt="Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#06473d] opacity-70" />
      </div>

      {/* Content over image */}
      <div className="relative z-10 text-center text-white">
        {/* Title */}
        <h1 className="mb-2 text-3xl font-bold">{title}</h1>
        <div className="mx-auto mb-1 h-[1px] w-16 bg-white" />
        <div className="mx-auto mb-2 h-[1px] w-26 bg-white" />

        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList className="flex items-center justify-center text-sm text-white">
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="hover:underline">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <span className="mx-2">//</span>
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/${title.toLowerCase()}`}
                className="hover:underline"
              >
                {title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
};

export default BreadcrumbContent;
