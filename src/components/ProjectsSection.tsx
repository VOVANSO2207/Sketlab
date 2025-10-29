
"use client";
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { MapPin, Calendar, Layers, ChevronDown, ChevronUp } from 'lucide-react';

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      image: 'https://images.unsplash.com/photo-1654371404345-845d8aa147f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjAxNjkyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Modern Office Tower',
      category: 'Thương mại',
      location: 'Hà Nội',
      area: '5,000 m²',
      year: '2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1690489965043-ec15758cce71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMGx1eHVyeXxlbnwxfHx8fDE3NjAxNzgyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Luxury Interior',
      category: 'Nội thất',
      location: 'TP.HCM',
      area: '320 m²',
      year: '2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1719446342254-1122e42e64d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwdmlsbGElMjBob3VzZXxlbnwxfHx8fDE3NjAyNzYzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Contemporary Villa',
      category: 'Nhà ở',
      location: 'Đà Nẵng',
      area: '450 m²',
      year: '2023'
    },
    {
      image: 'https://images.unsplash.com/photo-1616418534243-ab757ff8ce3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYwMTcyMzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Urban Complex',
      category: 'Quy hoạch',
      location: 'Nha Trang',
      area: '12,000 m²',
      year: '2023'
    },
    {
      image: 'https://images.unsplash.com/photo-1624226784657-1e30fccdd59b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBleHRlcmlvcnxlbnwxfHx8fDE3NjAyMDM5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Modern Residence',
      category: 'Nhà ở',
      location: 'Hải Phòng',
      area: '380 m²',
      year: '2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1622015663381-d2e05ae91b72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2aWxsYSUyMGRlc2lnbnxlbnwxfHx8fDE3NjAyNzc4NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Resort Villa',
      category: 'Thương mại',
      location: 'Phú Quốc',
      area: '2,500 m²',
      year: '2023'
    },
    {
      image: 'https://images.unsplash.com/photo-1598257212525-34d72ccf27c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwaG91c2UlMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzYwMjc3ODYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Minimalist House',
      category: 'Nhà ở',
      location: 'Cần Thơ',
      area: '280 m²',
      year: '2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1560922604-d08a31f8f7d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYnVpbGRpbmclMjBtb2Rlcm58ZW58MXx8fHwxNzYwMjQ0MjM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Commercial Center',
      category: 'Thương mại',
      location: 'Biên Hòa',
      area: '8,000 m²',
      year: '2023'
    },
    {
      image: 'https://images.unsplash.com/photo-1639545264290-0e526b1c06fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjAyMjQ4Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Apartment Complex',
      category: 'Nhà ở',
      location: 'Thủ Đức',
      area: '15,000 m²',
      year: '2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1505798577917-a65157d3320a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBtb2Rlcm4lMjBidWlsZGluZ3xlbnwxfHx8fDE3NjAyNzc4NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Glass Tower',
      category: 'Thương mại',
      location: 'Hà Nội',
      area: '6,800 m²',
      year: '2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1524338198850-8a2ff63aaceb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBob3VzZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjAyNzc4Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Garden House',
      category: 'Nhà ở',
      location: 'Đà Lạt',
      area: '350 m²',
      year: '2023'
    },
    {
      image: 'https://images.unsplash.com/photo-1524230659092-07f99a75c013?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcmNoaXRlY3R1cmUlMjB2aWxsYXxlbnwxfHx8fDE3NjAyMzk1MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Seaside Villa',
      category: 'Nhà ở',
      location: 'Vũng Tàu',
      area: '520 m²',
      year: '2024'
    },
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 12);

  return (
    <section ref={ref} id="projects" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-0.5 bg-[#8daa8c]" />
            <span className="text-[#8daa8c] tracking-widest" style={{ fontWeight: 300 }}>DỰ ÁN</span>
            <div className="w-16 h-0.5 bg-[#8daa8c]" />
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 text-black" style={{ fontWeight: 300 }}>
            Sản Phẩm <span style={{ fontWeight: 600 }}>Nổi Bật</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            Khám phá những dự án kiến trúc tiêu biểu đã được chúng tôi thực hiện
          </p>
        </motion.div>
      </div>

      {/* Projects Grid - Full Width */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden group aspect-[4/5] cursor-pointer"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05, duration: 0.6 }}
            >
              {/* Image - Always visible */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Info - Only visible on hover */}
              <motion.div
                className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ y: 20 }}
                whileHover={{ y: 0 }}
              >
                <div className="text-white">
                  {/* Category Badge */}
                  <motion.span 
                    className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs tracking-wider mb-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.category}
                  </motion.span>
                  
                  <h3 className="text-2xl mb-3" style={{ fontWeight: 600 }}>
                    {project.title}
                  </h3>
                  
                  {/* Project Details */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5 text-sm">
                      <MapPin className="w-4 h-4 text-white/80" />
                      <span style={{ fontWeight: 300 }}>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm">
                      <Layers className="w-4 h-4 text-white/80" />
                      <span style={{ fontWeight: 300 }}>{project.area}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-sm">
                      <Calendar className="w-4 h-4 text-white/80" />
                      <span style={{ fontWeight: 300 }}>Năm {project.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* View More/Less Button */}
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            onClick={() => setShowAll(!showAll)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-12 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-all relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-[#8daa8c]"
              initial={{ y: '100%' }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10 group-hover:text-white" style={{ fontWeight: 500 }}>
              {showAll ? 'Thu gọn' : 'Xem thêm dự án'}
            </span>
            {showAll ? (
              <ChevronUp className="w-5 h-5 relative z-10 group-hover:text-white" />
            ) : (
              <ChevronDown className="w-5 h-5 relative z-10 group-hover:text-white" />
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
