"use client"
import { X, User, Mail, Phone, MessageSquare, Sparkles, Loader2, CheckCircle } from "lucide-react"
import type React from "react"

import { useState, useEffect } from "react"

interface ConsultationFormProps {
  isOpen: boolean
  onClose: () => void
}

interface Particle {
  id: number
  left: number
  top: number
  duration: number
  delay: number
  size: number
}

export function ConsultationForm({ isOpen, onClose }: ConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [particles, setParticles] = useState<Particle[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (isOpen) {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 2,
        size: Math.random() * 8 + 4,
      }))
      setParticles(newParticles)
      setIsLoading(false)
      setIsSuccess(false)
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("Form submitted:", formData)
    setIsLoading(false)
    setIsSuccess(true)

    // Auto close after 2 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" })
      setIsSuccess(false)
      onClose()
    }, 20000)
  }

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300 overflow-hidden"
        onClick={onClose}
      >
        {/* Particle animation background */}
        <style>{`
          @keyframes float-particle {
            0% {
              transform: translateY(0) translateX(0);
              opacity: 0.5;
            }
            50% {
              opacity: 0.8;
            }
            100% {
              transform: translateY(-100vh) translateX(100px);
              opacity: 0;
            }
          }
          .particle {
            animation: float-particle linear infinite;
            position: absolute;
            background: #8daa8c;
            border-radius: 50%;
            pointer-events: none;
          }
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          .animate-spin {
            animation: spin 1s linear infinite;
          }
          @keyframes slide-in-toast {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .toast-enter {
            animation: slide-in-toast 0.3s ease-out;
          }
        `}</style>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="w-full max-w-2xl pointer-events-auto bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#8daa8c]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#8daa8c]/5 rounded-full blur-3xl" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 hover:bg-[#8daa8c] text-gray-600 hover:text-white flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div className="relative z-10 p-6 sm:p-8 md:p-12">
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 sm:py-16">
                <div className="mb-6 animate-in zoom-in-50 duration-500">
                  <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-[#8daa8c]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3 text-center">Gửi thành công!</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center max-w-sm">
                  Cảm ơn bạn đã đăng ký tư vấn. Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8 sm:mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#8daa8c] flex-shrink-0" />
                    <div className="h-px flex-1 bg-gradient-to-r from-[#8daa8c] to-transparent" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-2">Đăng Ký Tư Vấn</h2>
                  <p className="text-sm sm:text-base text-gray-600 font-light">
                    Để lại thông tin, chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block mb-2 text-gray-700 text-sm font-medium">
                        Họ và tên <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#8daa8c] transition-colors" />
                        <input
                          type="text"
                          required
                          disabled={isLoading}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg focus:border-[#8daa8c] focus:outline-none transition-all bg-white hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="Nguyễn Văn A"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block mb-2 text-gray-700 text-sm font-medium">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <div className="relative group">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#8daa8c] transition-colors" />
                        <input
                          type="email"
                          required
                          disabled={isLoading}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg focus:border-[#8daa8c] focus:outline-none transition-all bg-white hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-gray-700 text-sm font-medium">
                      Số điện thoại <span className="text-red-500">*</span>
                    </label>
                    <div className="relative group">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#8daa8c] transition-colors" />
                      <input
                        type="tel"
                        required
                        disabled={isLoading}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg focus:border-[#8daa8c] focus:outline-none transition-all bg-white hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        placeholder="0123 456 789"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-gray-700 text-sm font-medium">Nội dung tư vấn</label>
                    <div className="relative group">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#8daa8c] transition-colors" />
                      <textarea
                        disabled={isLoading}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-lg focus:border-[#8daa8c] focus:outline-none transition-all resize-none bg-white hover:border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        rows={4}
                        placeholder="Bạn cần tư vấn về dịch vụ nào?"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#8daa8c] to-[#7a9a79] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mt-8 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Đang gửi...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-5 h-5" />
                        <span>Gửi yêu cầu tư vấn</span>
                      </>
                    )}
                  </button>
                </form>

                <p className="text-center mt-6 text-xs sm:text-sm text-gray-500 font-light">
                  Thông tin của bạn sẽ được bảo mật tuyệt đối
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
