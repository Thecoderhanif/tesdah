import 'focus-visible/dist/focus-visible';
import '@fontsource/inter/variable.css';

import NextNprogress from 'nextjs-progressbar';
import { useRouter } from 'next/router';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';
import { AnimatePresence, motion } from 'framer-motion';
import { ChakraProvider, useColorMode, Box } from '@chakra-ui/react';
import { Global, css } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';

import Footer from '@/components/Footer';
import MDXComponents from '@/components/MDXComponents';
import Nav from '@/components/Nav';

import themes from '@/styles/theme';
import { prismDarkTheme, prismLightTheme } from '@/styles/prism';

const PrismTheme = () => {
  const { colorMode } = useColorMode();
  return (
    <Global
      styles={css`
        ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
      `}
    />
  );
};

const meta = {
  title: 'Opa Kholis Majid - Frontend Developer',
  desciption:
    'Seseorang yang menyebut dirinya sebagai Frontend developer—yang mana sekarang sedang senang ber-eksplorasi dengan Linux distribution dan Open-source Software.',
  url: 'https://opakholis.dev'
};

// pre-defined styles for motion
const MotionBox = motion(Box);

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  return (
    <ChakraProvider resetCSS theme={themes}>
      <NextNprogress
        color="linear-gradient(to right, #7928CA, #FF0080)"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <MDXProvider components={MDXComponents}>
        <PrismTheme />
        <DefaultSeo
          canonical={`${meta.url}${router.asPath || '/'}`}
          title={meta.title}
          titleTemplate={`%s - Opa Kholis Majid`}
          description={meta.desciption}
          openGraph={{
            type: 'website',
            locale: 'id_ID',
            title: meta.title,
            description: meta.desciption,
            site_name: meta.url,
            images: [
              {
                url: 'https://opakholis.dev/static/images/og.jpg',
                alt: meta.title,
                width: 1280,
                height: 720
              }
            ]
          }}
          twitter={{
            handle: '@opakholis',
            site: '@opakholis',
            cardType: 'summary_large_image'
          }}
        />
        <SocialProfileJsonLd
          type="Person"
          name="Opa Kholis Majid"
          url={meta.url}
          sameAs={['https://github.com/opxop', 'httos://twitter.com/opakholis']}
        />
        <Box maxW="768px" w="100%" px={[6, 8]} mx="auto">
          <Nav />
          <AnimatePresence initial={false} exitBeforeEnter>
            <MotionBox
              as="main"
              key={router.route}
              animate="enter"
              initial="initial"
              exit="exit"
              variants={{
                initial: { opacity: 0, y: -50 },
                enter: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 50 }
              }}
            >
              <Component {...pageProps} />
            </MotionBox>
            <Footer />
          </AnimatePresence>
        </Box>
      </MDXProvider>
    </ChakraProvider>
  );
};

export default App;
