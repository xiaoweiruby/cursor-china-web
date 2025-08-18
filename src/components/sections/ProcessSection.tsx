import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Upload, Users, Trophy, CheckCircle, Clock, ArrowRight, Code, Target } from 'lucide-react'

interface ProcessSectionProps {
  className?: string
}

/**
 * 参赛流程区域组件
 * 包含时间轴布局和流程步骤
 */
const ProcessSection: React.FC<ProcessSectionProps> = ({ className }) => {
  const steps = [
    {
      id: 1,
      icon: FileText,
      title: '准备作品',
      description: '撰写关于Cursor使用经验、技巧分享或创新应用的文章',
      details: [
        '文章字数不少于1000字',
        '可包含代码示例和截图',
        '支持Markdown格式',
        '原创内容，未曾发表'
      ],
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      borderColor: 'border-blue-400/30'
    },
    {
      id: 2,
      icon: Upload,
      title: '提交作品',
      description: '通过官方平台提交你的征文作品和相关信息',
      details: [
        '填写个人基本信息',
        '上传文章文件',
        '添加作品标题和摘要',
        '确认参赛协议'
      ],
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      borderColor: 'border-green-400/30'
    },
    {
      id: 3,
      icon: Users,
      title: '专业评审',
      description: '由Cursor官方团队和社区专家组成的评审团进行评选',
      details: [
        '初审：内容质量筛选',
        '复审：专业评委打分',
        '终审：综合评估排名',
        '公示：结果公开透明'
      ],
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
      borderColor: 'border-purple-400/30'
    },
    {
      id: 4,
      icon: Trophy,
      title: '公布结果',
      description: '获奖名单公布，奖励发放，优秀作品推广展示',
      details: [
        '获奖名单公示',
        '奖金和奖品发放',
        '获奖证书颁发',
        '优秀作品推广'
      ],
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      borderColor: 'border-yellow-400/30'
    }
  ]

  const requirements = [
    {
      icon: CheckCircle,
      title: '参赛资格',
      items: [
        '年满18周岁的个人开发者',
        '对Cursor有实际使用经验',
        '同意参赛条款和版权协议',
        '每人限提交一篇作品'
      ]
    },
    {
      icon: FileText,
      title: '作品要求',
      items: [
        '原创文章，未曾公开发表',
        '中文撰写，字数1000字以上',
        '内容积极正面，符合社区价值观',
        '可包含代码、图片等辅助材料'
      ]
    },
    {
      icon: Clock,
      title: '时间安排',
      items: [
          '报名时间：即日起至2025年9月20日',
          '提交截止：2025年9月20日 23:59',
          '评审期间：2025年9月20日-23日',
          '结果公布：2025年9月24日'
        ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0
    }
  }

  return (
    <section 
      className={`py-16 lg:py-24 relative overflow-hidden ${className}`}
      id="process"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
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
            参赛
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              流程指南
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            简单四步，轻松参赛。从准备作品到获得奖励，
            我们为你提供清晰的指导和全程支持。
          </p>
        </motion.div>

        {/* 流程时间轴 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mb-12"
        >
          {/* 网格布局 - 一排两个 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              
              return (
                <motion.div
                  key={step.id}
                  variants={stepVariants}
                  className="relative"
                >
                  {/* 内容卡片 */}
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full">
                    {/* 图标和步骤号 */}
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 rounded-xl ${step.bgColor} border ${step.borderColor} flex items-center justify-center mr-4`}>
                        <Icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      <div className="text-sm text-gray-400">步骤 {step.id}</div>
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{step.description}</p>
                    
                    {/* 详细要求 */}
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-300">
                          <div className={`w-1.5 h-1.5 rounded-full ${step.color.replace('text-', 'bg-')} mt-2 mr-3 flex-shrink-0`} />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* 连接箭头 - 仅在桌面端显示 */}
                  {index < steps.length - 1 && index % 2 === 0 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 lg:-right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-white/30" />
                    </div>
                  )}
                  
                  {/* 向下箭头 - 在第二个卡片后显示 */}
                  {index === 1 && (
                    <div className="hidden md:block absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="rotate-90">
                        <ArrowRight className="w-6 h-6 text-white/30" />
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* 评选标准 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="max-w-6xl mx-auto">
            {/* 评选标准标题 */}
            <h4 className="text-2xl font-bold text-white mb-8 text-center">评选标准</h4>
            
            {/* 四个维度的评选标准 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 技术实现维度 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                   <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-400/20 border border-blue-400/30">
                     <Code className="w-6 h-6 text-blue-400" />
                   </div>
                 </div>
                <div className="text-blue-400 font-semibold mb-3 text-lg text-center">技术实现维度</div>
                <div className="text-center mb-3">
                  <span className="text-blue-400 font-bold text-xl">40分</span>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white">技术架构设计 (15分)</div>
                      <div className="text-xs text-gray-400 mt-1">架构合理性、技术选型、代码质量、性能优化</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white">功能完整性 (15分)</div>
                      <div className="text-xs text-gray-400 mt-1">核心功能、用户体验、错误处理、数据安全</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white">创新性 (10分)</div>
                      <div className="text-xs text-gray-400 mt-1">技术创新、功能创新、应用场景</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 实用价值维度 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                   <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-400/20 border border-green-400/30">
                     <Target className="w-6 h-6 text-green-400" />
                   </div>
                 </div>
                <div className="text-green-400 font-semibold mb-3 text-lg text-center">实用价值维度</div>
                <div className="text-center mb-3">
                  <span className="text-green-400 font-bold text-xl">30分</span>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white">商业价值 (15分)</div>
                      <div className="text-xs text-gray-400 mt-1">市场需求、用户价值、可扩展性</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white">学习价值 (15分)</div>
                      <div className="text-xs text-gray-400 mt-1">技术示范、最佳实践、文档完整性</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 内容呈现维度 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                   <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-400/20 border border-yellow-400/30">
                     <FileText className="w-6 h-6 text-yellow-400" />
                   </div>
                 </div>
                <div className="text-yellow-400 font-semibold mb-3 text-lg text-center">内容呈现维度</div>
                <div className="text-center mb-3">
                  <span className="text-yellow-400 font-bold text-xl">20分</span>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2 mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white">文章质量 (10分)</div>
                      <div className="text-xs text-gray-400 mt-1">内容结构、技术深度、可读性</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mr-2 mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white">展示效果 (10分)</div>
                      <div className="text-xs text-gray-400 mt-1">视觉效果、演示完整性、分享价值</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* 社区贡献维度 */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-400/20 border border-purple-400/30">
                    <Users className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <div className="text-purple-400 font-semibold mb-3 text-lg text-center">社区贡献维度</div>
                <div className="text-center mb-3">
                  <span className="text-purple-400 font-bold text-xl">10分</span>
                </div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2 mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white">开源贡献 (5分)</div>
                      <div className="text-xs text-gray-400 mt-1">代码开源、社区分享</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2 mt-2 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-white">互动价值 (5分)</div>
                      <div className="text-xs text-gray-400 mt-1">问题解答、经验分享</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 参赛要求 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white text-center mb-8">参赛须知</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {requirements.map((req, index) => {
              const Icon = req.icon
              
              return (
                <motion.div
                  key={req.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mr-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white">{req.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {req.items.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40 mt-2 mr-3 flex-shrink-0" />
                        {item === '年满18周岁的个人开发者' ? '所有热爱编程的爱好者' : item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProcessSection