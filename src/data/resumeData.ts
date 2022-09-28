import {
  ICertification,
  IEducation,
  IProfessionalExperience,
  IProfile,
  IProject,
  IResumeData,
} from '@/@types/resume.types';

export const profileData: IProfile = {
  Title: 'Profile',
  Description:
    "I have a Master's degree in Software Engineering for the Cloud, interested in JavaScript ecosystem and Frontend enthusiast. I'm also interested Dot Net platform and software development.",
};

export const educationData: IEducation = {
  Title: 'Education',
  Diploma: [
    {
      Title: 'Specialized Master Degree in Software Engineering for the Cloud',
      Institution: 'University Ibn Tofail',
      city: 'Kénitra',
      Country: 'Morocco',
      Date: '2021 - 2022',
    },
    {
      Title:
        'Bachelor of Fundamental Studies in Mathematical and Computer Sciences',
      Institution: 'University Ibn Tofail',
      city: 'Kénitra',
      Country: 'Morocco',
      Date: '2019 - 2020',
    },
    {
      Title:
        'Diploma of General University Studies (DEUG) in Mathematics and Computer Science',
      Institution: 'University Ibn Tofail',
      city: 'Kénitra',
      Country: 'Morocco',
      Date: '2018 - 2019',
    },
    {
      Title: 'Baccalaureate in Mathematics and Computer Science',
      Institution: "Les Amis de l'école",
      city: 'Moroni',
      Country: 'Comoros',
      Date: '2016 - 2017',
    },
  ],
};

export const certificationData: ICertification = {
  Title: 'Certification',
  Certificates: [
    {
      Title: 'ReactJs (Basic)',
      Institution: 'Hackerrank',
      Date: '08/2022',
      Link: 'https://www.hackerrank.com/certificates/bd9c04c7acd3',
    },
    {
      Title: 'Building Web APIs with ASP.NET Core in .NET 6',
      Institution: 'LinkedIn Learning',
      Date: '04/2021',
      Link: 'https://www.linkedin.com/learning/certificates/d6792897137490172445b516eb6478f3d28e2cdd5de5688e54ef20a595e367a6',
    },
    {
      Title: 'Javascript Intermediate',
      Institution: 'Hackerrank',
      Date: '09/2021',
      Link: 'https://www.hackerrank.com/certificates/8c49c3aea770',
    },
  ],
};

export const professionalExperienceData: IProfessionalExperience = {
  Title: 'Professional Experience',
  Experiences: [
    {
      Title: 'Requirement Admin - End-of-study internship',
      Company: 'Lear Corporation',
      CompanyLink: 'https://www.lear.com/',
      city: 'Rabat Technopolis Sala Al Jadida',
      Country: 'Morocco',
      Date: '06/2021 - 08/2021',
      Description: {
        Title: 'Design and optimization of a requirements export system',
        Technologies: [
          'DXL',
          'IBM Rational DOORS',
          'Interop',
          'C#',
          'EF Core',
          'ASP.NET Core',
          'SQL Server',
          'OSLC',
        ],
        Tasks: [
          {
            Task: 'Integration with IBM Rational DOORS',
            SubTasks: [
              {
                SubTask:
                  'Usage of dxl script along with IBM rational doors to extends built-in functionalities of DOORS',
                SubTaskDetails: [],
              },
              {
                SubTask:
                  'Improve interoperability between DOORS and Internal tools at Lear',
                SubTaskDetails: [],
              },
            ],
          },

          {
            Task: 'Optimization of the export process',
            SubTasks: [
              {
                SubTask:
                  'Improve performances in the existing export process by using newer strategies, better memory management of DXL script and using more lower-level functionalities for better control of the execution.',
                SubTaskDetails: [],
              },
              {
                SubTask:
                  'Reduce higher memory usage on the export and allowing parallel export (reduction of export time)',
                SubTaskDetails: [],
              },
              {
                SubTask:
                  'Usage of a cache mechanism to reduce drastically the export’s execution time, with SQL server as cache database:',
                SubTaskDetails: [
                  'Allowing to export only newer or updated requirements',
                  'Allowing to Resume export',
                  'Reduce unnecessary export',
                  'etc.',
                ],
              },
            ],
          },
          {
            Task: 'Migration of the existing library to Dotnet 6',
            SubTasks: [],
          },
          {
            Task: 'Exposing usable API for a later use (in a Command Line Interface) or for a web server (REST API, mvc, …)',
            SubTasks: [],
          },
          {
            Task: 'Creation of a Command-Line Application (CLI) and web server for exporting requirements',
            SubTasks: [],
          },
          {
            Task: 'Scheduling export process in windows server to run automatically and periodically in a specified date time.',
            SubTasks: [],
          },
        ],
      },
    },
  ],
};

export const projectData: IProject = {
  Title: 'Projects',
  ProjectDetails: [
    {
      Name: 'Leave Management System',
      Summary:
        'A fullstack project made with Blazor WASM and ASP.Net Core allowing employees to make leave requests. The admins will be able to accept or refuse the requests.',
      Description: '',
      StartDate: '09/2021',
      EndDate: '09/2021',
      Link: 'https://github.com/faouziMohamed/LeaveManagement',
      Technologies: [
        'C#',
        'ASP.Net Core',
        'Blazor Web Assembly',
        'Bootstrap 5',
      ],
    },
    {
      Name: 'Taradjam',
      Summary: 'A platform for creating diplome from one language to another.',
      Description:
        'This project consists, from sentences in a source language, to receive translation proposals in a language of, to create a dataset of several languages.',
      StartDate: '01/2022',
      EndDate: '-1',
      Link: 'https://taradjam.vercel.app',
      Technologies: [
        'ReactJs(NextJs)',
        'Asp.Net Core',
        'Sql Server',
        'MaterialUi',
        'TailwindCss',
        'Azure',
      ],
    },
    {
      Name: 'Social share',
      Summary: 'Mini social network',
      Link: 'https://fz-social-share.vercel.app',
      Description:
        'A Social Network-like web-app, with a design based on Facebook and other social networks',
      StartDate: '10/2021',
      EndDate: '02/2022',
      Technologies: ['ReactJs', 'SCSS', 'MongoDB'],
    },
    {
      Name: 'ACEM - Vote',
      Summary: 'Online vote secured for a student association called ACEM',
      Link: 'https://acem-vote.vercel.app',
      Description: '',
      StartDate: '10/2021',
      EndDate: '-1',
      Technologies: [
        'NextJs',
        'Typescript',
        'TailwindCSS',
        'SCSS',
        'MongoDB',
        'Open GPG',
      ],
    },
    {
      Name: 'FzNavigator',
      Summary: 'A simple web Browser based on Chromium',
      Link: 'https://github.com/faouziMohamed/fzNavigator',
      Description: '',
      StartDate: '02/2020',
      EndDate: '03/2020',
      Technologies: ['C++', 'Qt5', 'CMake'],
    },
    {
      Name: 'Covid Data',
      Summary: 'Desktop application that displays Covid 19',
      Link: 'https://github.com/faouziMohamed/covid-data',
      Description: '',
      StartDate: '12/2020',
      EndDate: '01/2021',
      Technologies: ['Python', 'PyQt5', 'Qss (Qt Style sheet)'],
    },
  ],
};

const resumeData: IResumeData = {
  Profile: profileData,
  Education: educationData,
  Certification: certificationData,
  ProfessionalExperience: professionalExperienceData,
  Project: projectData,
};

export default resumeData;
