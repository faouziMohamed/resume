import type { IconType } from 'react-icons';
import { GiHobbitDoor, GiNinjaHead, GiWorld } from 'react-icons/gi';

export type ISubSectionData = { [key: string]: string[] };

export interface ISkillsAndAbilities {
  [key: string]: {
    Icon: IconType;
    title: string;
    subsections: ISubSectionData;
  };
}

const skillsAndAbilities: ISkillsAndAbilities = {
  Skills: {
    title: 'Skills',
    Icon: GiNinjaHead,
    subsections: {
      programmingLanguages: [
        'C#',
        'Java',
        'Javascript',
        'Typescript',
        'Python',
        'C++',
      ],
      frameworksAndLibraries: [
        'Asp.Net Core',
        'ExpressJs',
        'NextJs',
        'Blazor Web Assembly',
        'ReactJs',
        'Bootstrap',
        'PyQt5',
      ],
      databases: ['MongoDB', 'MySQL', 'SQL Server'],
      cloudProviders: ['Azure', 'DigitalOcean'],
      environments: ['Windows', 'Linux'],
      virtualization: ['Docker', 'VirtualBox'],
      conceptionAndRedaction: [
        'StarUML',
        'MS Word',
        'MS Powerpoint',
        'Figma',
        'InkScape',
      ],
      personality: [
        'Dynamic',
        'Curious',
        'Team Player',
        'Stress management',
        'Adaptable',
      ],
    },
  },
  languages: {
    title: 'Languages',
    Icon: GiWorld,
    subsections: {
      french: ['Native'],
      english: ['Fluent'],
      arabic: ['Fluent'],
    },
  },
  interests: {
    title: 'Interests',
    Icon: GiHobbitDoor,
    subsections: {
      Learning: [
        'Web Development',
        'Teaching',
        'Science vulgarization',
        'Programming',
      ],
      hobbies: ['Sci-Fi movies and tv shows', 'Music', 'Video games'],
    },
  },
};

export default skillsAndAbilities;
