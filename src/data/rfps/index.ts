import type { ReactNode } from 'react';

import { aiAuditorAgentRfp } from './ai-auditor-agent';

export type RequestForProposals = {
  slug: string;
  title: string;
  excerpt: string;
  contact: string;
  requirements: string;
  date: string;
  deadline: string;
  author: {
    name: string;
  };
  submitProposalUrl: string;
  content: ReactNode;
};

export const rfps = [aiAuditorAgentRfp];
