import { certificationSectionDataData } from '@/data/resumeData/certificationSectionDataData';
import { educationSectionData } from '@/data/resumeData/educationSectionData';
import { proExperiencesSectionData } from '@/data/resumeData/proExperiencesSectionData';
import { profileSectionData } from '@/data/resumeData/profileSectionData';
import { projectSectionData } from '@/data/resumeData/projectSectionData';

import type { IResumeData } from '@/@types/resume.types';

const resumeMainData: IResumeData = {
  Profile: profileSectionData,
  Education: educationSectionData,
  Certification: certificationSectionDataData,
  ProfessionalExperience: proExperiencesSectionData,
  Project: projectSectionData,
};

export default resumeMainData;
