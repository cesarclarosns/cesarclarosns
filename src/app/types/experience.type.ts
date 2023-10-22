import { TSkill } from './skill.type';

export type TExperience = {
  period: string;
  title: string;
  description: string;
  link: string;
  hardSkills: TSkill[];
};
