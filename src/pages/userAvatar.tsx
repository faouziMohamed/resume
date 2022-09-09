import { Box } from '@mui/material';
import Image from 'next/image';

import devImg from '~/images/faouzi-mhd.jpeg';

export default function UserAvatar() {
  return (
    <Box className='shrink-none relative flex h-[18rem] w-[18rem] items-center justify-center'>
      <Image
        className='h-full w-full rounded-full object-cover'
        alt='developer picture'
        src={devImg}
      />
    </Box>
  );
}
