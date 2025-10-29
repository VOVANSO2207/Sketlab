"use client";
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Award, BookOpen, Users, Star, Mail, Linkedin, GraduationCap, ChevronLeft, ChevronRight, X, Eye } from 'lucide-react';

// Định nghĩa interface cho Instructor
interface Instructor {
  id: number;
  name: string;
  title: string;
  role: string;
  experience: string;
  courses: number;
  students: number;
  rating: number;
  specialties: string[];
  bio: string;
  email: string;
  linkedin: string;
  images: string[];
}

export function InstructorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedInstructor, setSelectedInstructor] = useState<Instructor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const instructors: Instructor[] = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      title: 'KTS',
      role: 'Kiến trúc Đương Đại',
      experience: '15 năm',
      courses: 12,
      students: 2500,
      rating: 4.9,
      specialties: ['Thiết kế đương đại', 'Quy hoạch', 'BIM'],
      bio: 'Kiến trúc sư hàng đầu với 15 năm kinh nghiệm trong thiết kế đương đại và quy hoạch đô thị. Đã tham gia nhiều dự án lớn tại Việt Nam và quốc tế, giảng dạy tại các trường đại học danh tiếng.',
      email: 'nguyenvana@example.com',
      linkedin: 'https://www.linkedin.com/in/nguyenvana',
      images: [
        'https://images.unsplash.com/photo-1701463387028-3947648f1337?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3QlMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjAxOTQwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1434528792386-3e1db011e98d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
      ],
    },
    {
      id: 2,
      name: 'Trần Thị B',
      title: 'KTS',
      role: 'Thiết kế Nội Thất',
      experience: '12 năm',
      courses: 10,
      students: 1800,
      rating: 4.8,
      specialties: ['Nội thất cao cấp', 'Hospitality', 'Retail'],
      bio: 'Chuyên gia thiết kế nội thất với phong cách tinh tế, tập trung vào không gian sống cao cấp và dự án khách sạn. Đã hợp tác với nhiều thương hiệu quốc tế.',
      email: 'tranthib@example.com',
      linkedin: 'https://www.linkedin.com/in/tranthib',
      images: [
        'https://images.unsplash.com/photo-1581065178026-390bc4e78dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc2MDI3Nzg2NHww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1971&q=80',
      ],
    },
    {
      id: 3,
      name: 'Lê Văn C',
      title: 'KTS',
      role: 'AutoCAD & BIM',
      experience: '10 năm',
      courses: 8,
      students: 3200,
      rating: 4.7,
      specialties: ['AutoCAD', 'Revit', 'Tekla'],
      bio: 'Chuyên viên BIM và AutoCAD với kinh nghiệm thực tế từ các công ty xây dựng lớn. Giảng viên được yêu thích nhờ phương pháp dạy thực hành.',
      email: 'levanc@example.com',
      linkedin: 'https://www.linkedin.com/in/levanc',
      images: [
        'https://images.unsplash.com/photo-1598268012815-ae21095df31b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjAyNjUzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1973&q=80',
      ],
    },
    {
      id: 4,
      name: 'Phạm Minh D',
      title: 'KTS',
      role: '3D Visualization',
      experience: '8 năm',
      courses: 6,
      students: 1500,
      rating: 4.9,
      specialties: ['3Ds Max', 'V-Ray', 'Corona'],
      bio: 'Nghệ sĩ 3D visualization chuyên tạo render chân thực. Đã làm việc cho các studio quốc tế và giảng dạy kỹ thuật render nâng cao.',
      email: 'phamminhd@example.com',
      linkedin: 'https://www.linkedin.com/in/phamminhd',
      images: [
        'https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MDIyMTQ3MXww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1506869640319-fe1a24fd76e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2076&q=80',
      ],
    },
  ];

  const openModal = (instructor: Instructor) => {
    setSelectedInstructor(instructor);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedInstructor(null);
  };

  // Reset currentImageIndex when selectedInstructor changes to null
  useEffect(() => {
    if (!selectedInstructor) {
      setCurrentImageIndex(0);
    }
  }, [selectedInstructor]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isModalOpen]);

  const selected = selectedInstructor;

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#8daa8c]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#8daa8c]/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-[#8daa8c]/3 rounded-full blur-3xl animate-ping" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#8daa8c]/10 border border-[#8daa8c]/20 mb-8 rounded-full shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <GraduationCap className="w-5 h-5 text-[#8daa8c]" />
            <span className="text-[#8daa8c] tracking-widest text-sm font-semibold">
              ĐỘI NGŨ GIẢNG VIÊN
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-7xl mb-6 text-black font-light">
            Học Từ <span className="font-bold text-[#8daa8c]">Chuyên Gia</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-xl font-light leading-relaxed">
            Đội ngũ giảng viên giàu kinh nghiệm, tâm huyết và luôn đồng hành cùng học viên trên hành trình chinh phục kiến trúc hiện đại.
          </p>
        </motion.div>

        {/* Instructors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              className="group relative cursor-pointer rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              onClick={() => openModal(instructor)}
            >
              <motion.div
                className="relative bg-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden rounded-2xl"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Image Container */}
                <div className="relative h-80 lg:h-96 overflow-hidden rounded-2xl">
                  {/* Image */}
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <ImageWithFallback
                      src={instructor.images[0]}
                      alt={instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Rating Badge */}
                  <motion.div
                    className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-black px-4 py-2 shadow-2xl flex items-center gap-1.5 rounded-full"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold">{instructor.rating}</span>
                  </motion.div>
                  {/* Basic Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <motion.div
                      className="inline-block px-4 py-2 bg-[#8daa8c] mb-3 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-xs tracking-wider font-semibold">
                        {instructor.title}
                      </span>
                    </motion.div>
                    <h3 className="text-2xl mb-1 font-bold">{instructor.name}</h3>
                    <p className="text-sm opacity-90 font-light">{instructor.role}</p>
                  </div>
                  {/* Hover Teaser */}
                  <motion.div
                    className="absolute inset-0 p-6 flex flex-col justify-end text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                        { icon: BookOpen, value: instructor.courses, label: 'Khóa học' },
                        { icon: Users, value: `${instructor.students}+`, label: 'Học viên' },
                        { icon: Award, value: instructor.experience, label: 'Kinh nghiệm' },
                      ].map((stat, idx) => (
                        <motion.div
                          key={idx}
                          className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-xl"
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileHover={{ scale: 1.1, opacity: 1 }}
                          transition={{ delay: 0.1 + idx * 0.1 }}
                        >
                          <stat.icon className="w-5 h-5 mx-auto mb-2 text-[#8daa8c]" />
                          <div className="text-lg font-bold">{stat.value}</div>
                          <div className="text-xs opacity-80 font-medium">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                    <motion.button
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-[#8daa8c]/90 text-white rounded-full font-semibold hover:bg-[#8daa8c]"
                      whileHover={{ scale: 1.05 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Eye className="w-4 h-4" />
                      Xem chi tiết
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Details */}
      <AnimatePresence>
        {isModalOpen && selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <motion.button
                className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white"
                onClick={closeModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-6 h-6 text-gray-600" />
              </motion.button>

              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                {/* Image Gallery */}
                <div className="relative">
                  <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
                    {selected.images.map((img, idx) => (
                      <motion.img
                        key={idx}
                        src={img}
                        alt={`${selected.name} - Ảnh ${idx + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: idx === currentImageIndex ? 1 : 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    ))}
                    {/* Nav Arrows */}
                    <motion.button
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
                      onClick={() => setCurrentImageIndex((prev) => (prev - 1 + selected.images.length) % selected.images.length)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </motion.button>
                    <motion.button
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg"
                      onClick={() => setCurrentImageIndex((prev) => (prev + 1) % selected.images.length)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ChevronRight className="w-6 h-6 text-gray-600" />
                    </motion.button>
                  </div>
                  {/* Dots */}
                  <div className="flex justify-center gap-2 mt-4">
                    {selected.images.map((_, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          idx === currentImageIndex ? 'bg-[#8daa8c]' : 'bg-gray-300'
                        }`}
                        animate={{ scale: idx === currentImageIndex ? 1.4 : 1 }}
                        whileHover={{ scale: 1.2 }}
                      />
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-6">
                  <div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">{selected.name}</h1>
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${i < Math.floor(selected.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="text-lg font-semibold text-gray-600">({selected.rating})</span>
                    </div>
                    <p className="text-2xl text-[#8daa8c] font-semibold">{selected.title} - {selected.role}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { icon: BookOpen, value: selected.courses, label: 'Khóa học' },
                      { icon: Users, value: `${selected.students}+`, label: 'Học viên' },
                      { icon: Award, value: selected.experience, label: 'Kinh nghiệm' },
                    ].map((stat, idx) => (
                      <motion.div
                        key={idx}
                        className="text-center p-4 bg-gray-50 rounded-xl"
                        whileHover={{ scale: 1.05 }}
                      >
                        <stat.icon className="w-6 h-6 mx-auto mb-2 text-[#8daa8c]" />
                        <div className="text-2xl font-bold">{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Specialties */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-gray-900">Chuyên môn</h3>
                    <div className="flex flex-wrap gap-2">
                      {selected.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-[#8daa8c]/10 text-[#8daa8c] rounded-full text-sm font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bio */}
                  {selected.bio && (
                    <p className="text-gray-600 leading-relaxed font-light">{selected.bio}</p>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <motion.button
                      onClick={() => window.location.href = `mailto:${selected.email}`}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-[#8daa8c] text-white rounded-xl font-semibold hover:bg-[#7a9a79] transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Mail className="w-5 h-5" />
                      Liên hệ
                    </motion.button>
                    <motion.a
                      href={selected.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center bg-[#0077b5] text-white rounded-xl hover:bg-[#005a8b]"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}