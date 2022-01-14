/* eslint-disable react/display-name */
import Image from 'next/image';
import {
  Box,
  Kbd,
  Code,
  Text,
  Alert,
  Heading,
  useColorModeValue,
  ListItem,
  UnorderedList,
  OrderedList
} from '@chakra-ui/react';

import Link from '@/components/Link';

const DocsHeading = (props) => (
  <Heading
    css={{
      scrollMarginTop: '100px',
      scrollSnapMargin: '100px', // Safari
      '&[id]': {
        pointerEvents: 'none'
      },
      '&[id]:before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: `""`
      },
      '&[id]:hover a': { opacity: 1 }
    }}
    {...props}
    mb="0.3em"
    mt="1.9em"
  >
    {' '}
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          color="#7928CA"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: 'outline'
          }}
          opacity="0"
          ml="0.5rem"
          href={`#${props.id}`}
        >
          #
        </Box>
      )}
    </Box>
  </Heading>
);

const Quote = (props) => {
  const color = useColorModeValue('gray.300', 'gray.700');
  return (
    <Alert
      as="blockquote"
      bg="transparent"
      borderLeftColor={color}
      fontWeight="bold"
      fontStyle="italic"
      variant="left-accent"
      mt={6}
      css={{
        '> *:first-of-type': {
          margin: ['2', '0', '2', '10']
        }
      }}
      {...props}
    />
  );
};

const Tick = () => {
  const color = useColorModeValue('gray.300', 'gray.700');
  return (
    <Text textAlign="center" fontSize="5xl" color={color}>
      ,,
    </Text>
  );
};

// image
const Wrapper = (props) => {
  return <Box w="full" pt={4} {...props} />;
};

const Caption = (props) => {
  const color = useColorModeValue('gray.500', 'gray.400');
  return (
    <Text
      as="span"
      w="full"
      fontSize="sm"
      fontStyle="italic"
      color={color}
      display="inline-block"
      textAlign="right"
      {...props}
    />
  );
};

const MDXComponents = {
  // Typography
  h1: (props) => <DocsHeading as="h1" fontSize="3xl" {...props} />,
  h2: (props) => <DocsHeading as="h2" fontSize="2xl" {...props} />,
  h3: (props) => <DocsHeading as="h3" fontSize="xl" {...props} />,
  h4: (props) => <DocsHeading as="h4" fontSize="lg" {...props} />,
  p: (props) => <Text as="p" mt={5} lineHeight="taller" {...props} />,
  li: (props) => <ListItem mt={2} {...props} />,
  ul: (props) => <UnorderedList pl={4} pt={2} lineHeight="taller" {...props} />,
  ol: (props) => <OrderedList pl={4} pt={2} lineHeight="taller" {...props} />,
  a: Link,
  Link,

  // image
  Image,
  Caption,
  Wrapper,

  // misc
  br: (props) => <Box height="24px" {...props} />,
  inlineCode: (props) => <Code px={1.5} {...props} />,
  blockquote: Quote,
  hr: Tick,
  kbd: Kbd
};

export default MDXComponents;
