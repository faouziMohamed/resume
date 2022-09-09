import { Box, Stack, Typography } from '@mui/material';

import sectionsData, { ISubSectionData } from '@/pages/sectionsData';
import SectionTitle from '@/pages/SectionTitle';
import { camelCaseToTitleCase } from '@/utils/utils';

function CreateSubSections({ subsections }: { subsections: ISubSectionData }) {
  const data = Object.keys(subsections);
  return (
    <>
      {data.map((t) => (
        <SubSection
          key={t}
          title={camelCaseToTitleCase(t)}
          data={subsections[t]}
        />
      ))}
    </>
  );
}

export default function Sections() {
  const keys = Object.keys(sectionsData);
  return (
    <>
      {keys.map((sectionTitle) => (
        <Stack key={sectionTitle} className='gap-2'>
          <SectionTitle
            title={camelCaseToTitleCase(sectionTitle)}
            Icon={sectionsData[sectionTitle].Icon}
          />
          <CreateSubSections
            subsections={sectionsData[sectionTitle].subsections}
          />
        </Stack>
      ))}
    </>
  );
}

function SubSection({ title, data }: { title: string; data: string[] }) {
  return (
    <Box>
      <Typography variant='subtitle2' className='text-xl'>
        {title}
      </Typography>
      <Typography variant='body2' className='text-'>
        {data.join(' | ')}
      </Typography>
    </Box>
  );
}
