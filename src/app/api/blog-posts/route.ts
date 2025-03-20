// This route exists for external teams to ingest blog posts (eg: DevHub)

import { NextResponse } from 'next/server';

import { blogPosts } from '@/data/blog-posts';

export function GET() {
  return NextResponse.json({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    posts: blogPosts.map(({ content, ...post }) => post),
  });
}
