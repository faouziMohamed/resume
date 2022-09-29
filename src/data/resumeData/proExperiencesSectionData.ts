import { IProfessionalExperience } from '@/@types/resume.types';

export const proExperiencesSectionData: IProfessionalExperience = {
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
