import { Box, Stack, Typography } from '@mui/material';
import { IconType } from 'react-icons';
import {
  FaBriefcase,
  FaCertificate,
  FaFolderOpen,
  FaGraduationCap,
} from 'react-icons/fa';
import { RiContactsFill } from 'react-icons/ri';

import data from '@/data/resumeData/resumeMainData';

import CertificationsSection from '@/components/home/certificationsSection';
import DiplomaSection from '@/components/home/diplomaSection';
import ExperienceSection from '@/components/home/experienceSection';
import ProjectSection from '@/components/home/projectSection';
import DetailsSections from '@/components/home/Sections';
import SectionTitle from '@/components/home/SectionTitle';
import UserAvatar from '@/components/home/userAvatar';
import UserInformation from '@/components/home/UserInformation';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import {
  ICertification,
  IEducation,
  IProfessionalExperience,
  IProfile,
  IProject,
} from '@/@types/resume.types';

import userInformation from '../data/resumeData/userIformationData';

export default function HomePage() {
  const { Profile, Project, Certification } = data;
  const { Education: education, ProfessionalExperience } = data;
  return (
    <Layout>
      <Box className='flex flex-col gap-8 sm:flex-row sm:gap-1'>
        <Seo title='Resume' theme='light' />
        <Box className='flex flex-col gap-6 bg-gray-800 p-2 py-8 text-white md:w-full md:max-w-md'>
          <Box className='flex flex-col items-center gap-4 py-16 sm:flex-col sm:justify-between md:flex-col'>
            <UserAvatar />
            <UserInformation data={userInformation} />
          </Box>
          <DetailsSections />
        </Box>
        <ResumeSections
          profile={Profile}
          education={education}
          certifications={Certification}
          experiences={ProfessionalExperience}
          projects={Project}
        />
      </Box>
    </Layout>
  );
}

function ResumeSectionTitle(props: { title: string; Icon: IconType }) {
  const { title, Icon } = props;
  return (
    <SectionTitle
      title={title}
      Icon={Icon}
      className='border-b-[7px] border-gray-800'
    />
  );
}

function Education({ education }: { education: IEducation }) {
  return (
    <Stack className='gap-4'>
      <ResumeSectionTitle title={education.Title} Icon={FaGraduationCap} />
      {education.Diploma.map((diploma) => (
        <DiplomaSection key={diploma.Title} diploma={diploma} />
      ))}
    </Stack>
  );
}

function ResumeSections({
  profile,
  education,
  certifications,
  experiences,
  projects,
}: {
  profile: IProfile;
  education: IEducation;
  certifications: ICertification;
  experiences: IProfessionalExperience;
  projects: IProject;
}) {
  return (
    <Stack className='gap-4 px-2 sm:py-16'>
      <Stack className='gap-4'>
        <ResumeSectionTitle title={profile.Title} Icon={RiContactsFill} />
        <Typography variant='body1'>{profile.Description}</Typography>
      </Stack>
      <Education education={education} />
      <Stack className='gap-4'>
        <ResumeSectionTitle title={certifications.Title} Icon={FaCertificate} />
        {certifications.Certificates.map((certification) => (
          <CertificationsSection
            key={certification.Title}
            certification={certification}
          />
        ))}
      </Stack>
      <Stack className='gap-4'>
        <ResumeSectionTitle title={experiences.Title} Icon={FaBriefcase} />
        {experiences.Experiences.map((experience) => (
          <ExperienceSection experience={experience} key={experience.Title} />
        ))}
      </Stack>
      <Stack className='gap-2'>
        <ResumeSectionTitle title={projects.Title} Icon={FaFolderOpen} />
        {projects.ProjectDetails.map((project) => (
          <ProjectSection key={project.Name} project={project} />
        ))}
      </Stack>
    </Stack>
  );
}
