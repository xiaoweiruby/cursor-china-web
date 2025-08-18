import { motion } from 'framer-motion';
import { Code, PenTool, Send, ArrowRight } from 'lucide-react';

/**
 * 参赛流程模块组件
 * 展示三步流程：打磨作品、撰写文章、提交申请
 */
export default function ProcessSection() {
  const steps = [
    {
      icon: Code,
      number: '01',
      title: '打磨作品',
      subtitle: '创造与优化',
      description: '使用 Cursor AI 开发你的创新项目，充分利用 AI 编程的优势，打造具有实用价值的技术作品。',
      details: [
        '选择合适的技术栈和项目方向',
        '充分利用 Cursor 的 AI 功能提升开发效率',
        '确保项目的创新性和实用性',
        '完善项目文档和演示效果'
      ],
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: PenTool,
      number: '02',
      title: '撰写文章',
      subtitle: '分享与传播',
      description: '撰写技术文章分享你的开发经验、技术洞察和创新思路，让更多开发者从中受益。',
      details: [
        '详细介绍项目的技术实现过程',
        '分享使用 Cursor AI 的心得体会',
        '提供清晰的代码示例和解释',
        '发布到技术平台获得社区反馈'
      ],
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Send,
      number: '03',
      title: '提交申请',
      subtitle: '参与与竞争',
      description: '通过官方渠道提交你的参赛作品和技术文章，等待专家评审和社区投票。',
      details: [
        '填写完整的参赛申请表单',
        '提供项目演示链接和源码',
        '附上技术文章的发布链接',
        '等待评审结果和获奖通知'
      ],
      color: 'from-gray-400 to-gray-600'
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
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
            参赛流程
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            简单三步，让你的创新项目闪耀在技术舞台上。
            从创意到实现，从分享到获奖，我们为你提供完整的参赛指导。
          </p>
        </motion.div>

        {/* 流程步骤 */}
        <div className="space-y-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* 步骤内容 */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mr-6`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <div className="text-6xl font-bold text-gray-600 mb-2">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xl text-gray-400 mb-6">
                    {step.subtitle}
                  </p>
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {step.description}
                  </p>
                  
                  {/* 详细步骤 */}
                  <div className="space-y-4">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detailIndex}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index * 0.2) + (detailIndex * 0.1) }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.color} mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-300">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 步骤可视化 */}
                <div className="flex-1 flex justify-center">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* 主圆圈 */}
                    <div className={`w-64 h-64 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center relative overflow-hidden`}>
                      <IconComponent className="w-24 h-24 text-white z-10" />
                      
                      {/* 动画背景 */}
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.1, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                    
                    {/* 步骤编号 */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {step.number}
                    </div>
                  </motion.div>
                </div>

                {/* 箭头连接器（除了最后一个步骤） */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 mt-80"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + 0.5 }}
                  >
                    <ArrowRight className="w-8 h-8 text-gray-500 rotate-90" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* 行动号召 */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            准备好开始你的创新之旅了吗？
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            现在就开始打磨你的项目，用 Cursor AI 的力量创造出令人惊艳的作品，
            在技术舞台上展现你的才华。
          </p>
          <motion.button
            className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>立即开始</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}