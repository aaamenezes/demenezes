import type { LucideIcon } from 'lucide-react';
import {
  BriefcaseBusiness,
  CircleHelp,
  ClockPlus,
  CodeXml,
  Terminal,
  Users,
  Wrench,
} from 'lucide-react';
import type { CmsIconName } from './types';

/**
 * Old icons list in CMS
 * code, job, people, balance, terminal, tool, github, twitter, medium, linkedin, instagram, bars, search, external, close, arrow-left, arrow-right, link
 */

export const map: Record<CmsIconName, LucideIcon> = {
  'code-xml': CodeXml,
  'briefcase-business': BriefcaseBusiness,
  'circle-help': CircleHelp,
  users: Users,
  'clock-plus': ClockPlus,
  terminal: Terminal,
  wrench: Wrench,
};

export function isCmsIconName(name: string): name is CmsIconName {
  return name in map;
}
