import Container from '@/components/Container';
import { Divider, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export default function SnippetsLayout({ children, frontMatter }) {
  const router = useRouter();
  const secondaryText = useColorModeValue('gray.700', 'gray.300');
  const border = useColorModeValue('gray.200', 'gray.600');

  return (
    <Container>
      <NextSeo
        title={frontMatter.title}
        titleTemplate="%s - Code Snippet"
        description={frontMatter.description}
        openGraph={{ title: frontMatter.title, description: frontMatter.description }}
      />
      <Heading
        as="h1"
        fontSize={['3xl', '4xl', '5xl']}
        letterSpacing="tight"
        lineHeight="shorter"
        my={4}
      >
        {frontMatter.title}
      </Heading>
      <Text color={secondaryText}>{frontMatter.description}</Text>
      <Divider borderColor={border} mt={5} w="100%" />
      {children}
    </Container>
  );
}
