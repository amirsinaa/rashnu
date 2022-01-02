import {
  Box,
  Center,
  Heading,
  Text,
  Stack
} from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import rashnuBlack from '../public/static/images/rashnu-black.png';
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { NextPage } from 'next';
import Image from 'next/image';


const IndexPage: NextPage = () => {
  const [t] = useTranslation('common')
  const { locale } = useRouter();

  return (
    <Center py={6} mt={'10%'}>
      <Box
        maxW={'445px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          p={10}
          justifyContent={'center'}
          display={'flex'}
          pos={'relative'}
        >
          <Image
            src={rashnuBlack}
            alt={'Rashni'}
            width={'150px'}
            height={'150px'}
          />
        </Box>
        <Stack>
          <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            {locale === 'fa' ? <a href="/">EN</a> : <a href="/fa">FA</a>}
          </Text>
          <Heading
            fontSize={'2xl'}
            fontFamily={'body'}
            textAlign={'center'}>
            {t('RASHNU')}
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
};
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default IndexPage;