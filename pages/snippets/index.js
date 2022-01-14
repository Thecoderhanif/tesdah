import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { Box, Heading, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react';

import Container from '@/components/Container';
import { getAllFilesFrontMatter } from '@/lib/mdx';

const meta = {
  title: 'Snippets',
  description: 'Kumpulan kode snippets yang sering saya gunakan.'
};

export default function Snippets({ snippets }) {
  const secondaryText = useColorModeValue('gray.700', 'gray.300');
  const borderCard = useColorModeValue('gray.200', 'gray.600');
  const backgroundCard = useColorModeValue('gray.100', 'gray.800');

  return (
    <Container>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{ title: meta.title, description: meta.description }}
      />
      <Heading as="h1" fontSize={['4xl', '5xl']} letterSpacing="tight" my={5}>
        Snippets.
      </Heading>
      <Text color={secondaryText} lineHeight="tall" mb={6}>
        Halaman ini berisi kumpulan Snippets yang sering saya gunakan, feel free to reuse!
      </Text>

      <SimpleGrid columns={[1, 2]} spacing={4}>
        {snippets.map(({ title, description, slug }) => (
          <Link href={`/snippets/${slug}`} key={slug} passHref>
            <Box
              as="a"
              border="1px"
              borderColor={borderCard}
              borderRadius={4}
              minH="100px"
              transition="background .3s ease-in-out"
              _hover={{ background: `${backgroundCard}` }}
              p={4}
            >
              <Heading as="h3" fontSize="lg" mb={2}>
                {title}
              </Heading>
              <Text color={secondaryText}>{description}</Text>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export async function getStaticProps() {
  const snippets = await getAllFilesFrontMatter('snippets');

  return { props: { snippets } };
}
