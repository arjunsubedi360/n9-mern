import React from 'react';
import { Disclosure } from '@headlessui/react';
import Logo from './Logo';
import Navigation from './Navigation';
import MobileMenuButton from './MobileMenuButton';
import ProfileMenu from './ProfileMenu';
import MobileMenuPanel from './MobileMenuPanel';

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <MobileMenuButton />
          <Logo />
          <Navigation />
          <ProfileMenu />
        </div>
      </div>
      <MobileMenuPanel />
    </Disclosure>
  );
}
