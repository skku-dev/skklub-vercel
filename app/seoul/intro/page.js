'use client';

import IntroLayout from '@/app/layouts/intro/IntroLayout';
import IntroSection from '@/app/components/intro/IntroSection';
import DepartmentSection from '@/app/components/intro/DepartmentSection';
import { INTRO_SEOUL } from '@/utils/constants';
import UpperBanner from '@/app/components/common/UpperBanner';

export default function SeoulDY() {
  return (
    <>
      <UpperBanner />
      <IntroLayout>
        <IntroSection data={INTRO_SEOUL} />
        <DepartmentSection data={INTRO_SEOUL} />
      </IntroLayout>
    </>
  );
}
