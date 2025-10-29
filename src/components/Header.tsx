"use client";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, ChevronDown, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCoursesMenu, setShowCoursesMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Trang chủ', href: '#' },
    { name: 'Dự án', href: '#projects' },
    { 
      name: 'Khóa học', 
      href: '/courses',
      submenu: [
        { name: 'Sketchlab Archviz', href: '/courses/archviz' },
        { name: 'Sketchlab Academy', href: '/courses/academy' },
      ]
    },
    { name: 'Dịch vụ', href: '#services' },
    { name: 'Giới thiệu', href: '#about' },
    { name: 'Liên hệ', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0)',
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
        borderBottom: scrolled ? '1px solid rgba(141, 170, 140, 0.2)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none',
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="flex items-center relative z-50"
          >
           <img src="/assets/img/logo.png" alt="Sketchlab Logo" className="h-12 rounded-full" />
          </motion.a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8 relative left-[18%]">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.submenu && setShowCoursesMenu(true)}
                onMouseLeave={() => item.submenu && setShowCoursesMenu(false)}
              >
                <motion.a
                  href={item.href}
                  className="text-white hover:text-[#8daa8c] transition-colors flex items-center gap-1 relative group py-2"
                  whileHover={{ y: -2 }}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8daa8c]"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                {/* Submenu */}
                {item.submenu && (
                  <AnimatePresence>
                    {showCoursesMenu && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-md border border-[#8daa8c]/30 overflow-hidden"
                      >
                        {item.submenu.map((subItem, subIndex) => (
                          <motion.a
                            key={subIndex}
                            href={subItem.href}
                            className="block px-6 py-3 text-white hover:bg-[#8daa8c] hover:text-white transition-colors relative overflow-hidden group"
                            whileHover={{ x: 5 }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-[#8daa8c]/20 to-transparent"
                              initial={{ x: '-100%' }}
                              whileHover={{ x: 0 }}
                              transition={{ duration: 0.3 }}
                            />
                            <span className="relative z-10">{subItem.name}</span>
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-[#8daa8c] text-white hover:bg-[#7a9a79] transition-colors relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 group-hover:text-[#8daa8c] transition-colors" style={{ fontWeight: 500 }}>
                Bắt đầu ngay
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4 space-y-4 overflow-hidden"
            >
              {menuItems.map((item, index) => (
                <div key={index}>
                  <a
                    href={item.href}
                    className="block text-white hover:text-[#8daa8c] py-2"
                    onClick={() => !item.submenu && setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block text-gray-400 hover:text-[#8daa8c] text-sm py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <button className="w-full px-6 py-3 bg-[#8daa8c] text-white">
                  Bắt đầu ngay
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
