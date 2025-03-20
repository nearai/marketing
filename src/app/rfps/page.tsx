import { Card, Container, Flex, Section, Text, Timestamp } from '@nearai/ui';
import { parseISO } from 'date-fns';
import type { Metadata } from 'next';

import { rfps } from '@/data/rfps';

export const metadata: Metadata = {
  title: 'Requests for Proposals',
  description:
    'Join us in building the future of intelligent agents through our open requests for proposals.',
};

export default function RfpsListPage() {
  return (
    <>
      <Section padding="hero">
        <Container size="m">
          <Flex direction="column" gap="xl">
            <Flex direction="column" gap="m">
              <Text as="h1">Requests for Proposals</Text>
              <Text size="text-xl" weight={300}>
                Join us in building the future of intelligent agents
              </Text>
            </Flex>

            <Flex direction="column" gap="m">
              {rfps.map((rfp) => (
                <Card key={rfp.slug} href={`/rfps/${rfp.slug}`} padding="l">
                  <Flex align="center" gap="m">
                    <Text size="text-s">{rfp.author.name}</Text>
                    <Text size="text-s" as="span">
                      •
                    </Text>
                    <Text size="text-s">
                      <Timestamp
                        date={parseISO(rfp.date)}
                        options={{
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }}
                      />
                    </Text>
                  </Flex>

                  <Text as="h2" size="text-l" indicateParentClickable>
                    {rfp.title}
                  </Text>

                  <Text>{rfp.excerpt}</Text>
                </Card>
              ))}
            </Flex>
          </Flex>
        </Container>
      </Section>
    </>
  );
}
