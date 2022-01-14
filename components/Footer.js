import NextLink from 'next/link';
import { Link, VStack, HStack, Divider, IconButton, useColorModeValue } from '@chakra-ui/react';

import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Mail, Github, Twitter } from '@/styles/icons';

import NowPlaying from '@/components/NowPlaying';

export default function Footer() {
  const secondaryText = useColorModeValue('gray.700', 'gray.300');
  const hoverText = useColorModeValue('black', 'white');

  return (
    <VStack as="footer" spacing={0} w="full">
      <Divider orientation="horizontal" my={8} />
      <NowPlaying />
      <HStack spacing={2} pt={3} pb={[1.5, 3]}>
        <Icon
          href="https://twitter.com/opakholis"
          ariaLabel="Twitter"
          icon={<Twitter boxSize={5} />}
        />
        <Icon href="https://github.com/opxop" ariaLabel="Github" icon={<Github boxSize={5} />} />
        <Icon href="mailto:hi@opakholis.dev" ariaLabel="Email" icon={<Mail boxSize={5} />} />
      </HStack>

      <HStack
        spacing={5}
        color={secondaryText}
        pb={[5, 10]}
        maxW={['70%', null, '100%']}
        w="full"
        justify="center"
        flexWrap="wrap"
      >
        <NextLink href="/advices">
          <Link _hover={{ color: hoverText }} py={1}>
            /advices
          </Link>
        </NextLink>
        <Link
          py={1}
          display="inline-flex"
          justifyItems="center"
          href="https://books.opakholis.dev"
          _hover={{ color: hoverText }}
        >
          /books <ExternalLinkIcon h={3.5} w={3.5} ml="1px" />
        </Link>
        <NextLink href="/now">
          <Link _hover={{ color: hoverText }} py={1}>
            /now
          </Link>
        </NextLink>
        <NextLink href="/snippets">
          <Link _hover={{ color: hoverText }} py={1}>
            /snippets
          </Link>
        </NextLink>
        <NextLink href="/uses">
          <Link _hover={{ color: hoverText }} py={1}>
            /uses
          </Link>
        </NextLink>
      </HStack>
    </VStack>
  );
}

const Icon = ({ href, ariaLabel, icon }) => {
  return (
    <IconButton
      as="a"
      href={href}
      icon={icon}
      aria-label={ariaLabel}
      size="lg"
      variant="ghost"
      color="gray.500"
      target="_blank"
      rel="noreferrer noopener"
    />
  );
};
