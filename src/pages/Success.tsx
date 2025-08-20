import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Home, Mail, Calendar, Trophy, Users, ArrowRight } from 'lucide-react'
import { Layout } from '../components/layout'
import { Button } from '../components/ui'

/**
 * 提交成功页面
 * 展示确认信息和后续指引
 */
const Success: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  /**
   * 计算距离评审结束的倒计时
   */
  useEffect(() => {
    const targetDate = new Date('2024-03-15T23:59:59')
    
    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        })
      }
    }
    
    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)
    
    return () => clearInterval(interval)
  }, [])

  /**
   * 返回首页
   */
  const handleGoHome = () => {
    window.location.href = '/'
  }

  /**
   * 查看更多作品
   */
  const handleViewMore = () => {
    // 这里可以跳转到作品展示页面
    alert('作品展示页面即将上线，敬请期待！')
  }

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0
    }
  }

  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1]
    }
  }

  return (
    <Layout showNavigation={false} showFooter={false}>
      <div className="min-h-screen bg-black relative overflow-hidden">


        {/* 星光背景 */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            {/* 成功图标 */}
            <motion.div
              variants={iconVariants}
              className="mb-8"
            >
              <motion.div
                variants={pulseVariants}
                animate="pulse"
                className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-green-500/30"
              >
                <CheckCircle className="w-12 h-12 text-white" />
              </motion.div>
            </motion.div>

            {/* 主标题 */}
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                🎉 提交成功！
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto">
                你的征文作品已成功提交，感谢你的参与！
              </p>
            </motion.div>

            {/* 确认信息 */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-white mb-6">📋 提交确认</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span>作品已成功上传到我们的系统</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                    <span>确认邮件已发送到你的邮箱</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                    <span>我们将在3个工作日内完成初步审核</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Trophy className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
                    <span>评审结果将通过邮件通知</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 倒计时 */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-2xl p-8 max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-white mb-6">⏰ 距离评审截止还有</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { label: '天', value: timeLeft.days },
                    { label: '时', value: timeLeft.hours },
                    { label: '分', value: timeLeft.minutes },
                    { label: '秒', value: timeLeft.seconds }
                  ].map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white/10 rounded-xl p-4"
                    >
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        {item.value.toString().padStart(2, '0')}
                      </div>
                      <div className="text-sm text-gray-400">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* 后续步骤 */}
            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-8">🚀 接下来会发生什么？</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    icon: <Mail className="w-8 h-8" />,
                    title: '初步审核',
                    description: '3个工作日内完成格式和内容的初步审核',
                    color: 'from-blue-400 to-cyan-400'
                  },
                  {
                    icon: <Users className="w-8 h-8" />,
                    title: '专业评审',
                    description: '技术专家团队进行深度评审和打分',
                    color: 'from-purple-400 to-pink-400'
                  },
                  {
                    icon: <Trophy className="w-8 h-8" />,
                    title: '结果公布',
                    description: '获奖名单公布，奖品发放和证书颁发',
                    color: 'from-yellow-400 to-orange-400'
                  }
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                      {step.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-gray-300 text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* 行动按钮 */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={handleGoHome}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 px-8"
                >
                  <Home className="w-4 h-4 mr-2" />
                  返回首页
                </Button>
                <Button
                  variant="outline"
                  onClick={handleViewMore}
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  查看其他作品
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>

            {/* 联系信息 */}
            <motion.div variants={itemVariants}>
              <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-xl p-6 max-w-2xl mx-auto">
                <h4 className="text-lg font-bold text-yellow-400 mb-3">📞 需要帮助？</h4>
                <p className="text-gray-300 text-sm mb-3">
                  如果你有任何问题或需要修改提交的内容，请联系我们：
                </p>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-300">
                    📧 邮箱：contest@cursor-community.com
                  </div>
                  <div className="text-gray-300">
                    💬 微信群：扫描首页二维码加入
                  </div>
                  <div className="text-gray-300">
                    🕐 工作时间：周一至周五 9:00-18:00
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export default Success