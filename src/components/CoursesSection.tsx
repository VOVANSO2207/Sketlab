"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Clock, Users, BookOpen, Play, TrendingUp } from 'lucide-react';

export function CoursesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const courses = [
    {
      image: 'https://images.unsplash.com/photo-1759850395414-a051e3601115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBzdHVkZW50JTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYwMjc2Mzc4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Kiến trúc cơ bản',
      instructor: 'KTS. Nguyễn Văn A',
      duration: '8 tuần',
      students: 250,
      lessons: 32,
      originalPrice: 3500000,
      price: 2500000,
      discount: 30,
      level: 'Cơ bản',
      description: 'Nền tảng vững chắc cho những ai bắt đầu với kiến trúc',
    },
    {
      image: 'https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ24lMjBjb3Vyc2UlMjBvbmxpbmV8ZW58MXx8fHwxNzYwMjc2Mzc5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Thiết kế nội thất',
      instructor: 'KTS. Trần Thị B',
      duration: '10 tuần',
      students: 180,
      lessons: 40,
      originalPrice: 4500000,
      price: 3200000,
      discount: 25,
      level: 'Trung cấp',
      description: 'Tạo không gian sống đẳng cấp với nội thất hiện đại',
    },
    {
      image: 'https://images.unsplash.com/photo-1721244654394-36a7bc2da288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBibHVlcHJpbnQlMjBkZXNpZ258ZW58MXx8fHwxNzYwMTgxMTA2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'AutoCAD chuyên sâu',
      instructor: 'KTS. Lê Văn C',
      duration: '6 tuần',
      students: 320,
      lessons: 24,
      originalPrice: 2500000,
      price: 1800000,
      discount: 28,
      level: 'Nâng cao',
      description: 'Thành thạo AutoCAD từ cơ bản đến nâng cao',
    },
    {
      image: 'https://www.pinterest.com/pin/3d-architectural-render-of-exterior--794815034212099906/',
      title: '3D Visualization',
      instructor: 'KTS. Phạm Minh D',
      duration: '12 tuần',
      students: 150,
      lessons: 48,
      originalPrice: 5000000,
      price: 3800000,
      discount: 24,
      level: 'Nâng cao',
      description: 'Kỹ năng render chuyên nghiệp với V-Ray và 3Ds Max',
    },
  ];

  return (
    <section ref={ref} id="courses" className="py-32 bg-black text-white relative overflow-hidden">
      {/* Animated Background Patterns */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(141, 170, 140, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(141, 170, 140, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(141, 170, 140, 0.2) 0%, transparent 50%)
          `,
          backgroundSize: '100% 100%',
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-0.5 bg-[#8daa8c]" />
            <span className="text-[#8daa8c] tracking-widest" style={{ fontWeight: 300 }}>KHÓA HỌC</span>
            <div className="w-16 h-0.5 bg-[#8daa8c]" />
          </div>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 300 }}>
            Khóa Học <span style={{ fontWeight: 600 }}>Kiến Trúc</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            Nâng cao kỹ năng thiết kế của bạn với các khóa học chuyên nghiệp
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -15 }}
            >
              {/* Card with gradient border effect */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden h-full hover:border-[#8daa8c]/50 transition-all duration-500">
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <motion.div
                    className="h-full"
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Overlay with play button */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-[#8daa8c] flex items-center justify-center cursor-pointer"
                    >
                      <Play className="w-6 h-6 text-white ml-1" fill="white" />
                    </motion.div>
                  </motion.div>

                  {/* Level badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-sm text-white text-xs tracking-wider border border-white/20">
                    {course.level}
                  </div>
                  
                  {/* Discount badge */}
                  <div className="absolute top-4 right-4">
                    <motion.div
                      className="bg-red-500 text-white px-3 py-1 text-sm"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span style={{ fontWeight: 700 }}>-{course.discount}%</span>
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl mb-2" style={{ fontWeight: 600 }}>{course.title}</h3>
                  
                  <p className="text-gray-400 text-sm mb-4" style={{ fontWeight: 300 }}>{course.instructor}</p>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed" style={{ fontWeight: 300 }}>
                    {course.description}
                  </p>

                  {/* Price Section */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-3">
                      <span className="text-gray-500 line-through text-sm" style={{ fontWeight: 300 }}>
                        {course.originalPrice.toLocaleString('vi-VN')}đ
                      </span>
                      <span className="text-[#8daa8c] text-2xl" style={{ fontWeight: 700 }}>
                        {course.price.toLocaleString('vi-VN')}đ
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-6 text-sm text-gray-400">
                    <div className="flex flex-col items-center p-2 bg-white/5">
                      <Clock className="w-4 h-4 text-[#8daa8c] mb-1" />
                      <span style={{ fontWeight: 300 }}>{course.duration}</span>
                    </div>
                    <div className="flex flex-col items-center p-2 bg-white/5">
                      <BookOpen className="w-4 h-4 text-[#8daa8c] mb-1" />
                      <span style={{ fontWeight: 300 }}>{course.lessons} bài</span>
                    </div>
                    <div className="flex flex-col items-center p-2 bg-white/5">
                      <Users className="w-4 h-4 text-[#8daa8c] mb-1" />
                      <span style={{ fontWeight: 300 }}>{course.students}+</span>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-[#8daa8c] text-white hover:bg-[#7a9a79] transition-all relative overflow-hidden group/btn"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="relative z-10 group-hover/btn:text-[#8daa8c] transition-colors flex items-center justify-center gap-2" style={{ fontWeight: 500 }}>
                      Đăng ký ngay
                      <TrendingUp className="w-4 h-4" />
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 border-2 border-[#8daa8c] text-white hover:bg-[#8daa8c] transition-all"
          >
            <span style={{ fontWeight: 500 }}>Xem tất cả khóa học</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
