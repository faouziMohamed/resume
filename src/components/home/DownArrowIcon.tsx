import { Box } from '@mui/material';

import DownArrow from '~/icons/down-arrow.svg';

type DownArrowProps = {
  className?: string;
};

export default function DownArrowIcon({ className = '' }: DownArrowProps) {
  return (
    <Box
      className={`flex w-full items-center justify-center py-4 ${className}`}
    >
      <DownArrow className='animate-bounce-slow text-5xl' />
    </Box>
  );
}
