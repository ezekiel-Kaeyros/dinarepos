import React, { Suspense, useState } from 'react';
import Reports from '../../common/components/reports/Reports';
import { Locale } from '@/i18n.config';

const Page = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <Suspense>
      <Reports  />
    </Suspense>
  );
};

export default Page;
