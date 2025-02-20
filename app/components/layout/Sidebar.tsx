'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { NavItem } from '@/app/types/navigation';

interface SidebarProps {
  items: NavItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-base-200 h-screen p-4">
      <div className="flex items-center mb-8">
        <h1 className="text-2xl font-bold">CRM App</h1>
      </div>
      <ul className="menu menu-vertical gap-2">
        {items.map((item) => (
          <li key={item.path}>
            <Link
              href={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg hover:bg-base-300 ${
                pathname === item.path ? 'bg-primary text-primary-content' : ''
              }`}
            >
              <i className={`icon icon-${item.icon}`}></i>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};