import Image from "next/image";
import { useState } from "react"; // ✅ 引入 useState

type ProjectCardProps = {
  title: string;
  image: string;
  techStack: string[];
  href?: string;
};

export function ProjectCard({ title, image, techStack, href }: ProjectCardProps) {
  const [isZoomed, setIsZoomed] = useState(false); // ✅ 状态控制

  // 如果有链接，用 a 标签；否则用 div
  const CardWrapper = href ? "a" : "div";
  const cardProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <>
      <CardWrapper
        {...cardProps}
        // ✅ 如果没有链接，点击时触发放大
        onClick={!href ? () => setIsZoomed(true) : undefined}
        className={`relative group block overflow-hidden rounded-2xl bg-[#fdfdfd] transition-shadow hover:shadow-lg ${!href ? 'cursor-zoom-in' : ''}`}
      >
        {/* Image Area */}
        <div className="relative aspect-2/1 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 w-full flex items-center justify-between px-4 py-1 bg-white/80">
          <h4 className="heading-card text-black">{title}</h4>
          <div className="flex items-center gap-3">
            {techStack.map((tech) => (
              <span key={tech} className="text-meta">{tech}</span>
            ))}
          </div>
        </div>
      </CardWrapper>

      {/* ✅ 放大后的全屏弹窗 */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsZoomed(false)} // 点击背景关闭
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image 
              src={image} 
              alt={title} 
              fill 
              className="object-contain" 
            />
            <button 
              className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-gray-300"
              onClick={() => setIsZoomed(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}