import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface SpotlightEffectProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * 聚光灯效果组件
 * 创建动态的聚光灯光晕效果，突出"舞台"主题
 */
export default function SpotlightEffect({ children, className = '' }: SpotlightEffectProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // 跟踪鼠标位置
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 主聚光灯效果 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
            rgba(255, 255, 255, 0.1) 0%, 
            rgba(255, 255, 255, 0.05) 40%, 
            transparent 80%)`
        }}
        animate={{
          opacity: isHovered ? 1 : 0.3
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* 中心聚光灯 - 固定在屏幕中央 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(800px circle at 50% 40%, 
            rgba(255, 255, 255, 0.08) 0%, 
            rgba(255, 255, 255, 0.03) 50%, 
            transparent 100%)`
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* 边缘光晕效果 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, 
            transparent 0deg, 
            rgba(255, 255, 255, 0.02) 90deg, 
            transparent 180deg, 
            rgba(255, 255, 255, 0.02) 270deg, 
            transparent 360deg)`
        }}
        animate={{
          rotate: [0, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* 内容区域 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}