import { Box, Box as Section, Typography } from '@mui/material';

import ButtonLink from '@/components/links/ButtonLink';

import AboutMeBlob from '~/icons/about-me-blob.svg';

import SectionTitleWithBlob from './SectionTitleWithBlob';
import SVGBlob from './SVGBlob';

interface AboutMeSectionProps {
  className?: string;
}

export default function AboutMeSection({
  className = '',
}: AboutMeSectionProps) {
  return (
    <Section className={`flex w-full flex-col items-center gap-4 ${className}`}>
      <SectionTitleWithBlob
        title='About Me'
        BlobComponent={() => (
          <SVGBlob Blob={AboutMeBlob} twHeight='h-7' twBottom='-bottom-3' />
        )}
      />
      <Box className='flex flex-col gap-4 text-justify   leading-6 text-black'>
        <Typography variant='body1' className='font-[300] '>
          I am a software engineer/MERN Stack developer with a passion for
          building software that solves problems.
        </Typography>
        <Typography variant='body1' className='font-[300]'>
          I&apos;m interested in the intersection of technology and design, and
          I Love Javascript technologies also I am a DevOps enthusiast. I love
          to learn new things. I have a background in computer science and
          mathematics and I am currently pursuing a Master degree in computer
          science.
        </Typography>
      </Box>
      <Box className='flex w-full items-center justify-center gap-4'>
        <ButtonLink href='/resume' className='text-center' variant='primary'>
          View resume
        </ButtonLink>
        <ButtonLink
          href='/documents/resume-dev.pdf'
          download
          className='text-center'
          variant='ghost'
        >
          Download resume
        </ButtonLink>
      </Box>
    </Section>
  );
}
