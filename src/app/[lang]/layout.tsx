import { Locale, i18n } from '@/i18n.config';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Header from '../components/header/header';
import Head from 'next/head';
import { FormProvider } from '../context/FormContext';
import { Providers } from '../components/captcha/providers';
import { AuthProvider } from '../context/AuthContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '300',
});

export const metadata: Metadata = {
  title: 'DINA NRW',
  description: 'Generated by create next app',
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <Head>
        <meta name="description">{metadata.description}</meta>
      </Head>

      <Providers>
        <FormProvider>
          <AuthProvider>
            <body className={`${poppins.className} h-screen`}>
              {/* <Header lang={params.lang} /> */}
              {children}

              <script
                id="dacs"
                src="https://download.digiaccess.org/digiaccess"
                defer
              ></script>
            </body>
          </AuthProvider>
        </FormProvider>
      </Providers>
    </html>
  );
}
