import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

const DropdownMenu = ({ children }) => {
  return <DropdownMenuPrimitive.Root>{children}</DropdownMenuPrimitive.Root>;
};

const Trigger = ({ children }) => (
  <DropdownMenuPrimitive.Trigger asChild>{children}</DropdownMenuPrimitive.Trigger>
);

const Content = ({ children, align = 'end', className = '' }) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content align={align} sideOffset={8} className={`bg-white rounded-md shadow-md py-1 ${className}`}>
      {children}
    </DropdownMenuPrimitive.Content>
  </DropdownMenuPrimitive.Portal>
);

const Item = ({ children, onSelect, className = '' }) => (
  <DropdownMenuPrimitive.Item onSelect={onSelect} className={`px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer ${className}`}>
    {children}
  </DropdownMenuPrimitive.Item>
);

export { DropdownMenu, Trigger, Content, Item };
