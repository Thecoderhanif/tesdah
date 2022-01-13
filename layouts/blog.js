import { useRouter } from 'next/router';
import { parseISO, format } from 'date-fns';
import { Text, Button, HStack, Heading, useColorModeValue } from '@chakra-ui/react';
import { ArrowBackIcon, ArrowUpIcon } from '@chakra-ui/icons';

import BlogSeo from '@/components/BlogSeo';
import Container from '@/components/Container';
import { Date, Time } from '@/styles/icons';

export default function BlogLayout({ children, frontMatter }) {
  const router = useRouter();
  const secondaryText = useColorModeValue('gray.700', 'gray.300');

  return (
    <Container>
      <BlogSeo url={frontMatter.slug} {...frontMatter} />

      <Heading
        as="h1"
        fontSize={['3xl', '4xl', '5xl']}
        letterSpacing="tight"
        lineHeight="shorter"
        my={4}
      >
        {frontMatter.title}
      </Heading>
      <Text color={secondaryText} fontSize={['14px', '16px']}>
        <Date mx={1} mb={1} />
        {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
        {` • `}
        <Time mx={1} mb={1} />
        {frontMatter.readingTime.text}
      </Text>

      {frontMatter.tags && (
        <HStack mt={6} mb={2} spacing={3}>
          {frontMatter.tags.map((topic, i) => {
            return (
              <Button
                key={i}
                size="sm"
                fontWeight="normal"
                fontSize={['12px', '14px']}
                variant="outline"
                textTransform="capitalize"
              >
                {topic}
              </Button>
            );
          })}
        </HStack>
      )}
      {children}
      <HStack justify="space-between" mt={8}>
        <Btn icon={<ArrowBackIcon />} text="Back" onClick={() => router.push('/blog')} />
        <Btn icon={<ArrowUpIcon />} text="Top" onClick={() => window.scrollTo(0, 0)} />
      </HStack>
    </Container>
  );
}

const Btn = ({ text, onClick, icon }) => {
  const normal = useColorModeValue('gray.500', 'gray.400');
  const hover = useColorModeValue('gray.900', 'gray.100');
  return (
    <Button
      onClick={onClick}
      leftIcon={icon}
      variant="unstyled"
      color={normal}
      fontWeight="normal"
      _hover={{ color: hover }}
    >
      {text}
    </Button>
  );
};
