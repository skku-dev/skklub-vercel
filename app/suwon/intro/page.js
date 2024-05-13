'use client';

import IntroLayout from '@/app/layouts/intro/IntroLayout';
import IntroSection from '@/app/components/intro/IntroSection';
import DepartmentSection from '@/app/components/intro/DepartmentSection';
import { INTRO_SUWON } from '@/utils/constants';
import UpperBanner from '@/app/components/common/UpperBanner';

export default function SuwonDY() {
  return (
    <>
      <UpperBanner />
      <IntroLayout>
        <IntroSection data={INTRO_SUWON} />
        <DepartmentSection data={INTRO_SUWON} />
      </IntroLayout>
    </>
  );
}
