import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { BsCircleSquare } from 'react-icons/bs';
import { TbExternalLink } from 'react-icons/tb';

import UnStyledLink from '@/components/links/UnStyledLink';

import { IExperience } from '@/@types/resume.types';

interface IExperienceSectionProps {
  experience: IExperience;
}

export default function ExperienceSection(props: IExperienceSectionProps) {
  const { experience } = props;
  return (
    <Box>
      <Box className='flex flex-wrap items-center gap-1'>
        <Typography variant='h4' className='inline text-sm font-bold'>
          {' '}
          {experience.Title} {', '}{' '}
        </Typography>
        <Typography variant='body2' className='inline text-sm'>
          {' '}
          {experience.Company}{' '}
        </Typography>
        {experience.CompanyLink && (
          <UnStyledLink href={experience.CompanyLink}>
            <IconButton size='small'>
              <TbExternalLink />
            </IconButton>
          </UnStyledLink>
        )}
      </Box>
      <Typography variant='body2' className='text-sm'>
        {experience.Date} {' | '} {experience.city}
        {', '}
        {experience.Country}
      </Typography>
      <Typography variant='h5' className='text-sm font-bold'>
        {experience.Description.Title}
      </Typography>
      <List className='list-disc'>
        {experience.Description.Tasks.map((task) => (
          <ListItem
            key={task}
            className='flex items-baseline gap-2 py-0 text-sm'
          >
            <span className='shrink-0'>
              <BsCircleSquare size={12} />
            </span>
            <ListItemText className='text-sm'>{task}</ListItemText>
          </ListItem>
        ))}
      </List>
      <Box>
        <Typography className='text-sm'>
          <span className='font-bold'>Technologies used: </span>
          {experience.Description.Technologies.join(' | ')}
        </Typography>
      </Box>
    </Box>
  );
}
