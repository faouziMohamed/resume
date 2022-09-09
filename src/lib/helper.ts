type OpenGraphType = {
  siteName: string;
  description: string;
  templateTitle?: string;
  logo?: string;
  theme?: string;
};
export function openGraph({
  siteName,
  templateTitle,
  description,
  theme = 'light',
  logo = 'https://avatars.githubusercontent.com/u/57812398?s=800&v=4',
}: OpenGraphType): string {
  const ogLogo = encodeURIComponent(logo);
  const ogSiteName = encodeURIComponent(siteName.trim());
  const ogTemplateTitle = templateTitle
    ? encodeURIComponent(templateTitle.trim())
    : undefined;
  const ogDesc = encodeURIComponent(description.trim());

  return `https://fz-og.vercel.app/api/general?siteName=${ogSiteName}&description=${ogDesc}&logo=${ogLogo}${
    ogTemplateTitle ? `&templateTitle=${ogTemplateTitle}&theme=${theme}` : ''
  }`;
}

// https://og.thcl.dev/api/general?description=My%20personal%20Portfolio%20where%20I%20present%20myself%2C%20my%20skills%2C%20some%20projects%20etc.%20&logo=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F57812398%3Fs%3D800%26v%3D4&siteName=Faouzi%20Mohamed%27s%20Portfolio&templateTitle=Faouzi%20Mohamed&theme=light
