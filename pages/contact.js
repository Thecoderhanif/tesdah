import { NextSeo } from 'next-seo';
import { Text, Heading, VStack, useColorModeValue } from '@chakra-ui/react';

import Container from '@/components/Container';
import Link from '@/components/Link';

const meta = {
  title: 'Kontak',
  description: 'Cara menghubungi Opa di internet'
};

export default function About() {
  const secondaryText = useColorModeValue('gray.700', 'gray.300');
  return (
    <Container>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{ title: meta.title, description: meta.description }}
      />
      <Heading as="h1" fontSize={['4xl', '5xl']} letterSpacing="tight" my={5}>
        Mari Berkenalan.
      </Heading>
      <VStack color={secondaryText} spacing={3} alignItems="flex-start" lineHeight="tall">
        <Text>
          Saya punya beberapa akun Sosial Media seperti Instagram, Twitter, Facebook, Discord,&nbsp;
          <strike>Reddit</strike>, Slack tapi jarang sekali dibuka.
        </Text>
        <Text>
          Jika kamu ingin berkomunikasi dengan saya, saya cukup aktif di&nbsp;
          <Link href="https://t.me/opakholis/">Telegram</Link>. Bisa juga berkirim pesan lewat surel
          saya di <Link href="mailto:hi@opakholis.dev">hi@opakholis.dev</Link>.
        </Text>
        <Text>
          Dan hei! jika kamu punya pendapat yang ingin disampaikan, jangan sungkai untuk ditulis dan
          dikirim lewat <Link href="/advices">sini</Link>.
        </Text>
      </VStack>
    </Container>
  );
}
