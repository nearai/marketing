import { Button, Flex, Section, Text } from '@nearai/ui';
import { ArrowRight } from '@phosphor-icons/react/dist/ssr';

export default function Home() {
  return (
    <>
      <Section
        padding="hero"
        background="sand-0"
        style={{ textAlign: 'center' }}
      >
        <Flex direction="column" gap="xl" align="center">
          <Flex direction="column" gap="m">
            <Text size="text-hero-m">
              Building the {`world's`} best truly open AI.
            </Text>
            <Text size="text-2xl" weight={300}>
              Join the community building the user-owned future of AI.
            </Text>
          </Flex>

          <Flex align="center" justify="center" gap="m" wrap="wrap">
            <Button
              href="https://app.near.ai"
              label="Developer Hub"
              iconRight={<ArrowRight />}
            />
            <Button
              href="https://chat.near.ai"
              label="Try Assistant"
              iconRight={<ArrowRight />}
              fill="outline"
            />
          </Flex>
        </Flex>
      </Section>

      <Section padding="hero" gap="l" style={{ textAlign: 'center' }}>
        <Text size="text-xl" weight={300}>
          AI is shaping the internet.
        </Text>
        <Text size="text-xl" weight={300}>
          But today {`it's`} controlled by a handful of companies.
        </Text>
        <Text size="text-xl" weight={300}>
          Your data. Their profits.
        </Text>
        <Text size="text-xl" weight={300}>
          The future must be user-owned.
        </Text>
      </Section>
    </>
  );
}
