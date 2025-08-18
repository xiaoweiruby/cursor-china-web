import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SpotlightEffect from '@/components/common/SpotlightEffect';
import { ArrowRight, Code, Zap } from 'lucide-react';

/**
 * 首页Hero区域组件
 * 包含聚光灯效果、主标题、副标题和CTA按钮
 */
export default function HeroSection() {
  // 代码片段装饰
  const codeSnippets = [
    'const cursor = new AI();',
    'cursor.generate("amazing-code");',
    'export default function App() {',
    'return <Innovation />;',
    'const future = await cursor.create();',
    '// 让AI成为你的编程伙伴'
  ];

  return (
    <SpotlightEffect className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* 代码背景装饰 */}
      <div className="absolute inset-0 opacity-5">
        {codeSnippets.map((snippet, index) => (
          <motion.div
            key={index}
            className="absolute text-white font-mono text-sm"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0, 0.3, 0],
              y: [20, 0, -20]
            }}
            transition={{
              duration: 8,
              delay: index * 1.5,
              repeat: Infinity,
              repeatDelay: 10
            }}
          >
            {snippet}
          </motion.div>
        ))}
      </div>

      {/* 主内容区域 */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* 图标装饰 */}
        <motion.div
          className="flex justify-center items-center space-x-4 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <Code className="w-8 h-8 text-white" />
          </motion.div>
          <motion.div
            className="p-3 rounded-full bg-white/10 backdrop-blur-sm"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Zap className="w-8 h-8 text-white" />
          </motion.div>
        </motion.div>

        {/* 主标题 */}
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <span className="block">首届 Cursor 中文社区</span>
          <motion.span 
            className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            征文大赛
          </motion.span>
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-4 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          为你把聚光灯打开
        </motion.p>

        {/* 描述文字 */}
        <motion.p
          className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          展示你的创新项目，分享你的技术洞察，让 AI 编程的力量在中文开发者社区中闪耀。
          <br className="hidden sm:block" />
          这里是属于每一位开发者的舞台。
        </motion.p>

        {/* CTA按钮组 */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.button
            className="group bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-800 flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('intro');
              if (element) {
                const headerHeight = 80;
                const elementPosition = element.offsetTop - headerHeight;
                window.scrollTo({
                  top: elementPosition,
                  behavior: 'smooth'
                });
              }
            }}
          >
            <span>了解比赛详情</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          
          <Link to="/submit">
            <motion.button
              className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-black hover:text-white flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>立即参赛</span>
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>

        {/* 滚动提示 */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
              animate={{ scaleY: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </SpotlightEffect>
  );
}