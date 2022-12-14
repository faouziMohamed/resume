import { Box, Typography } from '@mui/material';
import { IconType } from 'react-icons';
import { AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai';
import {
  MdEmail,
  MdLanguage,
  MdOutlineLocalPhone,
  MdOutlineLocationOn,
} from 'react-icons/md';

import UnStyledLink from '@/components/links/UnStyledLink';

import type { IUserContactsAndProfileData } from '@/@types/data';

interface IUserInformationProps {
  data: IUserContactsAndProfileData;
}

export default function UserInformation({ data }: IUserInformationProps) {
  const { About, Location } = data;
  const { FirstName, LastName, Profession } = About;
  const { City, Country } = Location;
  const { Tel, Email, Linkedin, Github, Website } = data;

  interface IUserInformation {
    Icon: IconType;
    Title: string;
    Link: string;
    Prefix?: string;
  }

  const userInformation: IUserInformation[] = [
    { ...Tel, Icon: MdOutlineLocalPhone, Prefix: 'tel:' },
    { ...Email, Icon: MdEmail, Prefix: 'mailto:' },
    { ...Linkedin, Icon: AiFillLinkedin },
    { ...Github, Icon: AiOutlineGithub },
    { ...Website, Icon: MdLanguage },
  ];
  return (
    <Box className='flex flex-col items-center justify-center gap-4 text-center  msm:items-start'>
      <Typography variant='h1' className='text-3xl font-bold'>
        {FirstName} {LastName}
      </Typography>
      <Typography variant='h2' className='text-lg'>
        {Profession}
      </Typography>
      <Box className='flex w-full flex-col items-center justify-center msm:items-start'>
        <Box className='flex flex-col gap-1 '>
          <Box className=' flex items-center gap-2 text-sm font-[500]'>
            <MdOutlineLocationOn />
            <Typography>
              {City}, {Country}
            </Typography>
          </Box>
          {userInformation.map((value) => (
            <UnStyledLink
              className={`flex items-center gap-2  px-1 text-xs font-[500] `}
              key={value.Title}
              href={`${value?.Prefix || ''}${value.Link}`}
            >
              <value.Icon />
              <Typography>{value.Title}</Typography>
            </UnStyledLink>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
