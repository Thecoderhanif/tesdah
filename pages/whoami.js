import { NextSeo } from 'next-seo';
import { Text, Heading, VStack, useColorModeValue } from '@chakra-ui/react';

import Container from '@/components/Container';
import Link from '@/components/Link';

const meta = {
  title: 'Tentang'
};

export default function About() {
  const secondaryText = useColorModeValue('gray.700', 'gray.300');
  return (
    <Container>
      <NextSeo title={meta.title} openGraph={{ title: meta.title }} />
      <Heading as="h1" fontSize={['4xl', '5xl']} letterSpacing="tight" my={5}>
        Tentang Opa.
      </Heading>
      <VStack color={secondaryText} spacing={3} alignItems="flex-start" lineHeight="tall">
        <Text>
          Saya sangat tertarik dengan dunia pemrograman dan Open-source Software. Saat ini sedang
          belajar tentang sisi Frontend dari platform web menggunakan bahasa pemrogramanan
          JavaScript serta UI Library ReactJs.
        </Text>
        <Text>
          Sebagaimana pada manusia umumnya, saya tidak sepenuhnya mengahabiskan waktu didepan&nbsp;
          <strike>teks editor</strike> IDE. Diluar kegiatan tulis-menulis kode, saya juga suka
          membaca buku, menonton film dan mendengarkan musik. Lemme know jika kita punya hobi yang
          sama!
        </Text>
        <Text>
          Jangan sungkan untuk&nbsp;
          <Link href="/contact">menyapa saya</Link> khususnya melalui surel, karena saya senang
          berkomunikasi dan khususnya berkenalan dengan orang baru.
        </Text>
        <Text>Anyway, senang berkenalan denganmu!</Text>
      </VStack>
    </Container>
  );
}
