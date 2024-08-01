import { Locale, i18n } from '@/i18n.config';
import { AdminProvider } from '../common/context/AdminContext';
import Sidebar from '../common/sidebar/Sidebar';
import { Suspense } from 'react';
import AdminHeader from '../common/components/home/header/Header';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <AdminProvider>
      <div className="w-screen flex bg-[#F3F3F3] h-screen overflow-hidden">
        <Sidebar />
        <div className="  sm:w-5/6 w-screen  h-screen">
          <AdminHeader />
          <main className=" md:p-16 p-3 sm:h-screen h-[calc(100vh-70px)]">
            {children}
          </main>
        </div>
      </div>
    </AdminProvider>
  );
}
