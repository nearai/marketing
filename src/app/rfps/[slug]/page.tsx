import {
  Button,
  Container,
  Flex,
  Section,
  SvgIcon,
  Text,
  Timestamp,
} from '@nearai/ui';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import { parseISO } from 'date-fns';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PostContent } from '@/components/PostContent';
import { rfps } from '@/data/rfps';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const rfp = rfps.find((item) => item.slug === slug);

  return {
    title: rfp?.title,
    description: rfp?.excerpt,
  };
}

export default async function RfpPage({ params }: Props) {
  const { slug } = await params;
  const rfp = rfps.find((item) => item.slug === slug);

  if (!rfp) {
    return notFound();
  }

  return (
    <>
      <Section padding="hero" background="sand-0">
        <Container size="m">
          <Flex direction="column" gap="l" align="start">
            <Text href="/rfps">
              <Flex as="span" align="center" gap="s">
                <SvgIcon icon={<ArrowLeft />} />
                Back to RFPs
              </Flex>
            </Text>

            <Text as="h1">{rfp.title}</Text>

            <Flex align="center" gap="m">
              <Text color="sand-12" weight={500}>
                {rfp.author.name}
              </Text>
              <Text as="span">•</Text>
              <Text>
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
          </Flex>
        </Container>
      </Section>

      <Section padding="hero">
        <Container size="m">
          <Flex direction="column" gap="l" align="start">
            <PostContent>{rfp.content}</PostContent>

            <Button
              label="Submit Proposal"
              href={rfp.submitProposalUrl}
              target="_blank"
              iconRight={<ArrowRight />}
              size="large"
            />
          </Flex>
        </Container>
      </Section>
    </>
  );
}
