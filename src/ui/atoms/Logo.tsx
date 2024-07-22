import Image from 'next/image';

import LogoLearn from '@/assets/images/Logo.png';
import { cn } from '@/configs/cn';

interface LogoProps {
  className: string;
}
export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn('relative h-full w-full', className)}>
      <Image
        src={LogoLearn}
        className={'absolute h-full w-full'}
        style={{ objectFit: 'contain' }}
        alt="learn-earn-logo"
      />
    </div>
  );
}
