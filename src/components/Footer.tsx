import { Flex, Text } from '@nearai/ui';

import s from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <Flex justify="space-between" gap="m" align="center" wrap="wrap">
        <Text size="text-xs">NEAR AI</Text>

        <Flex wrap="wrap" gap="m">
          <Text
            href="https://app.near.ai"
            target="_blank"
            size="text-xs"
            color="sand-11"
          >
            Developer Hub
          </Text>

          <Text
            href="https://chat.near.ai"
            target="_blank"
            size="text-xs"
            color="sand-11"
          >
            Assistant
          </Text>

          <Text
            href="https://airtable.com/appc0ZVhbKj8hMLvH/pag4dQKP3KF3qrTFo/form"
            target="_blank"
            size="text-xs"
            color="sand-11"
          >
            Contact Us
          </Text>
        </Flex>
      </Flex>
    </footer>
  );
};
