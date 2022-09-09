import { Box, Stack, Typography } from '@mui/material';

import sectionsData, { ISubSectionData } from '@/data/sectionsData';

import SectionTitle from '@/components/home/SectionTitle';

import { camelCaseToTitleCase } from '@/utils/utils';

export default function DetailsSections() {
  const keys = Object.keys(sectionsData);
  return (
    <Box>
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
    </Box>
  );
}

function CreateSubSections({ subsections }: { subsections: ISubSectionData }) {
  const data = Object.keys(subsections);
  return (
    <>
      {data.map((t) => (
        <SubSection
          key={t}
          sectionName={camelCaseToTitleCase(t)}
          data={subsections[t]}
        />
      ))}
    </>
  );
}

function SubSection(props: { sectionName: string; data: string[] }) {
  const { sectionName, data } = props;
  return (
    <Box>
      <Typography variant='subtitle2' className='text-xl'>
        {sectionName}
      </Typography>
      <Typography variant='body2' className=''>
        {data.join(' | ')}
      </Typography>
    </Box>
  );
}
