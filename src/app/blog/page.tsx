import { Card, Container, Flex, Section, Text, Timestamp } from '@nearai/ui';
import { parseISO } from 'date-fns';
import type { Metadata } from 'next';

import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Updates and insights from the NEAR AI team.',
};

export default function BlogPostsListPage() {
  return (
    <>
      <Section padding="hero" gap="xl">
        <Container size="m">
          <Flex direction="column" gap="xl">
            <Flex direction="column" gap="m">
              <Text as="h1">Blog</Text>
              <Text size="text-xl" weight={300}>
                Updates and insights from the NEAR AI team
              </Text>
            </Flex>

            <Flex direction="column" gap="m">
              {blogPosts.map((post) => (
                <Card key={post.slug} href={`/blog/${post.slug}`} padding="l">
                  <Flex align="center" gap="m">
                    <Text size="text-s">{post.author.name}</Text>
                    <Text size="text-s" as="span">
                      •
                    </Text>
                    <Text size="text-s">
                      <Timestamp
                        date={parseISO(post.date)}
                        options={{
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }}
                      />
                    </Text>
                  </Flex>

                  <Text as="h2" size="text-l" indicateParentClickable>
                    {post.title}
                  </Text>

                  <Text>{post.excerpt}</Text>
                </Card>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Section>
    </>
  );
}
