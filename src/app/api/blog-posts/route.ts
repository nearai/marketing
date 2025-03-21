// This route exists for external teams to ingest blog posts (eg: DevHub)

import { NextResponse } from 'next/server';

import { blogPosts } from '@/data/blog-posts';

export function GET() {
  return NextResponse.json({
    posts: blogPosts.map(({ content, ...post }) => post),
  });
}
