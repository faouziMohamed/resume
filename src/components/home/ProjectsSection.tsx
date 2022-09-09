import { Box, Box as Section, Stack as ProjectCardStack } from '@mui/material';

import SectionTitleWithBlob from '@/components/home/SectionTitleWithBlob';
import SVGBlob from '@/components/home/SVGBlob';
import ArrowLink from '@/components/links/ArrowLink';

import type { IProjectDataType } from '@/@types/data';

import ProjectsBlob from '~/icons/projects-blob.svg';

import ProjectCard from './ProjectCard';

interface IProjectProps {
  className?: string;
  projects: IProjectDataType[];
}

export default function ProjectSection({
  className = '',
  projects,
}: IProjectProps) {
  return (
    <Section
      id='projects'
      className={`flex w-full flex-col items-center gap-4 ${className}`}
    >
      <SectionTitleWithBlob
        title='Projects'
        BlobComponent={() => (
          <SVGBlob Blob={ProjectsBlob} twHeight='h-5' twBottom='-bottom-3' />
        )}
      />
      <ProjectCardStack className='flex flex-row flex-wrap justify-center gap-4'>
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            repoUrl={project.repoUrl}
            liveUrl={project.liveUrl}
            forks={project.forks}
            languages={project.languages}
            stars={project.stars}
            image={project.image}
          />
        ))}
      </ProjectCardStack>
      <Box className='flex w-full justify-end'>
        <ArrowLink
          direction='right'
          href='/projects/more'
          className='text-primary-600'
        >
          See More Projects
        </ArrowLink>
      </Box>
    </Section>
  );
}
