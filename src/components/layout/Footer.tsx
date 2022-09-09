import { Box, Box as FooterSection, Stack, Typography } from '@mui/material';

import devData from '@/data/dev-data.json';

import { DevDataTypes, SVGImageData } from '@/@types/data';

import Facebook from '~/icons/facebook.svg';
import Github from '~/icons/github.svg';
import Instagram from '~/icons/instagram.svg';
import Linkedin from '~/icons/linkedin.svg';
import Materialui from '~/icons/material-ui.svg';
import MongoDb from '~/icons/mongodb.svg';
import NextJs from '~/icons/nextjs.svg';
import Twitter from '~/icons/twitter.svg';
import TYpescript from '~/icons/typescript.svg';

import UnstyledLink from '../links/UnstyledLink';

const socialData: DevDataTypes = devData;
const usedTech: readonly { name: string; Icon: SVGImageData }[] = [
  { name: 'NextJs', Icon: NextJs },
  { name: 'TYpescript', Icon: TYpescript },
  { name: 'Materialui', Icon: Materialui },
  { name: 'MongoDb', Icon: MongoDb },
];
interface ISocialStacks {
  name: string;
  Icon: SVGImageData;
  link: string;
}

const SocialsStack: readonly ISocialStacks[] = [
  {
    name: 'Linkedin',
    Icon: Linkedin,
    link: socialData.socials.linkedin.url,
  },
  {
    name: 'Github',
    Icon: Github,
    link: socialData.socials.github.url,
  },
  {
    name: 'Twitter',
    Icon: Twitter,
    link: socialData.socials.twitter.url,
  },
  {
    name: 'Instagram',
    Icon: Instagram,
    link: socialData.socials.instagram.url,
  },
  {
    name: 'Facebook',
    Icon: Facebook,
    link: socialData.socials.facebook.url,
  },
];

export default function Footer() {
  return (
    <FooterSection className='w-full bg-primary-100 px-2 pt-8 pb-4'>
      <Stack className='flex items-center gap-4'>
        <Typography className='text-lg font-[500] leading-3' component='h3'>
          Faouzi Mohamed - {new Date().getFullYear()}
        </Typography>
        <Stack className='flex-row gap-4'>
          <Typography className='font-primary font-[300]'>
            Built with:
          </Typography>
          <Stack className='flex flex-row gap-2'>
            {usedTech.map(({ Icon, name }, index) => (
              <Box
                key={name}
                className='flex items-center justify-center gap-2'
              >
                <Icon className='h-5 w-5' />
                {index + 1 < usedTech.length && <span>/</span>}
              </Box>
            ))}
          </Stack>
        </Stack>
        <Stack className='flex-row gap-4'>
          {SocialsStack.map(({ Icon, name, link }) => (
            <UnstyledLink key={name} href={link}>
              <Icon className='h-5 w-5' />
            </UnstyledLink>
          ))}
        </Stack>
      </Stack>
    </FooterSection>
  );
}
