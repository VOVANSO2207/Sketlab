
"use client";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building2, Home, Ruler, PenTool } from 'lucide-react';

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: Building2,
      title: 'Thiết kế Công trình',
      description: 'Thiết kế các công trình thương mại, văn phòng và các tòa nhà cao tầng với tiêu chuẩn quốc tế.',
    },
    {
      icon: Home,
      title: 'Thiết kế Nhà ở',
      description: 'Tạo nên không gian sống lý tưởng cho gia đình với phong cách hiện đại và tiện nghi.',
    },
    {
      icon: Ruler,
      title: 'Quy hoạch Đô thị',
      description: 'Tư vấn và thiết kế quy hoạch các khu đô thị mới, khu dân cư và khu công nghiệp.',
    },
    {
      icon: PenTool,
      title: 'Nội thất',
      description: 'Thiết kế nội thất sang trọng, tối ưu hóa không gian và phù hợp với phong cách sống.',
    },
  ];

  return (
    <section ref={ref} id="services" className="relative py-20 text-white overflow-hidden">
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
            src="https://assets.mixkit.co/videos/preview/mixkit-modern-architecture-building-exterior-42495-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-0.5 bg-[#8daa8c]" />
            <span className="text-[#8daa8c] tracking-widest" style={{ fontWeight: 300 }}>DỊCH VỤ</span>
            <div className="w-16 h-0.5 bg-[#8daa8c]" />
          </div>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 300 }}>
            Dịch Vụ <span style={{ fontWeight: 600 }}>Của Chúng Tôi</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            Chúng tôi cung cấp đa dạng các dịch vụ thiết kế kiến trúc chuyên nghiệp, 
            từ quy hoạch đô thị đến thiết kế nội thất.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
              >
                <div className="relative bg-white/5 backdrop-blur-sm p-8 h-full border border-white/10 hover:border-[#8daa8c] transition-all">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#8daa8c] to-[#7a9a79] origin-bottom"
                    initial={{ scaleY: 0 }}
                    whileHover={{ scaleY: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-12 h-12 mb-6 text-[#8daa8c] group-hover:text-white transition-colors" />
                    </motion.div>
                    <h3 className="text-xl mb-4" style={{ fontWeight: 600 }}>{service.title}</h3>
                    <p className="text-gray-400 group-hover:text-white/90 transition-colors" style={{ fontWeight: 300 }}>
                      {service.description}
                    </p>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 border border-white/20 group-hover:border-white flex items-center justify-center text-sm opacity-40 group-hover:opacity-100 transition-opacity">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
