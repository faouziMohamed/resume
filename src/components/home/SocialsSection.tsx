import { Box, Box as Section } from '@mui/material';

import LayerIntro from '@/components/home/LayerIntro';
import UnstyledLink from '@/components/links/UnstyledLink';

import { DevDataTypes, SVGImageData } from '@/@types/data';

import FindMeOnSocialsBlob from '~/icons/findme-on-socials-blob.svg';
import FacebookIcon from '~/icons/logo_facebook.svg';
import GithubIcon from '~/icons/logo_github.svg';
import LinkedinIcon from '~/icons/logo_linkedin.svg';
import TwitterIcon from '~/icons/logo_twitter_bird.svg';

const socialIcons: { [key: string]: SVGImageData } = {
  facebook: FacebookIcon,
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
};

interface SocialSectionProps {
  data: DevDataTypes;
  className?: string;
}

export default function SocialsSection({
  data,
  className = '',
}: SocialSectionProps) {
  return (
    <Section
      className={`relative flex flex-col items-center justify-center gap-6 ${className}`}
    >
      <LayerIntro message='Find me on socials' BlobComponent={SocialBlob} />
      <Box className='flex gap-4'>
        {Object.keys(data.socials).map(
          (key) =>
            socialIcons[key] && (
              <SocialIconLink
                key={key}
                // @ts-expect-error: title is not a string
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                href={data.socials[key].url}
                IconComponent={socialIcons[key]}
              />
            ),
        )}
      </Box>
    </Section>
  );
}

function SocialBlob() {
  return (
    <Box className='relative -mt-1 w-full'>
      <FindMeOnSocialsBlob className='absolute h-5 w-full object-cover' />
    </Box>
  );
}

function SocialIconLink({
  IconComponent,
  href,
}: {
  IconComponent: SVGImageData;
  href: string;
}) {
  return (
    <UnstyledLink href={href}>
      <Box className='flex h-10 w-10 items-center justify-center'>
        <IconComponent className='h-full w-full object-cover' />
      </Box>
    </UnstyledLink>
  );
}
