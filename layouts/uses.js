import { NextSeo } from 'next-seo';
import { Text, Heading } from '@chakra-ui/react';

import Container from '@/components/Container';
import Link from '@/components/Link';

const meta = {
  title: 'Uses',
  description: 'Apa yang Opa gunakan sekarang.'
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
        /uses
      </Heading>
      <Text lineHeight="taller">
        Daftar peralatan yang saya gunakan dalam kehidupan sehari-hari sebagai mahasiswa biasa.
        Halaman ini terinspirasi dari <Link href="https://uses.tech/">sini</Link>.
      </Text>
      {children}
    </Container>
  );
}
