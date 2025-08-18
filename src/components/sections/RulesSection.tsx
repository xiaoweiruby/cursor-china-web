import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Users, Clock, Award, AlertCircle, CheckCircle, XCircle, Info } from 'lucide-react'

interface RulesSectionProps {
  className?: string
}

/**
 * 比赛规则区域组件
 * 包含详细的参赛规则和注意事项
 */
const RulesSection: React.FC<RulesSectionProps> = ({ className }) => {
  const rules = [
    {
      id: 1,
      title: '参赛资格',
      icon: Users,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/20',
      borderColor: 'border-blue-400/50',
      items: [
        '面向全球所有Cursor用户开放',
        '个人或团队均可参赛（团队不超过3人）',
        '年龄不限，欢迎各年龄段开发者参与',
        '需要有基本的编程经验和Cursor使用经验'
      ]
    },
    {
      id: 2,
      title: '作品要求',
      icon: FileText,
      color: 'text-green-400',
      bgColor: 'bg-green-400/20',
      borderColor: 'border-green-400/50',
      items: [
        '征文字数：2000-5000字',
        '必须是原创内容，不得抄袭',
        '需要包含实际的代码示例和截图',
        '主题围绕Cursor使用心得、技巧分享、项目实战等',
        '支持中文或英文投稿'
      ]
    },
    {
      id: 3,
      title: '提交规范',
      icon: Clock,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/20',
      borderColor: 'border-purple-400/50',
      items: [
        '通过官网提交系统上传作品',
        '文件格式：Markdown (.md) 或 PDF',
        '文件大小不超过10MB',
        '提交截止时间：2024年2月20日 23:59',
        '每人/团队最多提交3篇作品'
      ]
    },
    {
      id: 4,
      title: '评选标准',
      icon: Award,
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/20',
      borderColor: 'border-orange-400/50',
      items: [
        '内容原创性和深度（40%）',
        '技术实用性和创新性（30%）',
        '文章结构和表达清晰度（20%）',
        '社区价值和影响力（10%）'
      ]
    }
  ]

  const guidelines = [
    {
      type: 'allowed',
      icon: CheckCircle,
      color: 'text-green-400',
      title: '鼓励内容',
      items: [
        '分享Cursor独特功能的使用技巧',
        '展示用Cursor完成的实际项目',
        '对比Cursor与其他IDE的优势',
        '分享提高编程效率的心得体会',
        '介绍Cursor在特定领域的应用'
      ]
    },
    {
      type: 'forbidden',
      icon: XCircle,
      color: 'text-red-400',
      title: '禁止内容',
      items: [
        '抄袭他人作品或大量引用未标注来源',
        '包含违法、暴力、色情等不当内容',
        '恶意诋毁其他产品或开发者',
        '纯粹的广告宣传内容',
        '与Cursor无关的技术文章'
      ]
    },
    {
      type: 'notice',
      icon: AlertCircle,
      color: 'text-yellow-400',
      title: '注意事项',
      items: [
        '提交后不可修改，请仔细检查',
        '获奖作品将在社区公开展示',
        '主办方保留最终解释权',
        '如有争议，以评审团决定为准',
        '参赛即表示同意作品用于社区推广'
      ]
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1
    }
  }

  return (
    <section 
      className={`py-16 lg:py-24 relative overflow-hidden ${className}`}
      id="rules"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-green-400/5 rounded-full blur-3xl" />
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
              规则说明
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            详细了解参赛要求和评选标准，
            确保你的作品符合所有规范要求。
          </p>
        </motion.div>

        {/* 主要规则 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20"
        >
          {rules.map((rule, index) => {
            const Icon = rule.icon
            
            return (
              <motion.div
                key={rule.id}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full">
                  {/* 规则标题 */}
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 rounded-xl ${rule.bgColor} border-2 ${rule.borderColor} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${rule.color}`} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-400 mb-1">
                        规则 {String(rule.id).padStart(2, '0')}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {rule.title}
                      </h3>
                    </div>
                  </div>
                  
                  {/* 规则内容 */}
                  <div className="space-y-3">
                    {rule.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 + itemIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <div className={`w-2 h-2 rounded-full ${rule.bgColor} mt-2 mr-3 flex-shrink-0`} />
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {item === '提交截止时间：2024年2月20日 23:59' ? '提交截止时间：2025年9月20日 23:59' : item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* 详细指南 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">详细指南</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {guidelines.map((guide, index) => {
              const Icon = guide.icon
              
              return (
                <motion.div
                  key={guide.type}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ delay: 0.7 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 h-full ${
                    guide.type === 'allowed' ? 'hover:border-green-400/30' :
                    guide.type === 'forbidden' ? 'hover:border-red-400/30' :
                    'hover:border-yellow-400/30'
                  }`}>
                    {/* 指南标题 */}
                    <div className="flex items-center mb-6">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 ${
                        guide.type === 'allowed' ? 'bg-green-400/20' :
                        guide.type === 'forbidden' ? 'bg-red-400/20' :
                        'bg-yellow-400/20'
                      }`}>
                        <Icon className={`w-5 h-5 ${guide.color}`} />
                      </div>
                      <h4 className="text-lg font-bold text-white">
                        {guide.title}
                      </h4>
                    </div>
                    
                    {/* 指南内容 */}
                    <div className="space-y-3">
                      {guide.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.9 + itemIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${
                            guide.type === 'allowed' ? 'bg-green-400' :
                            guide.type === 'forbidden' ? 'bg-red-400' :
                            'bg-yellow-400'
                          }`} />
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {item}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* 联系方式 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >

        </motion.div>
      </div>
    </section>
  )
}

export default RulesSection