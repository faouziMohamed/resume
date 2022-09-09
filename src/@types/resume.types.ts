export interface IProfile {
  Description: string;
  Title: string;
}

export interface IDiploma {
  Institution: string;
  city: string;
  Title: string;
  Country: string;
  Date: string;
}

export interface IEducation {
  Title: string;
  Diploma: IDiploma[];
}

export interface ICertificate {
  Institution: string;
  Link: string;
  Title: string;
  Date: string;
}

export interface ICertification {
  Certificates: ICertificate[];
  Title: string;
}

export interface IExperience {
  Company: string;
  CompanyLink?: string;
  Description: { Tasks: string[]; Title: string; Technologies: string[] };
  city: string;
  Title: string;
  Country: string;
  Date: string;
}

export interface IProfessionalExperience {
  Experiences: IExperience[];
  Title: string;
}

export interface IProjectDetail {
  StartDate: string;
  Description: string;
  Summary: string;
  EndDate: string;
  Name: string;
  Technologies: string[];
  Link?: string;
}

export interface IProject {
  ProjectDetails: IProjectDetail[];
  Title: string;
}

export interface IResumeData {
  Profile: IProfile;
  Education: IEducation;
  Certification: ICertification;
  ProfessionalExperience: IProfessionalExperience;
  Project: IProject;
}
