import { RtlProvider } from "@/modules/core/components/RtlProvider";
import AppLayout from "@/layouts/AppSkeleton/AppLayout";
import { appWithTranslation } from 'next-i18next'
import { AnimatePresence } from "framer-motion";
import Layout from "@/layouts/Layout/Layout";
import { AppProps } from 'next/app';
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import { DefaultSeo } from 'next-seo';
import '../styles/app.scss';

const RASHNU = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <Layout>
      <RtlProvider>
        <AppLayout>
          <AnimatePresence
            exitBeforeEnter
            initial={false}
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Box key={router.route}>
              <DefaultSeo
                defaultTitle="Rashnu studio"
                titleTemplate="%s Rashnu studio %s"
                description="Rashnu studio - creative agency"
              />
              <Component {...pageProps} />
            </Box>
          </AnimatePresence>
        </AppLayout>
      </RtlProvider>
    </Layout>
  );
};

export default appWithTranslation(RASHNU);
