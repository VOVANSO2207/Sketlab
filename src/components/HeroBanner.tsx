"use client";
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { ConsultationForm } from './ConsultationForm';

export function HeroBanner() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://ant-plus.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2025/02/24170914/VIDEO-WEB1.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="container mx-auto px-6 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="inline-block px-6 py-2 border border-[#8daa8c] text-[#8daa8c] tracking-wider">
                  KIẾN TRÚC SÁNG TẠO
                </span>
              </motion.div>
              
              <motion.h1
                className="text-6xl md:text-8xl mb-6 tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ fontWeight: 300 }}
              >
                Kiến Trúc
                <br />
                <span className="text-[#8daa8c]" style={{ fontWeight: 600 }}>Đương Đại</span>
              </motion.h1>
              
              <motion.div
                className="w-24 h-0.5 bg-[#8daa8c] mx-auto mb-8"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              
              <motion.p
                className="text-lg md:text-xl mb-12 max-w-3xl mx-auto opacity-90"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                style={{ fontWeight: 300 }}
              >
                Khám phá vẻ đẹp của kiến trúc hiện đại. Chúng tôi mang đến những thiết kế đột phá, 
                kết hợp hoàn hảo giữa thẩm mỹ và công năng.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <motion.button
                  onClick={() => setIsFormOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 bg-[#8daa8c] text-white hover:bg-[#7a9a79] transition-all relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-white"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span className="relative z-10 group-hover:text-[#8daa8c] transition-colors">
                    Đăng ký tư vấn
                  </span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-4 border-2 border-white text-white hover:bg-white hover:text-black transition-all"
                >
                  Xem khóa học
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-white text-sm mb-2 tracking-widest" style={{ fontWeight: 300 }}>SCROLL</span>
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.div>
      </div>

      {/* Consultation Form Modal */}
      <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
}
