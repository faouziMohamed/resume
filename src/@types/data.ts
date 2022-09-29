export type SVGImageData = React.FC<React.SVGProps<SVGSVGElement>>;

export interface About {
  FirstName: string;
  LastName: string;
  Profession: string;
}

export interface Location {
  City: string;
  Country: string;
  Type: string;
}

export interface Tel {
  Title: string;
  Link: string;
}

export interface Email {
  Title: string;
  Link: string;
}

export interface Linkedin {
  Title: string;
  Link: string;
}

export interface Website {
  Title: string;
  Link: string;
}

export interface Github {
  Title: string;
  Link: string;
}

export interface IUserContactsAndProfileData {
  About: About;
  Location: Location;
  Tel: Tel;
  Email: Email;
  Linkedin: Linkedin;
  Website: Website;
  Github: Github;
}
