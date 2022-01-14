import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';
import { Box, Text, Link, Flex, Heading, useColorModeValue } from '@chakra-ui/react';

const BlogPost = ({ title, summary, slug, publishedAt }) => {
  const secondaryText = useColorModeValue('gray.700', 'gray.300');
  const bgHover = useColorModeValue('gray.100', 'gray.800');

  return (
    <NextLink href={`/blog/${slug}`}>
      <Link
        p="14px"
        border="3px solid transparent"
        transition="all .3s ease-in-out"
        _hover={{
          textDecoration: 'none',
          backgroundColor: bgHover,
          borderRadius: 'sm'
        }}
        _active={{
          borderStyle: 'dashed',
          borderColor: 'gray.600'
        }}
      >
        <Box display="block" width="100%">
          <Flex justifyContent="space-between" flexDirection={['column', 'column', 'row']}>
            <Heading fontSize="md" as="h3" mb={1} fontWeight="medium">
              {title}
            </Heading>
            <Text
              fontSize={['14px', 'normal']}
              color="gray.500"
              textAlign={['left', 'left', 'right']}
              mb={[1, 0]}
            >
              {format(parseISO(publishedAt), 'MMM dd, yyyy')}
            </Text>
          </Flex>
          <Text color={secondaryText}>{summary}</Text>
        </Box>
      </Link>
    </NextLink>
  );
};

export default BlogPost;
