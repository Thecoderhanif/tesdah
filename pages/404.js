import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { Text, Button, Heading, useColorModeValue } from '@chakra-ui/react';

import Container from '@/components/Container';

const meta = {
  title: '404',
  description:
    "Why show a generic 404 when I can make it sound mysterious? It seems you've found something that used to exist, or you spelled something wrong."
};

export default function Error() {
  const secondaryText = useColorModeValue('gray.700', 'gray.300');
  return (
    <Container>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{
          title: meta.title,
          description: meta.description
        }}
      />

      <Heading as="h1" fontSize={['4xl', '5xl']} letterSpacing="tight" my={5}>
        451 - Unavailable For Legal Reasons
      </Heading>
      <Text color={secondaryText} lineHeight="tall">
        Why show a generic 404 when I can make it sound mysterious? It seems you've found something
        that used to exist, or you spelled something wrong. I'm guessing you spelled something
        wrong. Can you double check that URL?
      </Text>
      <Link href="/" passHref>
        <Button as="a" fontSize="sm" mt={5} variant="outline" w="256px">
          Back to Home
        </Button>
      </Link>
    </Container>
  );
}
