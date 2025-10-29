export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl md:text-5xl mb-6" style={{ fontWeight: 700 }}>Khóa học</h1>
        <p className="text-gray-600 mb-8" style={{ fontWeight: 300 }}>
          Chọn một chương trình để xem chi tiết: Archviz hoặc Academy.
        </p>
        <div className="flex gap-4">
          <a href="/courses/archviz" className="px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition">Sketchlab Archviz</a>
          <a href="/courses/academy" className="px-6 py-3 border-2 border-black hover:bg-black hover:text-white transition">Sketchlab Academy</a>
        </div>
      </div>
    </main>
  );
}


