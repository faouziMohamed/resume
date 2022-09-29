const seoTypes = ['website', 'article'] as const;

export interface ISeoData {
  title: string;
  siteName: string;
  description: string;
  type: typeof seoTypes[number];
  robots: string;
  // logo must be a public url not a relative path
  logo: URL;
  twitterSite: string;
  author?: string;
}

const seoData: ISeoData = {
  title: 'Faouzi Mohamed',
  siteName: "Faouzi Mohamed's Resume",
  description:
    'My resume where I present myself, my skills, some projects etc. ',
  type: 'website',
  robots: 'follow, index',
  logo: new URL('https://avatars.githubusercontent.com/u/57812398?&v=4'),
  twitterSite: '@fz_faouzi',
  author: 'Faouzi Mohamed',
};

// Make sure that there is no error unhandled
process.on('uncaughtException', (err) => {
  // eslint-disable-next-line no-console
  console.warn(
    "You probably have set an incorrect value for the 'logo' property in the 'seoData.ts' file. The value must be a public url not a relative path.",
  );
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});

export default seoData;
