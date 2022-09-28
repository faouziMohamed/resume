import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { IconType } from 'react-icons';
import { BsCircle, BsCircleSquare, BsDash } from 'react-icons/bs';
import { TbExternalLink } from 'react-icons/tb';

import UnStyledLink from '@/components/links/UnStyledLink';

import { IExperience, ISubTask, ITask } from '@/@types/resume.types';

interface IExperienceSectionProps {
  experience: IExperience;
}

export default function ExperienceSection(props: IExperienceSectionProps) {
  const { experience } = props;
  return (
    <Box>
      <Box className='flex flex-wrap items-center gap-1'>
        <Typography variant='h4' className='inline text-sm font-bold'>
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
          <ListItem key={task.Task} className='flex flex-col p-0 text-sm'>
            <ShowListItemWithIcon
              text={task.Task}
              Icon={BsCircleSquare}
              iconSize={12}
            />
            <SubTask task={task} />
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

function ShowListItemWithIcon({
  text,
  Icon,
  iconSize = 7,
}: {
  text: string;
  Icon: IconType;
  iconSize: number;
}) {
  return (
    <Box className='flex w-full items-baseline gap-2'>
      <span className='shrink-0'>
        <Icon size={iconSize} />
      </span>
      <ListItemText className='text-sm'>
        <Typography variant='body2' className='text-sm'>
          {text}
        </Typography>
      </ListItemText>
    </Box>
  );
}

function SubTaskDetails({ subTask }: { subTask: ISubTask }) {
  return (
    <List className='w-full p-0 pl-2'>
      {subTask.SubTaskDetails.map((subSubTask) => (
        <ListItem key={subSubTask} className='p-0'>
          <ShowListItemWithIcon
            text={subSubTask}
            Icon={BsCircle}
            iconSize={7}
          />
        </ListItem>
      ))}
    </List>
  );
}

function SubTask({ task }: { task: ITask }) {
  return (
    <List className='w-full p-0 pl-2'>
      {task.SubTasks.map((subTask) => (
        <ListItem key={subTask.SubTask} className='flex flex-col p-0'>
          <ShowListItemWithIcon
            text={subTask.SubTask}
            Icon={BsDash}
            iconSize={12}
          />
          <SubTaskDetails subTask={subTask} />
        </ListItem>
      ))}
    </List>
  );
}
