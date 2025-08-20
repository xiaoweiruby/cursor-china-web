import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ChevronDown, Sparkles, Trophy, Users, PenTool } from 'lucide-react'
import { Button } from '../ui'

interface HeroSectionProps {
  className?: string
}

/**
 * 聚光灯开场区域组件
 * 包含聚光灯效果、主标题、副标题和行动按钮
 */
const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const controls = useAnimation()

  // 启动动画序列
  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        opacity: 1,
        scale: 1
      })
    }
    startAnimation()
  }, [controls])

  // 滚动到下一区域
  const scrollToNext = () => {
    const nextSection = document.querySelector('#intro')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  // 跳转到提交页面
  const handleSubmit = () => {
    window.location.href = '/submit'
  }

  return (
    <section 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden py-8 md:py-16 ${className}`}
      id="hero"
    >


      {/* 背景装饰 */}
      <div className="absolute inset-0">
        {/* 网格背景 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        

      </div>

      {/* 主要内容 */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Cursor Logo */}
        {/* 主办方和赞助方信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex items-center justify-center mb-6 mt-8"
        >
          <div className="flex flex-row justify-between items-center w-full max-w-6xl mx-auto px-8">
            <div className="text-gray-400 text-base text-left flex-shrink-0">
              <span className="font-bold text-white">主办方：</span>
              <span className="font-bold">Cursor 中文圈</span>
            </div>
            <div className="flex-grow"></div>
            <div className="text-gray-400 text-base text-right flex-shrink-0">
              <span className="font-bold text-white">赞助方：</span>
              <span className="font-bold">阿里云数据库 AnalyticDB 产品</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex items-center justify-center mb-4"
        >
          <img 
            src="/cursor logo.png" 
            alt="Cursor Logo" 
            className="w-24 h-24 object-contain filter brightness-90 hover:brightness-100 transition-all duration-300"
          />
        </motion.div>

        {/* 顶部装饰 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center mb-6"
        >
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border-2 border-white rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-base text-gray-300">首届征文大赛正式启动</span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </div>
        </motion.div>

        {/* 主图 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <img 
            src="/主图.png" 
            alt="主图" 
            className="w-80 h-40 sm:w-96 sm:h-48 lg:w-[32rem] lg:h-64 object-contain mx-auto filter brightness-90 hover:brightness-100 transition-all duration-300"
          />
        </motion.div>

        {/* 主标题 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={controls}
          className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight px-2"
        >
          <span className="block whitespace-nowrap bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent overflow-visible">Cursor 中文社区造浪赛</span>
        </motion.h1>

        {/* 副标题 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed"
        >用 Supabase 把想法冲上岸</motion.p>

        {/* 征文时间 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center justify-center mb-8"
        >
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border-2 border-white rounded-full px-4 py-2">
            <PenTool className="w-4 h-4 text-blue-400" />
            <span className="text-base text-gray-300">征文时间即日起-2025年9月20日 23:59截止</span>
            <PenTool className="w-4 h-4 text-blue-400" />
          </div>
        </motion.div>

        {/* 统计数据 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white/5 backdrop-blur-sm border-2 border-white rounded-2xl p-6 hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">5万+</div>
              <div className="text-sm text-gray-400">总奖金池</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white/5 backdrop-blur-sm border-2 border-white rounded-2xl p-6 hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">10000+</div>
              <div className="text-sm text-gray-400">预期参赛者</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white/5 backdrop-blur-sm border-2 border-white rounded-2xl p-6 hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              <Sparkles className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">30天</div>
              <div className="text-sm text-gray-400">征文时间</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-white/5 backdrop-blur-sm border-2 border-white rounded-2xl p-6 hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white mb-1">无限</div>
              <div className="text-sm text-gray-400">创意可能</div>
            </motion.div>
          </div>
        </motion.div>



        {/* 底部号召 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-center mb-8"
        >
          <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border-2 border-white rounded-2xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              准备好展示你的才华了吗？
            </h3>
            <p className="text-lg text-gray-300 mb-6">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 无论你是AI编程新手还是资深专家，这里都有属于你的舞台。&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 让我们一起书写AI编程的新篇章。</p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                免费参与
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2" />
                丰厚奖励
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2" />
                专业评审
              </span>
            </div>
          </div>
        </motion.div>

        {/* 行动按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col items-center justify-center mb-12"
        >
          <Button
            size="lg"
            onClick={handleSubmit}
            className="bg-white text-black hover:bg-gray-100 font-bold px-16 py-6 text-2xl rounded-xl shadow-2xl hover:shadow-white/20 transform hover:scale-105 transition-all duration-300 mb-8"
          >扫码报名</Button>
          
          {/* 二维码图片 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="relative group"
          >
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-6 shadow-2xl hover:shadow-white/10 transition-all duration-300 group-hover:scale-105">
              <img 
                src="/二维码报名.png" 
                alt="扫码报名" 
                className="w-32 h-32 object-contain rounded-lg"
              />
              
              {/* 装饰光效 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* 提示文字 */}
            <div className="text-center mt-4">
              <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                扫码快速报名参赛
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection