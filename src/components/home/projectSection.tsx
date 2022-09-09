import { Box, IconButton, Typography } from '@mui/material';
import { TbExternalLink } from 'react-icons/tb';

import UnStyledLink from '@/components/links/UnStyledLink';

import { IProjectDetail } from '@/@types/resume.types';

interface IProjectSectionProps {
  project: IProjectDetail;
}

export default function ProjectSection({ project }: IProjectSectionProps) {
  return (
    <Box>
      <Box className='flex flex-wrap items-center gap-1'>
        <Typography variant='h4' className='inline text-sm font-bold'>
          {project.Name} {project.Summary && ', '}
        </Typography>
        <Typography variant='body2' className='inline text-sm'>
          {project.Summary}
        </Typography>
        {project.Link && (
          <UnStyledLink href={project.Link}>
            <IconButton size='small'>
              <TbExternalLink />
            </IconButton>
          </UnStyledLink>
        )}
      </Box>
      <Typography variant='body2' className='text-sm'>
        {project.StartDate} {' - '}{' '}
        {project.EndDate !== '-1' ? project.EndDate : 'Present'}
      </Typography>
      <Typography variant='h5' className='text-sm '>
        {project.Description}
      </Typography>
      <Typography variant='body2' className='text-sm'>
        <span className='font-bold'>Technologies used: </span>
        {project.Technologies.join(' | ')}
      </Typography>
    </Box>
  );
}
