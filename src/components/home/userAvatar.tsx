import { Box } from '@mui/material';

import NextImage from '@/components/NextImage';

import userProfileAvatar from '~/images/devPicture.jpeg';

export default function UserAvatar() {
  return (
    <Box
      className='shrink-none relative flex h-[15rem] w-[15rem]
    items-center justify-center rounded-full msm:h-[18rem] msm:w-[18rem]'
    >
      <NextImage
        imgClassName='h-full w-full rounded-full object-cover'
        alt='developer picture'
        src={userProfileAvatar}
        layout='fill'
      />
    </Box>
  );
}
