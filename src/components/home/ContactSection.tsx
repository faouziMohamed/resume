import { Box as Section } from '@mui/material';

import SectionTitleWithBlob from '@/components/home/SectionTitleWithBlob';
import SVGBlob from '@/components/home/SVGBlob';

import ContactBlob from '~/icons/contact-blob.svg';
import FormBlob from '~/icons/form-blob.svg';

import ContactForm from './ContactForm';

interface ContactSectionProps {
  className?: string;
}

export default function ContactSection(props: ContactSectionProps) {
  const { className = '' } = props;
  return (
    <Section
      id='contacts'
      className={`relative flex  flex-col items-center gap-4 ${className}`}
    >
      <SectionTitleWithBlob
        title='Contact'
        BlobComponent={() => (
          <SVGBlob
            Blob={ContactBlob}
            twHeight='h-[1.07rem]'
            twBottom='-bottom-[.61rem]'
            twLeft='left-[.24rem]'
          />
        )}
      />
      <Section className='absolute -left-[5rem] -z-10 h-[24rem] w-[25rem]'>
        <FormBlob className='h-full w-full object-cover' />
      </Section>
      <ContactForm />
    </Section>
  );
}
