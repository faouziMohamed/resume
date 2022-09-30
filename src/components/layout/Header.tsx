import {
  Box,
  ClickAwayListener,
  IconButton,
  Stack,
  useMediaQuery,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { IconType } from 'react-icons/lib';
import {
  MdClose,
  MdExpandLess,
  MdExpandMore,
  MdHome,
  MdMenu,
  MdNightlightRound,
  MdPersonPin,
  MdWbSunny,
} from 'react-icons/md';

import UnStyledLink from '@/components/links/UnStyledLink';
import NextImage from '@/components/NextImage';

import { useNextTheme } from '@/themes/themeContext';

interface INavLinks {
  name: string;
  href: string;
  Icon: IconType;
}

const navLinks: INavLinks[] = [
  {
    name: 'Home',
    href: '/#',
    Icon: MdHome,
  },
  {
    name: 'About',
    href: '/about',
    Icon: MdPersonPin,
  },
];
const otherLinks = [
  {
    name: 'Github',
    href: 'https://github.com/faouziMohamed',
    Icon: GoMarkGithub,
  },
];

export default function Header() {
  const { theme: themeName } = useNextTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <nav className='relative flex w-full flex-col px-4 text-dark '>
      <Stack
        className={`flex w-full flex-row items-center justify-between gap-1.5 
        sm:absolute sm:inset-0 sm:top-6 sm:bg-blue-200 sm:text-white`}
      >
        <NavigationMenu />
      </Stack>
      <Box className='absolute inset-0 -top-1 -z-10 w-full '>
        <NextImage
          src={`/icons/header-blob-${themeName!}.svg`}
          alt='Header background blob'
          priority
          width='100'
          height='31'
          className='relative w-full object-cover'
          layout='responsive'
        />
      </Box>
    </nav>
  );
}

function NavigationMenu() {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  const isSM = useSMallScreen(); // sm
  const position = isSM ? 'relative' : 'absolute';
  return (
    <Box
      className={`${position} bg-grays-800 inset-0 z-30 h-fit w-full select-none bg-transparent p-0 text-white 
      sm:flex sm:w-fit sm:grow sm:flex-row-reverse sm:justify-start`}
    >
      <Box
        component='div'
        className='flex w-full items-center justify-between py-1 px-2 sm:w-fit sm:justify-end'
      >
        <MenuToggleButtons
          setMenuOpened={setMenuOpened}
          menuOpened={menuOpened}
        />
        <ThemeToggleButton />
      </Box>
      {/* Navigation menu */}
      <NavigationLinks menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
    </Box>
  );
}

function useSMallScreen() {
  return useMediaQuery('(min-width: 640px)');
}

function ThemeToggleButton() {
  const { theme: themeName, updateTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <IconButton
      size='small'
      onClick={updateTheme}
      className='text-cyan-200 dark:text-yellow-400 sm:text-cyan-800'
    >
      {themeName === 'dark' ? (
        <MdWbSunny fontSize='1.9rem' tabIndex={0} />
      ) : (
        <MdNightlightRound fontSize='1.9rem' tabIndex={0} />
      )}
    </IconButton>
  );
}

function MenuToggleButtons(props: {
  setMenuOpened: (value: boolean) => void;
  menuOpened: boolean;
}) {
  const { setMenuOpened, menuOpened } = props;
  const handleToggleMenu = () => setMenuOpened(!menuOpened);
  return (
    <IconButton
      size='medium'
      className='text-white sm:hidden'
      onClick={handleToggleMenu}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter') handleToggleMenu();
      }}
      onKeyUp={(e) => {
        if (e.key === 'Escape') setMenuOpened(false);
      }}
    >
      {menuOpened ? (
        <MdClose fontSize='2rem' className='sm:text-sm' />
      ) : (
        <MdMenu fontSize='2rem' className='sm:text-sm' />
      )}
    </IconButton>
  );
}

function NavigationLinks(props: {
  menuOpened: boolean;
  setMenuOpened: (prev: boolean) => void;
}) {
  const { menuOpened, setMenuOpened } = props;
  const [subMenuOpened, setSubMenuOpened] = useState<boolean>(false);
  const handleClick = () => setSubMenuOpened((prev) => !prev);
  const handleClickAway = () => setSubMenuOpened(false);
  let display = 'hidden'; // with mobile first approach we hide the menu until opened
  const isSm = useSMallScreen(); // sm
  // if opened and not small screen
  if (menuOpened && !isSm) {
    display = 'flex';
  }
  return (
    <Box
      className={`${display} flex flex-col items-start bg-gray-800 sm:flex sm:flex-row
       sm:bg-transparent  `}
    >
      {navLinks.map(({ name, href, Icon }) => {
        // var colorInLightMode=c
        return (
          <Box className='m-0 w-full' key={name}>
            <UnStyledLink
              href={href}
              tabIndex={0}
              className={`flex w-full items-center justify-start gap-1 border-b border-slate-300 p-2 
                py-4 px-2 font-primary text-[1rem] font-[700] hover:bg-gray-900 hover:text-gray-100 
                focus:bg-gray-900 sm:rounded-2xl sm:border-none sm:text-gray-700 sm:hover:bg-primary-700
                 sm:hover:bg-opacity-5 sm:hover:text-gray-900 sm:focus:bg-opacity-5 dark:sm:text-gray-100 dark:sm:hover:bg-gray-900 dark:sm:focus:bg-gray-900`}
            >
              <Icon />
              <span>{name}</span>
            </UnStyledLink>
          </Box>
        );
      })}

      <ClickAwayListener
        mouseEvent='onMouseDown'
        touchEvent='onTouchStart'
        onClickAway={handleClickAway}
      >
        <Stack
          className={`relative flex w-full cursor-pointer items-start gap-0
            border-slate-300 text-gray-100 hover:border-b hover:bg-gray-900 hover:text-gray-100 
            focus:bg-gray-900 focus:text-gray-100 sm:rounded-2xl sm:border-none sm:text-gray-700 
            sm:hover:bg-primary-700 sm:hover:bg-opacity-5 sm:hover:text-gray-900 sm:focus:bg-opacity-5 sm:focus:text-gray-900 dark:sm:text-gray-100 dark:sm:hover:bg-gray-900 dark:sm:focus:bg-gray-900`}
          spacing={0}
          tabIndex={0}
          onKeyUp={(e) => {
            if (e.key === 'Escape') {
              setMenuOpened(false);
              setSubMenuOpened(false);
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
              px-2 py-4 font-primary text-[1rem] font-[700]`}
          >
            <p>Others</p>
            {subMenuOpened ? (
              <MdExpandLess className='font-[700]' />
            ) : (
              <MdExpandMore className='font-[700]' />
            )}
          </Box>
          {subMenuOpened && (
            <Box
              className={`absolute top-[calc(100%+1px)] z-10 m-0 flex w-full flex-col gap-1.5
              border-b border-b-gray-400 bg-gray-700 p-0 text-gray-100 sm:border-none sm:bg-transparent 
              sm:text-gray-800 sm:hover:bg-primary-700 sm:hover:bg-opacity-5 sm:hover:text-gray-900`}
            >
              {otherLinks.map(({ name, href, Icon }) => (
                <UnStyledLink
                  key={name}
                  href={href}
                  className={`flex items-center gap-2 p-2 font-primary text-[.88rem] font-[700] hover:bg-gray-800
                    sm:rounded-2xl sm:hover:bg-primary-700 sm:hover:bg-opacity-5 sm:hover:text-gray-900 dark:sm:text-gray-100 dark:sm:hover:bg-gray-900 `}
                >
                  <Icon />
                  <span>{name}</span>
                </UnStyledLink>
              ))}
            </Box>
          )}
        </Stack>
      </ClickAwayListener>
    </Box>
  );
}
