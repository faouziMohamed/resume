import { Box, Typography } from '@mui/material';
import { IconType } from 'react-icons';

interface ISectionTitle {
  title: string;
  Icon: IconType;
}

export default function SectionTitle({ title, Icon }: ISectionTitle) {
  return (
    <Box className='flex items-center gap-2 border-b-[3px] border-b text-3xl'>
      <Icon />
      <Typography variant='h3' className='font-[Roboto] text-3xl font-bold'>
        {title}
      </Typography>
    </Box>
  );
}
