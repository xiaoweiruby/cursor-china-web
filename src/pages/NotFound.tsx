import React from 'react'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, Search, HelpCircle } from 'lucide-react'
import { Layout } from '../components/layout'
import { Button } from '../components/ui'

/**
 * 404页面组件
 * 处理未找到的路由
 */
const NotFound: React.FC = () => {
  /**
   * 返回首页
   */
  const handleGoHome = () => {
    window.location.href = '/'
  }

  /**
   * 返回上一页
   */
  const handleGoBack = () => {
    window.history.back()
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

  const floatVariants = {
    float: {
      y: [-10, 10, -10]
    }
  }

  return (
    <Layout showNavigation={false} showFooter={false}>
      <div className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">


        {/* 星光背景 */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* 404 数字 */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.div
                variants={floatVariants}
                animate="float"
                className="text-8xl sm:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-red-400 via-purple-500 to-blue-500 bg-clip-text text-transparent leading-none"
              >
                404
              </motion.div>
            </motion.div>

            {/* 主标题 */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                🤔 页面走丢了
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
                抱歉，你访问的页面不存在或已被移动。
                让我们帮你找到正确的方向！
              </p>
            </motion.div>

            {/* 可能的原因 */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-center">
                  <HelpCircle className="w-5 h-5 mr-2 text-yellow-400" />
                  可能的原因
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>URL地址输入错误</span>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>页面已被删除或移动</span>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>链接已过期或无效</span>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span>网站正在维护更新</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 建议操作 */}
            <motion.div variants={itemVariants} className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-8">🚀 你可以尝试</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    icon: <Home className="w-8 h-8" />,
                    title: '返回首页',
                    description: '回到征文大赛主页，查看最新信息',
                    color: 'from-blue-400 to-cyan-400',
                    action: handleGoHome
                  },
                  {
                    icon: <ArrowLeft className="w-8 h-8" />,
                    title: '返回上页',
                    description: '回到你之前访问的页面',
                    color: 'from-purple-400 to-pink-400',
                    action: handleGoBack
                  },
                  {
                    icon: <Search className="w-8 h-8" />,
                    title: '检查URL',
                    description: '确认网址拼写是否正确',
                    color: 'from-green-400 to-emerald-400',
                    action: () => window.location.reload()
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer group"
                    onClick={item.action}
                  >
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
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
                  onClick={handleGoBack}
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  返回上页
                </Button>
              </div>
            </motion.div>

            {/* 联系信息 */}
            <motion.div variants={itemVariants}>
              <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-6 max-w-2xl mx-auto">
                <h4 className="text-lg font-bold text-blue-400 mb-3">💬 需要帮助？</h4>
                <p className="text-gray-300 text-sm mb-3">
                  如果问题持续存在，请联系我们的技术支持团队：
                </p>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-300">
                    📧 邮箱：support@cursor-community.com
                  </div>
                  <div className="text-gray-300">
                    💬 微信群：扫描首页二维码加入
                  </div>
                  <div className="text-gray-300">
                    🕐 响应时间：24小时内回复
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

export default NotFound