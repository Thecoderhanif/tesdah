import NextLink from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';

export default function Link(props) {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <ChakraLink
          textDecor="underline"
          _hover={{
            textDecor: 'none',
            borderBottom: '3px solid',
            borderImage: 'linear-gradient(to left, #7928CA, #FF0080) 1',
            transition: 'border-image 5s ease-in-out'
          }}
          {...props}
        />
      </NextLink>
    );
  }

  return (
    <ChakraLink
      textDecor="underline"
      _hover={{
        textDecor: 'none',
        borderBottom: '3px solid',
        borderImage: 'linear-gradient(to left, #7928CA, #FF0080) 1',
        transition: 'border-image 5s ease-in-out'
      }}
      isExternal
      {...props}
    />
  );
}
