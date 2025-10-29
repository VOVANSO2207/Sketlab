"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Users, Briefcase, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Briefcase, value: '500+', label: 'Dự án hoàn thành', color: 'from-blue-500 to-blue-600' },
    { icon: Users, value: '1000+', label: 'Học viên đào tạo', color: 'from-green-500 to-green-600' },
    { icon: Award, value: '50+', label: 'Giải thưởng', color: 'from-yellow-500 to-yellow-600' },
    { icon: TrendingUp, value: '15+', label: 'Năm kinh nghiệm', color: 'from-purple-500 to-purple-600' },
  ];

  const features = [
    'Đội ngũ kiến trúc sư chuyên nghiệp',
    'Công nghệ thiết kế hiện đại',
    'Cam kết chất lượng tuyệt đối',
    'Hỗ trợ tư vấn 24/7',
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#8daa8c]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#8daa8c]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-0.5 bg-[#8daa8c]" />
            <span className="text-[#8daa8c] tracking-widest" style={{ fontWeight: 300 }}>
              VỀ CHÚNG TÔI
            </span>
            <div className="w-16 h-0.5 bg-[#8daa8c]" />
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 text-black" style={{ fontWeight: 300 }}>
            Sáng Tạo <span style={{ fontWeight: 600 }}>Không Giới Hạn</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-600 text-lg leading-relaxed mb-6" style={{ fontWeight: 300 }}>
              CAT Academy là đơn vị tiên phong trong lĩnh vực thiết kế và đào tạo kiến trúc. 
              Chúng tôi kết hợp giữa nghệ thuật, công nghệ và sự bền vững để tạo ra những 
              không gian sống đẳng cấp.
            </p>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8" style={{ fontWeight: 300 }}>
              Với đội ngũ kiến trúc sư giàu kinh nghiệm và đam mê, chúng tôi cam kết mang đến 
              những giải pháp thiết kế tối ưu và các chương trình đào tạo chất lượng cao.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <CheckCircle2 className="w-6 h-6 text-[#8daa8c] flex-shrink-0" />
                  <span className="text-gray-700" style={{ fontWeight: 400 }}>{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-[#8daa8c] text-white hover:bg-[#7a9a79] transition-all"
            >
              <span style={{ fontWeight: 500 }}>Tìm hiểu thêm</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right - Stats Cards */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[#8daa8c]">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div className="text-4xl mb-2 text-black" style={{ fontWeight: 700 }}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600" style={{ fontWeight: 400 }}>
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
