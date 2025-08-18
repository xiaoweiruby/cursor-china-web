import React from 'react'
import { motion } from 'framer-motion'
import { Code, Lightbulb, Users, Zap, Target, Globe } from 'lucide-react'

interface IntroSectionProps {
  className?: string
}

/**
 * 比赛介绍区域组件
 * 包含阶梯式设计和特色介绍
 */
const IntroSection: React.FC<IntroSectionProps> = ({ className }) => {
  const features = [
    {
      icon: Code,
      title: 'AI编程革命',
      description: '探索Cursor如何改变传统编程方式，提升开发效率',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      icon: Lightbulb,
      title: '创意无限',
      description: '分享你的独特见解和创新思路，启发更多开发者',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10'
    },
    {
      icon: Users,
      title: '社区共建',
      description: '与全球开发者交流学习，共同构建中文技术社区',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      icon: Zap,
      title: '技术前沿',
      description: '掌握最新AI工具和技术趋势，保持竞争优势',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    },
    {
      icon: Target,
      title: '实战经验',
      description: '分享真实项目案例和最佳实践，助力他人成长',
      color: 'text-red-400',
      bgColor: 'bg-red-400/10'
    },
    {
      icon: Globe,
      title: '全球视野',
      description: '连接中外开发者，促进技术文化交流与融合',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-400/10'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0
      }
  }

  return (
    <section 
      className={`py-16 lg:py-24 relative overflow-hidden ${className}`}
      id="intro"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-white/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/2 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            为什么参加
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              征文大赛
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            这不仅仅是一场比赛，更是一次探索AI编程未来的旅程。
            在这里，你的每一个想法都可能改变世界。
          </p>
        </motion.div>

        {/* 阶梯式特色展示 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                className="relative group"
              >
                {/* 卡片 */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 group-hover:scale-105">
                  {/* 图标 */}
                  <div className={`flex items-center justify-center w-16 h-16 rounded-2xl ${feature.bgColor} mb-6 mx-auto`}>
                    <Icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  
                  {/* 标题 */}
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    {feature.title}
                  </h3>
                  
                  {/* 描述 */}
                  <p className="text-gray-300 leading-relaxed text-center">
                    {feature.description}
                  </p>
                  
                  {/* 装饰元素 */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>


      </div>
    </section>
  )
}

export default IntroSection