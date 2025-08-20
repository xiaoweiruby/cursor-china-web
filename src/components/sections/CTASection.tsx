import React, { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { ArrowRight, Sparkles, Trophy, Users, Clock, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui'

interface CTASectionProps {
  className?: string
}

/**
 * 结尾号召区域组件
 * 包含舞台幕布效果和最终的行动号召
 */
const CTASection: React.FC<CTASectionProps> = ({ className }) => {
  const [curtainOpen, setCurtainOpen] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurtainOpen(true)
      controls.start('visible')
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const stats = [
    {
      icon: Trophy,
      value: '5万+',
      label: '总奖金池',
      color: 'text-yellow-400'
    },
    {
      icon: Users,
      value: '1000+',
      label: '预期参赛者',
      color: 'text-blue-400'
    },
    {
      icon: Clock,
      value: '30天',
      label: '征文时间',
      color: 'text-green-400'
    },
    {
      icon: Star,
      value: '无限',
      label: '创意可能',
      color: 'text-purple-400'
    }
  ]

  const features = [
    '🏆 丰厚奖金等你来拿',
    '🌟 展示你的技术实力',
    '🤝 结识志同道合的伙伴',
    '📈 提升个人影响力',
    '🎯 获得专业认可',
    '🚀 推动技术社区发展'
  ]

  const curtainVariants = {
    closed: { scaleY: 1 },
    open: { 
      scaleY: 0
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.2,
        delayChildren: 0.5
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  const sparkleVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360]
    }
  }

  const handleScrollToSubmit = () => {
    // 滚动到提交页面或打开提交表单
    window.location.href = '/submit'
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section 
      className={`relative min-h-screen flex items-center justify-center overflow-hidden py-8 md:py-16 ${className}`}
      id="cta"
    >
      {/* 舞台背景 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">

        
        {/* 星光装饰 */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* 舞台幕布 */}
      <motion.div
        className="absolute inset-0 z-10"
        initial="closed"
        animate={curtainOpen ? 'open' : 'closed'}
        variants={curtainVariants}
        transition={{
          duration: 2
        }}
      >
        {/* 左幕布 */}
        <motion.div 
          className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-red-900 via-red-800 to-red-700 curtain-texture"
          style={{ transformOrigin: 'top' }}
        />
        {/* 右幕布 */}
        <motion.div 
          className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-red-900 via-red-800 to-red-700 curtain-texture"
          style={{ transformOrigin: 'top' }}
        />
        
        {/* 幕布装饰 */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-yellow-600 rounded-b-lg" />
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-24 h-4 bg-yellow-500 rounded-b-md" />
      </motion.div>

      {/* 主要内容 */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate={controls}
          className="text-center"
        >
          {/* 主标题 */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="flex items-center justify-center mb-6">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
                className="mr-4"
              >
                <Sparkles className="w-12 h-12 text-yellow-400" />
              </motion.div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                你的
                <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                  舞台
                </span>
                已就绪
              </h2>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
                className="ml-4"
              >
                <Sparkles className="w-12 h-12 text-yellow-400" />
              </motion.div>
            </div>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              这是属于每一位Cursor开发者的舞台，
              在这里展示你的才华，分享你的智慧，
              与全球开发者一起推动AI编程的未来。
            </p>
          </motion.div>



          {/* 特色亮点 */}
          <motion.div variants={itemVariants} className="mb-8">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2.5 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border-2 border-white rounded-xl p-4 hover:bg-white/10 hover:border-white transition-all duration-300"
                >
                  <p className="text-gray-300 text-sm">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 行动按钮 */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="flex justify-center">

            </div>
          </motion.div>

          {/* 宣发社区 */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="text-center">
              <h3 className="font-medium text-white mb-4 text-lg">支持社区</h3>
              <div className="grid grid-cols-3 gap-3 max-w-4xl mx-auto">
                <div className="text-gray-400 text-sm bg-black backdrop-blur-sm border-2 border-white rounded-lg px-4 py-3 h-20 flex items-center justify-center">Cursor 中文圈</div>
                <div className="text-gray-400 text-sm bg-black backdrop-blur-sm border-2 border-white rounded-lg px-4 py-3 h-20 flex items-center justify-center">Cursor 中文圈社群</div>
                <div className="text-gray-400 text-sm bg-black backdrop-blur-sm border-2 border-white rounded-lg px-4 py-3 h-20 flex items-center justify-center">阿里云开发者社区</div>
                <div className="text-gray-400 text-sm bg-black backdrop-blur-sm border-2 border-white rounded-lg px-4 py-3 h-20 flex items-center justify-center">阿里云瑶池数据库</div>
                <div className="text-gray-400 text-sm bg-black backdrop-blur-sm border-2 border-white rounded-lg px-4 py-3 h-20 flex items-center justify-center">数字生命卡兹克</div>
                <div className="text-gray-400 text-sm bg-black backdrop-blur-sm border-2 border-white rounded-lg px-4 py-3 h-20 flex items-center justify-center">
                  <img src="/logo/思否.png" alt="思否" className="h-12 w-auto" />
                </div>
                <div className="text-gray-400 text-sm bg-black backdrop-blur-sm border-2 border-white rounded-lg px-4 py-3 h-20 flex items-center justify-center">交大工研院</div>
                <div className="text-sm bg-black backdrop-blur-sm border-2 border-white rounded-lg px-4 py-3 h-20 flex items-center justify-center">
                  <img src="/logo/一支烟花.png" alt="一支烟花" className="h-12 w-auto" />
                </div>
                <div className="text-gray-400 text-sm bg-black backdrop-blur-sm border-2 border-white rounded-lg px-4 py-3 h-20 flex items-center justify-center">人人都是产品经理</div>
                <div className="text-gray-400 text-sm bg-black backdrop-blur-sm border-2 border-white rounded-lg px-4 py-3 h-20 flex items-center justify-center">CSDN</div>
                <div className="text-gray-400 text-sm bg-black backdrop-blur-sm border-2 border-white rounded-lg px-4 py-3 h-20 flex items-center justify-center">Datafun</div>
                <div className="text-gray-400 text-sm bg-black backdrop-blur-sm border-2 border-white rounded-lg px-4 py-3 h-20 flex items-center justify-center">infoQ</div>
                <div className="text-gray-400 text-sm bg-black backdrop-blur-sm border-2 border-white rounded-lg px-4 py-3 h-20 flex items-center justify-center">极客时间</div>
                <div className="text-sm bg-black backdrop-blur-sm border-2 border-white rounded-lg px-4 py-3 h-20 flex items-center justify-center">
                  <img src="/logo/GO夜读.jpg" alt="GO夜读" className="h-12 w-auto" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 倒计时提醒 */}
          <motion.div variants={itemVariants}>

          </motion.div>
        </motion.div>
      </div>

      {/* 底部装饰 */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}

export default CTASection