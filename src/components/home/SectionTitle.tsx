import { Box, Typography } from '@mui/material';
import { IconType } from 'react-icons';

interface ISectionTitle {
  title: string;
  Icon: IconType;
  className?: string;
}

export default function SectionTitle({
  title,
  Icon,
  className = '',
}: ISectionTitle) {
  return (
    <Box
      className={`flex items-center gap-2 border-b-[3px] border-b text-2xl ${className}`}
    >
      <Icon />
      <Typography variant='h3' className='font-[Roboto] text-2xl font-bold'>
        {title}
      </Typography>
    </Box>
  );
}
