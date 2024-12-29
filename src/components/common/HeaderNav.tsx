import { useState } from 'react';

export function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Categories', href: '/categories' },
    { label: 'Trending', href: '/trending' },
    { label: 'About', href: '/about' },
  ];

  return (
    <nav className="hidden md:flex items-center space-x-4">
      {navItems.map(item => (
        <a
          key={item.href}
          href={item.href}
          className="px-3 py-2 text-gray-700 hover:text-primary-600 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}