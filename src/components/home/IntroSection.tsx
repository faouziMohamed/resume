import {
  Box,
  Box as Intro,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';

import LayerIntro from '@/components/home/LayerIntro';

import type { DevDataTypes } from '@/@types/data';

import devPicture from '~/images/faouzi-mhd.jpeg';

type IntroSectionProps = {
  data: DevDataTypes;
  className?: string;
};
export default function IntroSection({
  data,
  className = '',
}: IntroSectionProps) {
  const matches = useMediaQuery('(min-width:768px)'); // md
  return (
    <Intro
      id='about'
      component='section'
      className={`flex flex-col gap-6 ${className}`}
    >
      <Stack className='items-center'>
        <Box
          className={`
             avatar-shadow avatar-border relative h-[13rem] w-[13rem]
             animate-bounce-low items-center justify-center gap-2 rounded-full 
            `}
        >
          <Image
            src={devPicture}
            alt='Header background blob'
            layout='responsive'
            width='208'
            height='208'
            className='h-full w-full rounded-full object-cover'
          />
        </Box>
        <Stack className='w-full items-center text-center'>
          <LayerIntro message='Hi There!' showLines={!matches} />
          <Typography
            variant='h2'
            className='font-primary text-[1.88rem] font-[700] leading-snug'
          >
            I&apos;m {data.fullName || 'Faouzi Mohamed'}
          </Typography>
          <Typography
            variant='subtitle1'
            component='p'
            className='font-primary text-base font-[300] leading-normal text-black'
          >
            {data.skils.join(' | ')}
          </Typography>
        </Stack>
      </Stack>
    </Intro>
  );
}
