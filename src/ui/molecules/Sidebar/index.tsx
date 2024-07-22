'use client';

import { ScrollShadow, Spacer } from '@nextui-org/react';
import { useMediaQuery } from 'usehooks-ts';

import { cn } from '@/configs/cn';
import { sectionItemsWithTeams } from '@/configs/side-bar-items';
import Logo from '@/ui/atoms/Logo';

import Sidebar from './Sidebar';

export default function SideBar() {
  const isCompact = useMediaQuery('(max-width: 768px)');
  return (
    <div
      className={cn(
        'relative flex h-full w-full flex-col !border-r-small border-divider p-6 transition-width',
        {
          'w-13 px-2 py-6': isCompact
        }
      )}
    >
      <div
        className={cn(
          'flex items-center gap-3 px-3',

          {
            'justify-center gap-0': isCompact
          }
        )}
      >
        <div className="hidden h-32 w-32 items-center rounded-full md:flex md:justify-center">
          <Logo className="text-background" />
        </div>
      </div>
      <Spacer y={8} />
      <ScrollShadow className="-mr-6 h-full max-h-full py-6 pr-6">
        <Sidebar
          defaultSelectedKey="home"
          isCompact={isCompact}
          items={sectionItemsWithTeams}
        />
      </ScrollShadow>
    </div>
  );
}
