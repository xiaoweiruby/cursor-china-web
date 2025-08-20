import React from 'react'
import { motion } from 'framer-motion'
import { Trophy, Medal, Award, Star, Gift, Crown, Lightbulb, Settings, PenTool, Code, Target, FileText, Users } from 'lucide-react'

interface RewardsSectionProps {
  className?: string
}

/**
 * 奖励展示区域组件
 * 包含通行证视觉元素和奖励详情
 */
const RewardsSection: React.FC<RewardsSectionProps> = ({ className }) => {
  const rewards = [
    {
      rank: '特别奖',
      icon: Crown,
      prize: '总价值约11,200元',
      winners: '1名',
      color: 'from-yellow-400 to-orange-500',
      bgColor: 'bg-gradient-to-br from-yellow-400/20 to-orange-500/20',
      borderColor: 'border-yellow-400/50',
      iconColor: 'text-yellow-400',
      description: '最具创新性和影响力的作品',
      benefits: [
        '💰 奖金：1,500元',
        '☁️ 阿里云代金券：4,000元',
        '👨‍🏫 阿里云数据库架构师指导：5小时（价值约1,500元）',
        '🎁 周边礼品：Cursor社区大礼包(150元) + 阿里云周边(50元)',
        '🎤 云栖大会分享机会（9月中旬，杭州）',
        '✈️ 2天1夜差旅费用报销'
      ]
    },
    {
      rank: '一等奖',
      icon: Trophy,
      prize: '总价值约6,200元',
      winners: '2名',
      color: 'from-gray-300 to-gray-500',
      bgColor: 'bg-gradient-to-br from-gray-300/20 to-gray-500/20',
      borderColor: 'border-gray-400/50',
      iconColor: 'text-gray-300',
      description: '技术深度和实用性并重的优秀作品',
      benefits: [
        '💰 奖金：1,500元',
        '☁️ 阿里云代金券：3,000元',
        '👨‍🏫 阿里云数据库架构师指导：5小时（价值约1,500元）',
        '🎁 周边礼品：Cursor社区大礼包(150元) + 阿里云周边(50元)'
      ]
    },
    {
      rank: '二等奖',
      icon: Medal,
      prize: '总价值约4,900元',
      winners: '3名',
      color: 'from-amber-600 to-orange-700',
      bgColor: 'bg-gradient-to-br from-amber-600/20 to-orange-700/20',
      borderColor: 'border-amber-600/50',
      iconColor: 'text-amber-600',
      description: '具有良好创意和执行力的作品',
      benefits: [
        '💰 奖金：1,200元',
        '☁️ 阿里云代金券：2,000元',
        '👨‍🏫 阿里云数据库架构师指导：5小时（价值约1,500元）',
        '🎁 周边礼品：Cursor社区大礼包(150元) + 阿里云周边(50元)'
      ]
    },
    {
      rank: '入围奖',
      icon: Star,
      prize: '总价值约3,150元',
      winners: '4名',
      color: 'from-blue-400 to-purple-500',
      bgColor: 'bg-gradient-to-br from-blue-400/20 to-purple-500/20',
      borderColor: 'border-blue-400/50',
      iconColor: 'text-blue-400',
      description: '表现突出的优质作品',
      benefits: [
        '💰 奖金：450元',
        '☁️ 阿里云代金券：1,000元',
        '👨‍🏫 阿里云数据库架构师指导：5小时（价值约1,500元）',
        '🎁 周边礼品：Cursor社区大礼包(150元) + 阿里云周边(50元)'
      ]
    }
  ]

  const specialRewards = [
    {
      title: '最佳新人奖',
      icon: Gift,
      description: '首次参与社区活动的优秀新人',
      prize: '2,000元 + Cursor Pro 订阅'
    },
    {
      title: '最受欢迎奖',
      icon: Award,
      description: '获得最多社区点赞和评论的作品',
      prize: '3,000元 + 社区推广资源'
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1
      }
    }

  return (
    <section 
      className={`py-16 lg:py-24 relative overflow-hidden ${className}`}
      id="rewards"
    >


      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 标题区域 */}
        {/* 专业评审团队 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            权威
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              评审团队
            </span>
          </h3>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 text-center">
            汇聚行业顶尖专家和技术大咖，为你的作品提供专业评审。
            公平公正的评选标准，确保每一份创意都能得到应有的认可。
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* 第一排 - 4个人 */}
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-3 group-hover:scale-105 transition-transform duration-300 border-2 border-white">
                <img src="/T老师.jpg" alt="T老师" className="w-full h-full object-cover" />
              </div>
              <div className="text-white font-medium text-center">
                <div className="text-base">Condor</div>
                <div className="text-sm text-gray-400 mt-1">Cursor 官方工程师</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-3 group-hover:scale-105 transition-transform duration-300 border-2 border-white">
                <img src="/大铭老师.jpg" alt="大铭老师" className="w-full h-full object-cover" />
              </div>
              <div className="text-white font-medium text-center">
                <div className="text-base">大铭老师</div>
                <div className="text-sm text-gray-400 mt-1">技术专家</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-3 group-hover:scale-105 transition-transform duration-300 border-2 border-white">
                <img src="/6. 卡兹克.png" alt="卡兹克" className="w-full h-full object-cover" />
              </div>
              <div className="text-white font-medium text-center">
                <div className="text-base">卡兹克</div>
                <div className="text-sm text-gray-400 mt-1">技术专家</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-3 group-hover:scale-105 transition-transform duration-300 border-2 border-white">
                <img src="/7. 卡尔的AI沃茨.png" alt="卡尔的AI沃茨" className="w-full h-full object-cover" />
              </div>
              <div className="text-white font-medium text-center">
                <div className="text-base">卡尔的AI沃茨</div>
                <div className="text-sm text-gray-400 mt-1">AI专家</div>
              </div>
            </div>
            
            {/* 第二排 - 4个人 */}
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-3 group-hover:scale-105 transition-transform duration-300 border-2 border-white">
                <img src="/向阳乔木.jpg" alt="向阳乔木" className="w-full h-full object-cover" />
              </div>
              <div className="text-white font-medium text-center">
                <div className="text-base">向阳乔木</div>
                <div className="text-sm text-gray-400 mt-1">技术专家</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-3 group-hover:scale-105 transition-transform duration-300 border-2 border-white">
                <img src="/硅星人.jpg" alt="硅星人主编" className="w-full h-full object-cover" />
              </div>
              <div className="text-white font-medium text-center">

                <div className="text-sm text-gray-400 mt-1">硅星人主编</div>
                <div className="text-sm text-gray-400 mt-1">科技媒体</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-xl">阿1</span>
              </div>
              <div className="text-white font-medium text-center">
                <div className="text-base">阿1</div>
                <div className="text-sm text-gray-400 mt-1">阿里云专家</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-xl">阿2</span>
              </div>
              <div className="text-white font-medium text-center">
                <div className="text-base">阿2</div>
                <div className="text-sm text-gray-400 mt-1">阿里云专家</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-xl">阿3</span>
              </div>
              <div className="text-white font-medium text-center">
                <div className="text-base">阿3</div>
                <div className="text-sm text-gray-400 mt-1">阿里云专家</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            丰厚
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              奖励等你来拿
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            总奖金池高达 <span className="text-yellow-400 font-bold">5万+</span>，
            还有丰富的阿里云代金券和专属权益等你来赢取。
          </p>
        </motion.div>

        {/* 主要奖项 - 三排布局 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 mb-12"
        >
          {/* 第一排：特等奖 */}
          <div className="flex justify-center">
            {rewards.filter(reward => reward.rank === '特别奖').map((reward, index) => {
              const Icon = reward.icon
              
              return (
                <motion.div
                  key={reward.rank}
                  variants={cardVariants}
                  className="group relative w-full max-w-md"
                >
                  {/* 通行证样式卡片 */}
                  <div className={`pass-card ${reward.bgColor} backdrop-blur-sm border-2 border-white rounded-2xl p-6 h-full transition-all duration-300 group-hover:scale-105 group-hover:border-opacity-100`}>
                    {/* 顶部装饰 */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${reward.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400 uppercase tracking-wider">获奖人数</div>
                        <div className="text-sm font-semibold text-white">{reward.winners}</div>
                      </div>
                    </div>
                    
                    {/* 奖项信息 */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{reward.rank}</h3>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${reward.color} bg-clip-text text-transparent`}>
                        {reward.prize}
                      </div>
                      <p className="text-sm text-gray-300 mt-2">{reward.description}</p>
                    </div>
                    
                    {/* 奖励详情 */}
                    <div className="space-y-2">
                      {reward.benefits.map((benefit, idx) => {
                        return (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        )
                      })}
                    </div>
                    
                    {/* 底部装饰 */}
                    <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <Icon className={`w-8 h-8 ${reward.iconColor}`} />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* 第二排：一等奖和二等奖 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {rewards.filter(reward => reward.rank === '一等奖' || reward.rank === '二等奖').map((reward, index) => {
              const Icon = reward.icon
              
              return (
                <motion.div
                  key={reward.rank}
                  variants={cardVariants}
                  className="group relative"
                >
                  {/* 通行证样式卡片 */}
                  <div className={`pass-card ${reward.bgColor} backdrop-blur-sm border-2 border-white rounded-2xl p-6 h-full transition-all duration-300 group-hover:scale-105 group-hover:border-opacity-100`}>
                    {/* 顶部装饰 */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${reward.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400 uppercase tracking-wider">获奖人数</div>
                        <div className="text-sm font-semibold text-white">{reward.winners}</div>
                      </div>
                    </div>
                    
                    {/* 奖项信息 */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{reward.rank}</h3>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${reward.color} bg-clip-text text-transparent`}>
                        {reward.prize}
                      </div>
                      <p className="text-sm text-gray-300 mt-2">{reward.description}</p>
                    </div>
                    
                    {/* 奖励详情 */}
                    <div className="space-y-2">
                      {reward.benefits.map((benefit, idx) => {
                        // 根据奖项等级设置对应的颜色点
                        let dotColor = 'bg-gray-400' // 默认颜色
                        if (reward.rank === '一等奖') {
                          dotColor = 'bg-gray-300'
                        } else if (reward.rank === '二等奖') {
                          dotColor = 'bg-amber-600'
                        }
                        
                        return (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <div className={`w-1.5 h-1.5 rounded-full ${dotColor} mr-2 flex-shrink-0`} />
                            {benefit}
                          </div>
                        )
                      })}
                    </div>
                    
                    {/* 底部装饰 */}
                    <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <Icon className={`w-8 h-8 ${reward.iconColor}`} />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* 第三排：入围奖 */}
          <div className="flex justify-center">
            {rewards.filter(reward => reward.rank === '入围奖').map((reward, index) => {
              const Icon = reward.icon
              
              return (
                <motion.div
                  key={reward.rank}
                  variants={cardVariants}
                  className="group relative w-full max-w-md"
                >
                  {/* 通行证样式卡片 */}
                  <div className={`pass-card ${reward.bgColor} backdrop-blur-sm border-2 border-white rounded-2xl p-6 h-full transition-all duration-300 group-hover:scale-105 group-hover:border-opacity-100`}>
                    {/* 顶部装饰 */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${reward.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400 uppercase tracking-wider">获奖人数</div>
                        <div className="text-sm font-semibold text-white">{reward.winners}</div>
                      </div>
                    </div>
                    
                    {/* 奖项信息 */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{reward.rank}</h3>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${reward.color} bg-clip-text text-transparent`}>
                        {reward.prize}
                      </div>
                      <p className="text-sm text-gray-300 mt-2">{reward.description}</p>
                    </div>
                    
                    {/* 奖励详情 */}
                    <div className="space-y-2">
                      {reward.benefits.map((benefit, idx) => {
                        return (
                          <div key={idx} className="flex items-center text-xs text-gray-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </div>
                        )
                      })}
                    </div>
                    
                    {/* 底部装饰 */}
                    <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      <Icon className={`w-8 h-8 ${reward.iconColor}`} />
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* 特别奖项 */}


        {/* 底部说明 */}

      </div>
    </section>
  )
}

export default RewardsSection