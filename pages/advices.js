import { NextSeo } from 'next-seo';
import { Text, Heading, useColorModeValue } from '@chakra-ui/react';

import Advices from '@/components/Advices';
import Container from '@/components/Container';

const meta = {
  title: 'Pesanmu',
  description: 'Keluh kesah, pendapat, informasi, atau bahkan nasihat untuk Opa.'
};

export default function AdviceMe() {
  const secondaryText = useColorModeValue('gray.700', 'gray.300');
  return (
    <Container>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{ title: meta.title, description: meta.description }}
      />
      <Heading as="h1" fontSize={['4xl', '5xl']} letterSpacing="tight" my={5}>
        Pesan untuk Opa.
      </Heading>
      <Text color={secondaryText} lineHeight="tall">
        Halaman ini dibuat untuk menampung segala keluh kesah, pendapat, informasi, atau bahkan
        nasihat untuk <b>Opa Kholis Majid</b>.
      </Text>
      <Advices />
    </Container>
  );
}
