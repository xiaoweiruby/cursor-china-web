import { motion } from 'framer-motion';
import { Users, Target, Lightbulb } from 'lucide-react';

/**
 * 比赛介绍模块组件
 * 详细说明比赛目的、背景和核心价值
 */
export default function IntroSection() {
  const highlights = [
    {
      icon: Target,
      title: '技术创新',
      description: '展示基于 Cursor AI 的创新项目和技术实践'
    },
    {
      icon: Users,
      title: '社区建设',
      description: '连接中文开发者，构建活跃的技术交流平台'
    },
    {
      icon: Lightbulb,
      title: '知识分享',
      description: '传播 AI 编程经验，推动技术普及和应用'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            关于比赛
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            首届 Cursor 中文社区征文大赛旨在发掘和展示中文开发者社区中基于 AI 编程工具的创新实践。
            我们相信每一位开发者都有独特的技术洞察和创新思维，这个舞台就是为了让这些闪光点被更多人看见。
          </p>
        </motion.div>

        {/* 主要内容 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* 左侧文字内容 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-black mb-6">
              为什么举办这个比赛？
            </h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                在 AI 编程工具快速发展的今天，<strong>Cursor</strong> 作为新一代智能代码编辑器，
                正在改变开发者的工作方式。我们希望通过这个比赛，收集和展示中文开发者社区中
                最具创新性的项目和技术实践。
              </p>
              <p>
                本次比赛与 <strong>阿里云数据库</strong> 合作，为参赛者提供强大的技术支持和丰厚的奖励。
                我们不仅关注技术的创新性，更重视项目的实用价值和社会影响力。
              </p>
              <p>
                无论你是 AI 编程的先行者，还是刚刚开始探索的新手，这里都有属于你的舞台。
                让我们一起推动中文开发者社区的技术进步，共同迎接 AI 编程的未来。
              </p>
            </div>
          </motion.div>

          {/* 右侧特色亮点 */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-6 bg-black rounded-lg hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-black mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* 合作伙伴信息 */}
        <motion.div
          className="text-center bg-black text-white py-12 px-8 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">战略合作伙伴</h3>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
            本次比赛得到了阿里云数据库的大力支持，为参赛者提供专业的技术平台和丰富的云服务资源。
          </p>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-lg font-semibold border border-white/20 px-6 py-3 rounded-lg">
              阿里云数据库
            </div>
            <div className="text-2xl text-gray-400">×</div>
            <div className="text-lg font-semibold border border-white/20 px-6 py-3 rounded-lg">
              Cursor 中文社区
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}