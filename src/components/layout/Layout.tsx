import {
  Box as AlertBanner,
  Box as MainContainer,
  Box as SiteContent,
  Stack,
  Typography,
} from '@mui/material';
import { ReactNode } from 'react';
import { RiMagicFill } from 'react-icons/ri';

import Header from './Header';

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

export default function Layout({ children, className = '' }: LayoutProps) {
  const isBuilding = process.env.NEXT_PUBLIC_ISBUILDING === 'true';
  return (
    <MainContainer className='relative z-50 flex w-full flex-col p-0  dark:bg-dark dark:text-gray-100 '>
      {isBuilding && <UnderConstructionBanner />}
      <SiteContent className={`p-0 ${className}`}>
        <Header />
        {children}
        {/* <Footer /> */}
      </SiteContent>
    </MainContainer>
  );
}

function UnderConstructionBanner() {
  return (
    <AlertBanner className='z-10 flex w-full items-center justify-center bg-primary-100 py-1 dark:bg-gray-900'>
      <Stack className='flex-row items-center gap-2 text-primary-600'>
        <RiMagicFill className='animate-bounce fill-orange-500' />
        <Typography className='font-primary font-[400]'>
          Web site under construction
        </Typography>
      </Stack>
    </AlertBanner>
  );
}
