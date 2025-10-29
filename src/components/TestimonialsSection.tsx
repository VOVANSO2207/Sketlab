"use client";
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(2);

  const testimonials = [
    {
      name: 'Nguyễn Minh Anh',
      role: 'Kiến trúc sư',
      image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHdvbWFufGVufDF8fHx8MTc2MDE4ODExOHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      comment: 'Khóa học thiết kế kiến trúc ở đây thực sự tuyệt vời. Giảng viên nhiệt tình, kiến thức thực tế và ứng dụng cao. Tôi đã có thể áp dụng ngay vào công việc.',
      course: 'Kiến trúc cơ bản',
    },
    {
      name: 'Trần Hoàng Nam',
      role: 'Sinh viên',
      image: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbnxlbnwxfHx8fDE3NjAyMTM2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      comment: 'Nội dung khóa học rất chất lượng, từ cơ bản đến nâng cao. Đặc biệt là phần thực hành rất bổ ích, giúp tôi tự tin hơn trong thiết kế.',
      course: 'AutoCAD chuyên sâu',
    },
    {
      name: 'Lê Thị Hương',
      role: 'Designer',
      image: 'https://images.unsplash.com/photo-1754531976828-69e42ce4e0d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGFzaWFufGVufDF8fHx8MTc2MDI3NjM4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      comment: 'Một trải nghiệm học tập tuyệt vời! Giảng viên chuyên nghiệp, tài liệu phong phú và cộng đồng học viên rất tích cực. Tôi rất hài lòng với khóa học này.',
      course: 'Thiết kế nội thất',
    },
    {
      name: 'Phạm Văn Đức',
      role: 'Học viên',
      image: 'https://images.unsplash.com/photo-1561065533-316e3142d586?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXQlMjBoYXBweXxlbnwxfHx8fDE3NjAyNzc4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      comment: 'Chương trình đào tạo rất bài bản và chuyên nghiệp. Tôi đã học được rất nhiều kiến thức mới và kỹ năng thiết kế.',
      course: 'Sketchlab Archviz',
    },
    {
      name: 'Hoàng Thị Mai',
      role: 'Kiến trúc sư',
      image: 'https://images.unsplash.com/photo-1584554376766-ac0f2c65e949?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYwMTk1NjEzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      comment: 'Khóa học đã giúp tôi nâng cao kỹ năng render và visualization. Đội ngũ giảng viên rất tận tâm và hỗ trợ tốt.',
      course: '3D Visualization',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + testimonials.length) % testimonials.length;
    
    if (diff === 0) {
      // Center card
      return {
        scale: 1,
        rotateY: 0,
        z: 0,
        opacity: 1,
      };
    } else if (diff === 1 || diff === testimonials.length - 1) {
      // Side cards
      const isRight = diff === 1;
      return {
        scale: 0.85,
        rotateY: isRight ? -25 : 25,
        z: -200,
        opacity: 0.7,
      };
    } else {
      // Hidden cards
      return {
        scale: 0.7,
        rotateY: 0,
        z: -400,
        opacity: 0,
      };
    }
  };

  return (
    <section ref={ref} className="py-32 bg-black text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 border border-[#8daa8c]/20" />
      <div className="absolute bottom-20 right-10 w-48 h-48 border border-[#8daa8c]/20" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#8daa8c] mb-4 block tracking-widest" style={{ fontWeight: 300 }}>NHẬN XÉT</span>
          <h2 className="text-5xl md:text-6xl mb-6" style={{ fontWeight: 300 }}>
            Học Viên Nói <span style={{ fontWeight: 600 }}>Về Chúng Tôi</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto" style={{ fontWeight: 300 }}>
            Những phản hồi chân thực từ học viên đã tham gia các khóa học của chúng tôi
          </p>
        </motion.div>

        {/* 3D Carousel */}
        <div className="relative h-[500px] flex items-center justify-center perspective-1000">
          <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
            {testimonials.map((testimonial, index) => {
              const style = getCardStyle(index);
              const diff = (index - currentIndex + testimonials.length) % testimonials.length;
              const xOffset = diff === 0 ? 0 : diff === 1 ? 350 : diff === testimonials.length - 1 ? -350 : 0;

              return (
                <motion.div
                  key={index}
                  className="absolute w-full max-w-md"
                  initial={{ opacity: 0 }}
                  animate={{
                    scale: style.scale,
                    rotateY: style.rotateY,
                    z: style.z,
                    opacity: style.opacity,
                    x: xOffset,
                  }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-10 relative">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-20">
                      <Quote className="w-16 h-16 text-[#8daa8c]" />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-8">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#8daa8c] text-[#8daa8c]" />
                      ))}
                    </div>

                    {/* Comment */}
                    <p className="text-gray-300 mb-8 leading-relaxed italic" style={{ fontWeight: 300 }}>
                      {testimonial.comment}
                    </p>

                    {/* Course Badge */}
                    <div className="mb-8">
                      <span className="inline-block px-4 py-2 bg-[#8daa8c]/20 text-[#8daa8c] text-sm border border-[#8daa8c]/30">
                        {testimonial.course}
                      </span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-8 border-t border-white/10">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#8daa8c]">
                        <ImageWithFallback
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="mb-1" style={{ fontWeight: 600 }}>{testimonial.name}</h4>
                        <p className="text-sm text-gray-400" style={{ fontWeight: 300 }}>{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div className="absolute bottom-0 left-0 w-20 h-20 border-l-2 border-b-2 border-[#8daa8c]" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-[#8daa8c] hover:border-[#8daa8c] transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-12 h-12 border border-white/30 flex items-center justify-center hover:bg-[#8daa8c] hover:border-[#8daa8c] transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-[#8daa8c] w-8' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
