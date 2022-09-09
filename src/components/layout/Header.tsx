import {
  Box,
  ClickAwayListener,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { GoMarkGithub } from 'react-icons/go';
import {
  MdClose,
  MdDoneAll,
  MdExpandLess,
  MdExpandMore,
  MdHome,
  MdMarkunreadMailbox,
  MdMenu,
  MdNightlightRound,
  MdPermContactCalendar,
  MdPersonPin,
  MdWbSunny,
} from 'react-icons/md';

import UnstyledLink from '@/components/links/UnstyledLink';

import HeaderLineBlob from '~/icons/header-line-blob.svg';

const navLinks = [
  {
    name: 'Home',
    href: '/#',
    Icon: MdHome,
  },
  {
    name: 'About',
    href: '/#about',
    Icon: MdPersonPin,
  },
  {
    name: 'Projects',
    href: '/#projects',
    Icon: MdMarkunreadMailbox,
  },
  {
    name: 'Contacts',
    href: '/#contacts',
    Icon: MdPermContactCalendar,
  },
];
const otherLinks = [
  {
    name: 'Skills',
    href: '/#skills',
    Icon: MdDoneAll,
  },
  {
    name: 'Github',
    href: 'https://github.com/faouziMohamed',
    Icon: GoMarkGithub,
  },
];
export default function Header() {
  const isMediumSmallScreen = useMediaQuery('(min-width: 693px)'); // sm

  return (
    <nav className='relative flex w-full flex-col px-4'>
      <Stack className='flex w-full flex-row items-center justify-between gap-1.5'>
        {isMediumSmallScreen && (
          <UnstyledLink href='/'>
            <SiteLogo />
          </UnstyledLink>
        )}
        <NavigationMenu />
      </Stack>
      <Box className='absolute inset-0 -top-1 -z-10 w-full'>
        <Image
          src='/icons/header-blob.svg'
          alt='Header background blob'
          priority
          width='100'
          height='31'
          className='w-full object-cover'
          layout='responsive'
        />
      </Box>
    </nav>
  );
}
function NavigationMenu() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const handleToggleTheme = () => setIsDarkMode((prev) => !prev);
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const handleToogleMenu = () => setMenuOpened((prev) => !prev);
  const isMediumSmallScreen = useMediaQuery('(min-width: 693px)'); // sm
  return (
    <Box className='absolute inset-0 z-30 h-fit w-full select-none bg-primary-50 p-0 msm:relative msm:flex msm:w-fit msm:grow msm:flex-row-reverse msm:justify-start msm:bg-transparent'>
      <Box
        component='div'
        className='flex w-full items-center justify-between bg-primary-200 py-1 px-2 msm:w-fit msm:justify-end msm:bg-transparent'
      >
        <IconButton
          size='medium'
          className='text-[#001344] msm:hidden'
          onClick={handleToogleMenu}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleToogleMenu();
          }}
          onKeyUp={(e) => {
            if (e.key === 'Escape') setMenuOpened(false);
          }}
        >
          {menuOpened ? (
            <MdClose fontSize='2rem' className='msm:text-sm' />
          ) : (
            <MdMenu fontSize='2rem' className='msm:text-sm' />
          )}
        </IconButton>
        {!isMediumSmallScreen && (
          <UnstyledLink href='/'>
            <SiteLogo />
          </UnstyledLink>
        )}
        <IconButton size='small' onClick={handleToggleTheme}>
          {isDarkMode ? (
            <MdWbSunny fontSize='1.9rem' className='text-white' tabIndex={0} />
          ) : (
            <MdNightlightRound
              className='text-[#001344]'
              fontSize='1.9rem'
              tabIndex={0}
            />
          )}
        </IconButton>
      </Box>
      {/* Navigation menu */}
      <NavigationLinks
        isMediumSmallScreen={isMediumSmallScreen}
        isMenuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
    </Box>
  );
}

function NavigationLinks({
  isMediumSmallScreen,
  isMenuOpened,
  setMenuOpened,
}: {
  isMediumSmallScreen: boolean;
  isMenuOpened: boolean;
  setMenuOpened: (prev: boolean) => void;
}) {
  const [subMenuOpened, setSubMenuopened] = useState<boolean>(false);
  const handleClick = () => setSubMenuopened((prev) => !prev);
  const handleClickAway = () => setSubMenuopened(false);

  return (
    <Box
      className={`flex-col items-start msm:flex-row ${
        (!isMediumSmallScreen && (isMenuOpened ? 'flex' : 'hidden')) || 'flex'
      }`}
    >
      {navLinks.map(({ name, href, Icon }) => (
        <Box className='m-0 w-full' key={name}>
          <UnstyledLink
            href={href}
            tabIndex={0}
            className='flex w-full items-center justify-start gap-1 border-b border-slate-300 p-2 py-4 px-2 font-primary text-[1rem] font-[700] hover:bg-primary-100 focus:bg-primary-100 msm:border-none'
          >
            <Icon />
            <span>{name}</span>
          </UnstyledLink>
        </Box>
      ))}

      <ClickAwayListener
        mouseEvent='onMouseDown'
        touchEvent='onTouchStart'
        onClickAway={handleClickAway}
      >
        <Stack
          className={`relative flex w-full cursor-pointer items-start 
            gap-0 border-b border-slate-300 hover:bg-primary-100 focus:bg-primary-100 msm:border-none `}
          spacing={0}
          tabIndex={0}
          onKeyUp={(e) => {
            if (e.key === 'Escape') {
              setMenuOpened(false);
              setSubMenuopened(false);
            }
          }}
          onClick={handleClick}
          onKeyDown={(e) => {
            // when enter is pressed, open the menu
            if (e.key === 'Enter') handleClick();
          }}
        >
          <Box
            className={`flex items-center justify-center gap-1 
              px-2 py-4 font-primary text-[1rem] font-[700] `}
          >
            <p>Others</p>
            {subMenuOpened ? (
              <MdExpandLess className='font-[700]' />
            ) : (
              <MdExpandMore className='font-[700]' />
            )}
          </Box>
          {subMenuOpened && (
            <Box className='absolute top-[calc(100%+1px)] z-10 m-0 flex w-full flex-col gap-1.5 border bg-primary-100 p-0'>
              {otherLinks.map(({ name, href, Icon }) => (
                <UnstyledLink
                  key={name}
                  href={href}
                  className='flex items-center gap-2 p-2 font-primary text-[.88rem] font-[700] hover:bg-primary-200'
                >
                  <Icon />
                  <span>{name}</span>
                </UnstyledLink>
              ))}
            </Box>
          )}
        </Stack>
      </ClickAwayListener>
    </Box>
  );
}

function SiteLogo() {
  return (
    <Box className=' text-#000000 relative flex w-fit grow flex-col gap-1 pl-2'>
      <Typography
        variant='h1'
        className='font-primary text-[1.17rem] font-bold'
      >
        Faouzi Mohamed
      </Typography>
      <Box className='absolute inset-0 top-[90%] z-10 pl-2'>
        <HeaderLineBlob className='absolute h-4 w-full object-cover' />
      </Box>
    </Box>
  );
}
