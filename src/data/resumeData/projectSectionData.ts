import type { IProject } from '@/@types/resume.types';

export const projectSectionData: IProject = {
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
