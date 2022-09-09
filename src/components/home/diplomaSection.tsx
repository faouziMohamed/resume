import { Box, Typography } from '@mui/material';

import { IDiploma } from '@/@types/resume.types';

export default function DiplomaSection({ diploma }: { diploma: IDiploma }) {
  return (
    <Box className=''>
      <Box className=''>
        <Typography variant='h4' className='inline text-sm font-bold'>
          {diploma.Title}
          {', '}
        </Typography>
        <Typography variant='body2' className='inline text-sm'>
          {diploma.Institution}
        </Typography>
      </Box>
      <Typography variant='body2' className='text-sm'>
        {diploma.Date} {' | '} {diploma.city}, {diploma.Country}
      </Typography>
    </Box>
  );
}
