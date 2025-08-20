import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Users, Trophy, Flag, CheckCircle } from 'lucide-react'

interface ScheduleSectionProps {
  className?: string
}

/**
 * 时间安排区域组件
 * 包含横向时间轴和重要时间节点
 */
const ScheduleSection: React.FC<ScheduleSectionProps> = ({ className }) => {
  const timeline = [
    {
      id: 1,
      date: '即日起',
      title: '大赛启动',
      description: '征文大赛正式开始，开放作品提交通道',
      icon: Flag,
      status: 'completed',
      color: 'text-green-400',
      bgColor: 'bg-green-400/20',
      borderColor: 'border-green-400/50'
    },
    {
      id: 2,
      date: '即日起 - 2025年9月20日',
      title: '作品征集',
      description: '参赛者准备和提交征文作品',
      icon: Calendar,
      status: 'active',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20',
      borderColor: 'border-blue-400/50'
    },
    {
      id: 3,
      date: '2025年9月20日 23:59',
      title: '提交截止',
      description: '作品提交通道关闭，不再接受新的投稿',
      icon: Clock,
      status: 'upcoming',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/20',
      borderColor: 'border-yellow-400/50'
    },
    {
      id: 4,
      date: '2025年9月20日 - 23日',
      title: '专业评审',
      description: '评审团对所有作品进行专业评选',
      icon: Users,
      status: 'upcoming',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/20',
      borderColor: 'border-purple-400/50'
    },
    {
      id: 5,
      date: '2025年9月24日',
      title: '结果公布',
      description: '获奖名单公示，奖励发放',
      icon: Trophy,
      status: 'upcoming',
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/20',
      borderColor: 'border-orange-400/50'
    }
  ]

  const importantDates = [
    {
      date: '即日起',
      event: '大赛启动',
      description: '征文大赛正式开始'
    },
    {
      date: '9月20日',
      event: '报名截止',
      description: '最后报名日期'
    },
    {
      date: '9月20日 23:59',
      event: '提交截止',
      description: '作品提交最后期限'
    },
    {
      date: '9月24日',
      event: '结果公布',
      description: '获奖名单正式发布'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return CheckCircle
      case 'active':
        return Clock
      default:
        return Calendar
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-400'
      case 'active':
        return 'text-blue-400'
      default:
        return 'text-gray-400'
    }
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <section 
      className={`py-8 md:py-16 relative overflow-hidden ${className}`}
      id="schedule"
    >


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
            重要
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              时间节点
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            把握关键时间，不错过任何重要环节。
            从大赛启动到结果公布，每个阶段都至关重要。
          </p>
        </motion.div>

        {/* 横向时间轴 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-12 lg:mb-16"
        >
          {/* 时间轴线 - 桌面端 */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          {/* 时间轴线 - 移动端 */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {timeline.map((item, index) => {
              const Icon = item.icon
              const StatusIcon = getStatusIcon(item.status)
              
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* 时间轴节点 */}
                  <div className="flex lg:justify-center mb-6">
                    <div className={`relative w-16 h-16 rounded-full ${item.bgColor} border-4 ${item.borderColor} flex items-center justify-center backdrop-blur-sm group hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${item.color}`} />
                      
                      {/* 状态指示器 */}
                      <div className="absolute -top-2 -right-2">
                        <StatusIcon className={`w-6 h-6 ${getStatusColor(item.status)} bg-black rounded-full p-1`} />
                      </div>
                    </div>
                  </div>
                  
                  {/* 内容卡片 */}
                  <div className="bg-white/5 backdrop-blur-sm border-2 border-white rounded-2xl p-6 hover:bg-white/10 hover:border-white transition-all duration-300 h-[240px] flex flex-col justify-center">
                    <div className="text-center lg:text-center w-full">
                      <div className={`text-sm font-semibold ${item.color} mb-2`}>
                        {item.date}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      
                      {/* 状态标签 */}
                      <div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === 'completed' ? 'bg-green-400/20 text-green-400' :
                          item.status === 'active' ? 'bg-blue-400/20 text-blue-400' :
                          'bg-gray-400/20 text-gray-400'
                        }`}>
                          {item.status === 'completed' ? '已完成' :
                           item.status === 'active' ? '进行中' : '即将开始'}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* 重要日期提醒 */}


        {/* 倒计时提醒 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >

        </motion.div>
      </div>
    </section>
  )
}

export default ScheduleSection