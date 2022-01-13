import { Box, Link, Text, Flex, Stack, Heading, useColorModeValue } from '@chakra-ui/react';
import { Notion, React } from '@/styles/icons';

function ProjectCard({ title, description, href, children }) {
  const secondaryText = useColorModeValue('gray.700', 'gray.300');
  const borderCard = useColorModeValue('gray.200', 'gray.600');
  const backgroundCard = useColorModeValue('gray.100', 'gray.800');

  return (
    <Box my={2}>
      <Link href={href} _hover={{ textDecoration: 'none' }} isExternal>
        <Flex
          align="center"
          border="1px solid"
          borderColor={borderCard}
          borderRadius={4}
          transition="background .5s ease-in-out"
          _hover={{ background: `${backgroundCard}` }}
          p={4}
        >
          {children}
          <Stack>
            <Heading as="h4" fontSize="xl" letterSpacing="tighter">
              {title}
            </Heading>
            <Text lineHeight="1.3" color={secondaryText}>
              {description}
            </Text>
          </Stack>
        </Flex>
      </Link>
    </Box>
  );
}

export default function Projects() {
  return (
    <>
      <Heading as="h2" fontSize="3xl" letterSpacing="tight" mb={4} mt={10}>
        Project Terbaru
      </Heading>
      <ProjectCard
        title="React21"
        description="Kumpulan project sederhana yang dipelajari dari internet. Dibangun dengan Library React.js dan di deploy menggunakan vercel."
        href="https://react21.vercel.app"
      >
        <React boxSize={12} mr={4} />
      </ProjectCard>
      <ProjectCard
        title="Bookshelf"
        description='Saya tidak suka menyimpan buku fisik. Sebagai gantinya saya membuat "Perpustakaan pribadi" dengan memanfaatkan Notion sebagai database.'
        href="https://books.opakholis.dev"
      >
        <Notion boxSize={12} mr={4} />
      </ProjectCard>
    </>
  );
}
