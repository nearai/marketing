import type { ReactNode } from 'react';

import { aitpAnnouncementBlogPost } from './aitp-announcement';
import { buildingNextGenNearAiInfrastructureWithTeesBlogPost } from './building-next-gen-near-ai-infrastructure-with-tees';
import { decentralizedConfidentialMachineLearningBlogPost } from './decentralized-confidential-machine-learning';
import { introducingTheOpenAgentsAllianceBlogPost } from './introducing-the-open-agents-alliance';
import { nearAiAssistantAlphaBlogPost } from './near-ai-assistant-alpha';
import { nearAiResearchHubLaunchBlogPost } from './near-ai-research-hub-launch';
import { proofOfResponseAnnouncementBlogPost } from './proof-of-response-announcement';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
  };
  content: ReactNode;
};

export const blogPosts = [
  decentralizedConfidentialMachineLearningBlogPost,
  introducingTheOpenAgentsAllianceBlogPost,
  aitpAnnouncementBlogPost,
  proofOfResponseAnnouncementBlogPost,
  buildingNextGenNearAiInfrastructureWithTeesBlogPost,
  nearAiResearchHubLaunchBlogPost,
  nearAiAssistantAlphaBlogPost,
];
