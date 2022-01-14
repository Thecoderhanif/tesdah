import { useState } from 'react';
import {
  Flex,
  List,
  Text,
  Badge,
  Stack,
  Button,
  Divider,
  Heading,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react';

import Link from '@/components/Link';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Check } from '@/styles/icons';

function TimelineStep({ title, children }) {
  const secondaryText = useColorModeValue('gray.700', 'gray.300');
  return (
    <ListItem>
      <Stack ml={2} mb={4}>
        <Flex alignContent="flex-start">
          <Check mr={2} mt={1} color="whatsapp.500" />
          <Heading as="h4" fontSize="" fontWeight="medium">
            {title}
          </Heading>
        </Flex>
        <Text color={secondaryText} pl={6}>
          {children}
        </Text>
      </Stack>
    </ListItem>
  );
}

function FullTimeLine() {
  const border = useColorModeValue('gray.200', 'gray.600');
  return (
    <>
      <Divider borderColor={border} my={5} w="100%" />
      <Heading as="h3" fontSize="xl" mb={4} letterSpacing="lighter">
        2019
      </Heading>
      <List>
        <TimelineStep title="Kompetisi Diskominfo Karawang 🏅">
          Berkolaborasi dengan tim sebagai Frontend developer dalam membangun sebuah sistem "Smart
          City" berbasis website.
          <br />
          <Badge ariant="subtle" colorScheme="green" rounded="base">
            Juara III
          </Badge>
        </TimelineStep>
        <TimelineStep title="Partisipan Sertifikasi BNSP 🎉">Sebagai Web developer.</TimelineStep>
      </List>
    </>
  );
}

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);
  return (
    <>
      <Heading as="h2" fontSize="3xl" letterSpacing="tight" mb={4} mt={10}>
        Linimasa
      </Heading>
      <Heading as="h3" fontSize="xl" mb={4} letterSpacing="lighter">
        2020
      </Heading>
      <List>
        <TimelineStep title="Full-Stack Developer Intern 👨🏼‍💻">
          Membangun aplikasi Human Resource Management System di&nbsp;
          <Link href="https://jiwalu.id">Jiwalu Studio</Link>.
          <br />
          <Badge ariant="subtle" colorScheme="green" rounded="base">
            CodeIgniter 3
          </Badge>
        </TimelineStep>
      </List>
      {isShowingFullTimeline ? (
        <FullTimeLine />
      ) : (
        <Button
          display="block"
          my={4}
          mx="auto"
          fontWeight="medium"
          variant="ghost"
          fontSize="sm"
          onClick={() => showFullTimeline(true)}
          rightIcon={<ChevronDownIcon />}
        >
          Selengkapnya
        </Button>
      )}
    </>
  );
}
