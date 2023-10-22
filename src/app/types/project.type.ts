import { TSkill } from './skill.type';

export type TProject = {
  title: string;
  description: string;
  url?: string;
  repoUrl?: string;
  hardSkills: TSkill[];
};
