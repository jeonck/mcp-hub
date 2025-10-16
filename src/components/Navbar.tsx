
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'react-feather';

interface NavItem {
  title: string;
  to: string;
}

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

interface DropdownProps {
  title: string;
  items: NavItem[];
}

interface NestedDropdownProps {
  title: string;
  categories: { [key: string]: NavItem[] };
}

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}

interface MobileDropdownProps {
  title: string;
  items: NavItem[];
  closeMenu: () => void;
}

interface MobileNestedDropdownProps {
  title: string;
  categories: { [key: string]: NavItem[] };
  closeMenu: () => void;
}

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const coreConcepts: NavItem[] = [
    { title: 'MCP란?', to: '/concepts/what-is-mcp' },
    { title: 'AI 에이전트의 부상', to: '/concepts/ai-agents' },
    { title: '보안 및 거버넌스', to: '/concepts/security' },
  ];

  const serverCategories: { [key: string]: NavItem[] } = {
    '개발 워크플로우': [
      { title: 'GitHub Server', to: '/servers/github' },
    ],
    '웹 자동화': [
      { title: 'Playwright Server', to: '/servers/playwright' },
    ],
    '데이터 & AI': [
      { title: 'Vectorize Server', to: '/servers/vectorize' },
      { title: 'File System Server', to: '/servers/filesystem' },
    ],
    '클라우드 & 인프라': [
      { title: 'Cloudflare Server', to: '/servers/cloudflare' },
    ],
  };

  return (
    <nav className="fixed w-full z-30 top-0 bg-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              <span className="text-indigo-500">MCP</span> Server Hub
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink to="/">Home</NavLink>
            <Dropdown title="핵심 개념" items={coreConcepts} />
            <NestedDropdown title="서버 쇼케이스" categories={serverCategories} />
            <NavLink to="/getting-started">시작하기</NavLink>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileDropdown title="핵심 개념" items={coreConcepts} closeMenu={() => setMobileMenuOpen(false)} />
            <MobileNestedDropdown title="서버 쇼케이스" categories={serverCategories} closeMenu={() => setMobileMenuOpen(false)} />
            <MobileNavLink to="/getting-started" onClick={() => setMobileMenuOpen(false)}>시작하기</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- Dropdown Components ---

const NavLink = ({ to, children }: NavLinkProps) => (
  <Link to={to} className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
    {children}
  </Link>
);

const Dropdown = ({ title, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 flex items-center">
        {title} <ChevronDown size={16} className={`ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-0 w-48 bg-white rounded-md shadow-lg z-20 py-1">
          {items.map((item) => (
            <Link key={item.title} to={item.to} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const NestedDropdown = ({ title, categories }: NestedDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 flex items-center">
        {title} <ChevronDown size={16} className={`ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="absolute left-0 mt-0 w-64 bg-white rounded-md shadow-lg z-20 py-1">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category}>
              <h3 className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">{category}</h3>
              {items.map(item => (
                <Link key={item.title} to={item.to} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// --- Mobile Menu Components ---

const MobileNavLink = ({ to, children, onClick }: MobileNavLinkProps) => (
  <Link to={to} onClick={onClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-100">
    {children}
  </Link>
);

const MobileDropdown = ({ title, items, closeMenu }: MobileDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-800">
        {title} <ChevronDown size={20} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pl-4">
          {items.map(item => (
            <MobileNavLink key={item.title} to={item.to} onClick={closeMenu}>{item.title}</MobileNavLink>
          ))}
        </div>
      )}
    </div>
  );
};

const MobileNestedDropdown = ({ title, categories, closeMenu }: MobileNestedDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-between items-center px-3 py-2 text-base font-medium text-gray-800">
        {title} <ChevronDown size={20} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pl-4">
          {Object.entries(categories).map(([category, items]) => (
            <div key={category} className="py-1">
              <h3 className="px-3 text-sm font-semibold text-gray-500 uppercase tracking-wider">{category}</h3>
              {items.map(item => (
                <MobileNavLink key={item.title} to={item.to} onClick={closeMenu}>{item.title}</MobileNavLink>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
