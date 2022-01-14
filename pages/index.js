import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { Text, Button, Heading, useColorModeValue } from '@chakra-ui/react';

import Container from '@/components/Container';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';

const meta = {
  title: 'Opa Kholis Majid - Frontend Developer'
};

const Index = () => {
  const secondaryText = useColorModeValue('gray.700', 'gray.300');
  return (
    <Container>
      <NextSeo title={meta.title} titleTemplate="%s" />
      <Heading as="h1" fontSize={['4xl', '5xl']} letterSpacing="tight" my={5}>
        Halo Semua.
      </Heading>
      <Text color={secondaryText} lineHeight="tall">
        Saya Opa Kholis Majid, seseorang yang menyebut dirinya sebagai Frontend developer—yang mana
        sekarang sedang senang ber-eksplorasi dengan Linux distribution dan Open-source software.
      </Text>
      <Link href="/whoami" passHref>
        <Button as="a" fontSize="sm" mt={5} variant="outline" w="256px">
          Selengkapnya tentang Opa
        </Button>
      </Link>
      <Projects />
      <Timeline />
    </Container>
  );
};

export default Index;
