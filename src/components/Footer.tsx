"use client";
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <img src="/assets/img/logo.png" alt="Sketchlab Logo" className="h-12 rounded-full" />
            </div>
            <p className="text-gray-400 mb-6" style={{ fontWeight: 300 }}>
              Đơn vị tiên phong trong lĩnh vực thiết kế và đào tạo kiến trúc chuyên nghiệp tại Việt Nam.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#8daa8c' }}
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#8daa8c] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#8daa8c' }}
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#8daa8c] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#8daa8c' }}
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#8daa8c] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-6">Liên Kết</h3>
            <ul className="space-y-3">
              {['Về chúng tôi', 'Dự án', 'Khóa học', 'Dịch vụ', 'Blog', 'Liên h���'].map((link, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-[#8daa8c] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-6">Dịch Vụ</h3>
            <ul className="space-y-3">
              {['Thiết kế kiến trúc', 'Thiết kế nội thất', 'Quy hoạch đô thị', 'Tư vấn kiến trúc', 'Giám sát thi công'].map((service, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    className="text-gray-400 hover:text-[#8daa8c] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-6">Liên Hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400" style={{ fontWeight: 300 }}>
                <MapPin className="w-5 h-5 mt-1 text-[#8daa8c] flex-shrink-0" />
                <span>123 Đường ABC, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400" style={{ fontWeight: 300 }}>
                <Phone className="w-5 h-5 text-[#8daa8c]" />
                <span>+84 123 456 789</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400" style={{ fontWeight: 300 }}>
                <Mail className="w-5 h-5 text-[#8daa8c]" />
                <span>info@archistudio.vn</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm" style={{ fontWeight: 300 }}>
              © 2025 Sketchlab. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#8daa8c] transition-colors" style={{ fontWeight: 300 }}>
                Chính sách bảo mật
              </a>
              <a href="#" className="text-gray-400 hover:text-[#8daa8c] transition-colors" style={{ fontWeight: 300 }}>
                Điều khoản sử dụng
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
