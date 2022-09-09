import { Box, Box as Section, Typography } from '@mui/material';

import SectionTitleWithBlob from '@/components/home/SectionTitleWithBlob';
import SVGBlob from '@/components/home/SVGBlob';

import { SVGImageData } from '@/@types/data';

import CsharpIcon from '~/icons/csharp.svg';
import DockerIcon from '~/icons/docker.svg';
import FigmaIcon from '~/icons/figma.svg';
import GitIcon from '~/icons/git.svg';
import JsIcon from '~/icons/javascript.svg';
import MaterialUiIcon from '~/icons/material-ui.svg';
import MongoDbIcon from '~/icons/mongodb.svg';
import MysqlIcon from '~/icons/mysql.svg';
import NextJsIcon from '~/icons/nextjs.svg';
import NodeJsIcon from '~/icons/nodejs.svg';
import ReactJsIcon from '~/icons/reactjs.svg';
import SkillsBlob from '~/icons/skills-blob.svg';
import TailwindCssIcon from '~/icons/tailwindcss.svg';
import TypescriptIcon from '~/icons/typescript.svg';

// #region SkillsArray
const skillsTools: { name: string; Icon: SVGImageData }[] = [
  { name: 'Javascript', Icon: JsIcon },
  { name: 'Git', Icon: GitIcon },
  { name: 'Node.js', Icon: NodeJsIcon },
  { name: 'React.js', Icon: ReactJsIcon },
  { name: 'Typescript', Icon: TypescriptIcon },
  { name: 'C Sharp', Icon: CsharpIcon },
  { name: 'Next.js', Icon: NextJsIcon },
  { name: 'MongoDB', Icon: MongoDbIcon },
  { name: 'MySQL', Icon: MysqlIcon },
  { name: 'Material-UI', Icon: MaterialUiIcon },
  { name: 'Tailwind CSS', Icon: TailwindCssIcon },
  { name: 'Figma', Icon: FigmaIcon },
  { name: 'Docker', Icon: DockerIcon },
];
interface SkillsSectionProps {
  className?: string;
}
// #endregion SkillsArray

export default function SkilsAndStackSection({
  className = '',
}: SkillsSectionProps) {
  return (
    <Section
      id='skills'
      className={`flex flex-col items-center justify-center gap-4 ${className}`}
    >
      <SectionTitleWithBlob
        title='Skills & Stacks'
        BlobComponent={() => (
          <SVGBlob
            Blob={SkillsBlob}
            twHeight='h-[1.05rem]'
            twBottom='-bottom-[.89rem]'
          />
        )}
      />
      <Box className='flex w-full justify-start'>
        <Typography
          variant='h6'
          className='text-center font-primary text-base font-bold text-primary-800'
        >
          Mostly used
        </Typography>
      </Box>
      <Box>
        <Box className='relative flex flex-wrap justify-center gap-6'>
          {skillsTools.map((s) => (
            <Box
              key={s.name}
              className='flex flex-col items-center justify-center gap-1'
            >
              <s.Icon className='h-20 w-auto self-center' />
              <Typography variant='body2' className='font-[Roboto] font-bold'>
                {s.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  );
}
