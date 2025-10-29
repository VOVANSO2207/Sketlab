"use client"
import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect } from "react"
import { ImageWithFallback } from "../figma/ImageWithFallback"

interface ProjectImage {
  url: string
  alt: string
}

interface Project {
  title: string
  category: string
  location: string
  area: string
  year: string
  images: ProjectImage[]
}

interface ProjectLightboxProps {
  isOpen: boolean
  project: Project | null
  currentImageIndex: number
  onClose: () => void
  onPrevImage: () => void
  onNextImage: () => void
}

export function ProjectLightbox({
  isOpen,
  project,
  currentImageIndex,
  onClose,
  onPrevImage,
  onNextImage,
}: ProjectLightboxProps) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft") onPrevImage()
      if (e.key === "ArrowRight") onNextImage()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, onPrevImage, onNextImage])

  if (!project) return null

  const currentImage = project.images[currentImageIndex]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Main Content */}
          <motion.div
            className="w-full max-w-6xl max-h-[90vh] flex flex-col"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container */}
            <div className="relative flex-1 bg-black rounded-lg overflow-hidden mb-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  className="w-full h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ImageWithFallback
                    src={currentImage.url || "/placeholder.svg"}
                    alt={currentImage.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Image Counter */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-4 py-2 rounded text-white text-sm">
                {currentImageIndex + 1} / {project.images.length}
              </div>

              {/* Close Button */}
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-4 left-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Navigation Buttons */}
              {project.images.length > 1 && (
                <>
                  <motion.button
                    onClick={onPrevImage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>

                  <motion.button
                    onClick={onNextImage}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full text-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </>
              )}

              {/* Thumbnail Strip */}
              {project.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {project.images.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        // This would need to be handled by parent component
                        // For now, we'll just show the indicator
                      }}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/70"
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Project Info */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/20 rounded text-xs tracking-wider mb-3">
                    {project.category}
                  </span>
                  <h2 className="text-3xl mb-2" style={{ fontWeight: 600 }}>
                    {project.title}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-white/60 mb-1">Vị trí</p>
                  <p style={{ fontWeight: 500 }}>{project.location}</p>
                </div>
                <div>
                  <p className="text-white/60 mb-1">Diện tích</p>
                  <p style={{ fontWeight: 500 }}>{project.area}</p>
                </div>
                <div>
                  <p className="text-white/60 mb-1">Năm thực hiện</p>
                  <p style={{ fontWeight: 500 }}>{project.year}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
