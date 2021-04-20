import Head from 'next/head';

const NextHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};

export default NextHead;
