import { Card, Text } from '@nearai/ui';
import type { ReactNode } from 'react';

type Props = {
  quote: ReactNode;
  author: string;
};

export const BlockQuote = ({ quote, author }: Props) => {
  return (
    <Card background="sand-1">
      <Text style={{ fontStyle: 'italic' }} color="sand-12">
        {quote}
      </Text>
      <Text size="text-s">—{author}</Text>
    </Card>
  );
};
