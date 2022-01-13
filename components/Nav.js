import Link from 'next/link';
import { useRouter } from 'next/router';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, HStack, IconButton, useColorMode } from '@chakra-ui/react';

const NavLink = ({ text, href, isActive }) => (
  <Link href={href} passHref>
    <Button
      as="a"
      px={[4, 5]}
      fontWeight="normal"
      cursor="pointer"
      variant={isActive ? 'solid' : 'ghost'}
    >
      {text}
    </Button>
  </Link>
);

export default function Nav() {
  const { pathname } = useRouter();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack as="nav" py={[4, 8]} mt={[2, 4]} justifyContent="space-between">
      <IconButton
        aria-label="Toggle dark mode"
        icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        rounded="md"
      />
      <HStack spacing={3}>
        <NavLink href="/" text="Home" isActive={pathname === '/'} />
        <NavLink href="/whoami" text="About" isActive={pathname.startsWith('/whoami')} />
        <NavLink href="/blog" text="Blog" isActive={pathname.startsWith('/blog')} />
      </HStack>
    </HStack>
  );
}
