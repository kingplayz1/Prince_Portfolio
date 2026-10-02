export type NavPage = 'home' | 'work' | 'creative' | 'about' | 'contact';

export interface ProjectItem {
  id: string;
  num: string;
  title: string;
  category: 'game' | 'web' | 'backend';
  categoryLabel: string;
  techTags: string[];
  badge: string;
  badgeType?: 'tertiary' | 'primary' | 'secondary';
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  imageAlt: string;
  stats: {
    label1: string;
    val1: string;
    label2: string;
    val2: string;
    label3: string;
    val3: string;
  };
  metrics: {
    left: string;
    right: string;
  };
  codeTitle: string;
  codeLang: string;
  codeSnippet: string;
  nodes?: string[];
  repo?: string;
  version?: string;
}

export interface VideoShowcase {
  id: string;
  title: string;
  category: 'fivem' | 'valorant' | 'dev' | 'mograph';
  categoryLabel: string;
  tag1: string;
  tag2: string;
  duration: string;
  imageUrl: string;
  imageAlt: string;
  software: string;
  description: string;
  impressions: string;
  specs: {
    res: string;
    fps: string;
    render: string;
    color: string;
    workflow: string;
    stack: string[];
  };
}

export interface Milestone {
  id: string;
  era: string;
  title: string;
  badge: string;
  shortDesc: string;
  status: string;
  breakthrough: string;
  techTags: string[];
  lesson: string;
}

export interface RigTool {
  name: string;
  tier: string;
  desc: string;
  spec: string;
  status: string;
  icon: string;
  category: 'dev' | 'creative' | 'hardware';
}
