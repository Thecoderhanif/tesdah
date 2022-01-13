/* eslint-disable react/no-children-prop */
import { NextSeo } from 'next-seo';
import { useState } from 'react';
import {
  Flex,
  Text,
  Input,
  Heading,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  InputLeftElement
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

import { getAllFilesFrontMatter } from '@/lib/mdx';
import BlogPost from '@/components/BlogPost';
import Container from '@/components/Container';

const meta = {
  title: 'Tulisan',
  description:
    'Tulisan, opini dan juga dokumentasi untuk saya pribadi ketika sedang belajar atau membagikan sesuatu.'
};

export default function Blog({ posts }) {
  const secondaryText = useColorModeValue('gray.700', 'gray.300');
  const iconColor = useColorModeValue('gray.300', 'gray.700');

  const [searchValue, setSearchValue] = useState('');
  const filteredBlogPosts = posts
    .sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter(
      (frontMatter) =>
        frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        frontMatter.summary.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <Container>
      <NextSeo
        title={meta.title}
        description={meta.description}
        openGraph={{ title: meta.title, description: meta.description }}
      />
      <Heading as="h1" fontSize={['4xl', '5xl']} letterSpacing="tight" my={5}>
        Tulisan.
      </Heading>
      <Text color={secondaryText} lineHeight="tall">
        Halaman ini berisi tulisan, opini dan juga merupakan dokumentasi untuk saya pribadi ketika
        sedang belajar atau membagikan sesuatu. Enjoy your reading!
      </Text>

      <InputGroup mt={5}>
        <InputLeftElement pointerEvents="none" children={<Search2Icon color={iconColor} />} />
        <Input
          aria-label="Cari tulisan"
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Cari tulisan.."
        />
        <InputRightElement color={secondaryText}>{filteredBlogPosts.length}</InputRightElement>
      </InputGroup>

      <Flex flexDirection="column" my={5}>
        {!filteredBlogPosts.length && (
          <Text color={secondaryText}>Artikel yang kamu cari tidak ditemukan 😿</Text>
        )}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </Flex>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog');

  return { props: { posts } };
}
