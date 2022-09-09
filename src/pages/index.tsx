import { Box } from '@mui/material';

import Seo from '@/components/Seo';

import type { IUserData } from '@/@types/data';
import Sections from '@/pages/Sections';
import UserAvatar from '@/pages/userAvatar';
import UserInformation from '@/pages/UserInformation';

import userData from './userData.json';

const UserData: IUserData = userData;

export default function HomePage() {
  return (
    <Box className='p-2'>
      <Seo title='Resume' />
      <Box className='bg-gray-800 p-2 text-white'>
        <Box className='flex flex-col items-center gap-4 msm:flex-row-reverse msm:justify-between'>
          <UserAvatar />
          <UserInformation data={UserData} />
        </Box>
        <Box className=''>
          <Sections />
        </Box>
      </Box>
    </Box>
  );
}
