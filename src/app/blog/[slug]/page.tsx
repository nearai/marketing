import { Container, Flex, Section, SvgIcon, Text, Timestamp } from '@nearai/ui';
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';
import { parseISO } from 'date-fns';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PostContent } from '@/components/PostContent';
import { blogPosts } from '@/data/blog-posts';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blogPost = blogPosts.find((item) => item.slug === slug);

  return {
    title: blogPost?.title,
    description: blogPost?.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const blogPost = blogPosts.find((item) => item.slug === slug);

  if (!blogPost) {
    return notFound();
  }

  return (
    <>
      <Section padding="hero" background="sand-0">
        <Container size="m">
          <Flex direction="column" gap="l" align="start">
            <Text href="/blog">
              <Flex as="span" align="center" gap="s">
                <SvgIcon icon={<ArrowLeft />} />
                Back to All Posts
              </Flex>
            </Text>

            <Text as="h1">{blogPost.title}</Text>

            <Flex align="center" gap="m">
              <Text color="sand-12" weight={500}>
                {blogPost.author.name}
              </Text>
              <Text as="span">•</Text>
              <Text>
                <Timestamp
                  date={parseISO(blogPost.date)}
                  options={{
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }}
                />
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Section>

      <Section padding="hero">
        <Container size="m">
          <Flex direction="column" gap="l" align="start">
            <PostContent>{blogPost.content}</PostContent>

            {/* <Button
              label="Submit Proposal"
              href={blogPost.submitProposalUrl}
              target="_blank"
              iconRight={<ArrowRight />}
              size="large"
            /> */}
          </Flex>
        </Container>
      </Section>
    </>
  );
}
