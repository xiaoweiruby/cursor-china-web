import { motion } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

/**
 * 常见问题模块组件
 * 展示参赛者常见问题和解答
 */
export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: '参赛资格',
      questions: [
        {
          question: '谁可以参加这次比赛？',
          answer: '本次比赛面向所有对 Cursor AI 编程工具感兴趣的开发者，包括学生、职业程序员、技术爱好者等。无论你是初学者还是资深开发者，只要你有创新想法和学习热情，都欢迎参加。'
        },
        {
          question: '是否需要团队参赛？',
          answer: '本次比赛支持个人参赛和团队参赛两种形式。团队参赛人数不超过3人，团队成员需要明确分工和贡献。个人参赛者也可以在比赛过程中寻找合作伙伴。'
        },
        {
          question: '参赛是否收费？',
          answer: '本次比赛完全免费参加，不收取任何报名费用。我们希望为所有开发者提供一个公平、开放的技术交流和展示平台。'
        }
      ]
    },
    {
      category: '作品要求',
      questions: [
        {
          question: '作品必须使用 Cursor 开发吗？',
          answer: '是的，参赛作品必须主要使用 Cursor AI 编程工具进行开发。我们鼓励参赛者充分利用 Cursor 的 AI 功能，如代码生成、智能补全、代码解释等，来提升开发效率和代码质量。'
        },
        {
          question: '对技术栈有什么限制？',
          answer: '我们对技术栈没有严格限制，你可以使用任何编程语言和框架。但建议选择你最熟悉的技术栈，这样能更好地展现你的技术实力和创新能力。'
        },
        {
          question: '项目规模有什么要求？',
          answer: '项目规模不是评判标准，我们更看重创新性、实用性和技术实现质量。可以是一个精巧的工具，也可以是一个完整的应用系统。重要的是要有清晰的功能定位和良好的用户体验。'
        },
        {
          question: '是否可以基于现有项目改进？',
          answer: '可以基于现有的开源项目进行改进和创新，但必须有显著的功能增强或技术创新。请在提交时明确说明你的贡献部分，并确保遵守原项目的开源协议。'
        }
      ]
    },
    {
      category: '提交流程',
      questions: [
        {
          question: '如何提交参赛作品？',
          answer: '通过官方网站的作品提交页面上传你的项目信息，包括项目介绍、源代码链接、演示视频、技术文章链接等。确保所有材料完整且可访问。'
        },
        {
          question: '提交后还能修改吗？',
          answer: '在提交截止日期前，你可以随时更新和完善你的作品。截止日期后将不再接受任何修改。建议在截止日期前预留充足时间进行最后的检查和优化。'
        },
        {
          question: '需要提交哪些材料？',
          answer: '必须提交：项目源代码、项目说明文档、技术文章。可选提交：演示视频、部署链接、设计稿等。所有材料都应该清晰地展示你的项目特色和技术实现。'
        }
      ]
    },
    {
      category: '评审和奖励',
      questions: [
        {
          question: '评审流程是怎样的？',
          answer: '评审分为初审和复审两个阶段。初审主要检查作品完整性和参赛资格；复审由技术专家按照六大维度进行详细评分。整个过程公开透明，确保公平公正。'
        },
        {
          question: '什么时候公布结果？',
          answer: '预计在2024年4月20日公布最终获奖名单。我们会通过官方网站、邮件和社交媒体等多个渠道通知获奖者，并举办线上颁奖典礼。'
        },
        {
          question: '奖励如何发放？',
          answer: '现金奖励将通过银行转账或支付宝等方式发放；云栖大会门票将以电子票形式发送；其他奖励如证书、纪念品等将通过快递寄送。'
        }
      ]
    }
  ];

  const contactMethods = [
    {
      icon: MessageCircle,
      title: '在线客服',
      description: '工作日 9:00-18:00',
      contact: '点击咨询',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Mail,
      title: '邮件咨询',
      description: '24小时内回复',
      contact: 'contest@cursor.com',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Phone,
      title: '电话咨询',
      description: '工作日 9:00-17:00',
      contact: '400-123-4567',
      color: 'from-gray-400 to-gray-600'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            常见问题
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            为你解答参赛过程中的各种疑问，让你的参赛之路更加顺畅。
            如果还有其他问题，欢迎随时联系我们。
          </p>
        </motion.div>

        {/* FAQ 内容 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              {/* 分类标题 */}
              <div className="flex items-center space-x-3 mb-6">
                <HelpCircle className="w-6 h-6 text-white" />
                <h3 className="text-2xl font-bold text-white">
                  {category.category}
                </h3>
              </div>

              {/* 问题列表 */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <motion.div
                      key={questionIndex}
                      className="bg-black/30 border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: questionIndex * 0.1 }}
                    >
                      {/* 问题标题 */}
                      <button
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
                        onClick={() => toggleItem(globalIndex)}
                      >
                        <span className="text-lg font-semibold text-white pr-4">
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {isOpen ? (
                            <Minus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          ) : (
                            <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </motion.div>
                      </button>
                      
                      {/* 答案内容 */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-300 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* 联系方式 */}
        <motion.div
          className="bg-black/50 rounded-2xl p-8 border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            还有疑问？联系我们
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {method.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3">
                    {method.description}
                  </p>
                  <p className="text-white hover:text-gray-300 transition-colors font-semibold">
                    {method.contact}
                  </p>
                </motion.div>
              );
            })}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">
              我们的专业团队随时为你提供帮助，确保你的参赛体验顺畅无忧。
            </p>
            <motion.button
              className="bg-gradient-to-r from-gray-400 to-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-gray-500 hover:to-gray-700 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              立即咨询
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}