import { NextSeo } from 'next-seo';
import { Text, Heading } from '@chakra-ui/react';

import Container from '@/components/Container';
import Link from '@/components/Link';

const meta = {
  title: 'Now',
  description: 'Apa yang Opa lakukan sekarang.'
};

export default function UsesLayout({ children }) {
  return (
    <Container>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{ title: meta.title, description: meta.description }}
      />
      <Heading as="h1" fontSize={['4xl', '5xl']} letterSpacing="tight" my={5}>
        /now
      </Heading>
      <Text lineHeight="taller" mb={8}>
        Halaman ini terinspirasi dari idenya <Link href="https://sive.rs/nowff">Derek Sivers</Link>{' '}
        dan jika kamu memiliki situs pribadi, sebaiknya kamu membuat halaman /now juga, ucapnya.
      </Text>
      {children}
    </Container>
  );
}
