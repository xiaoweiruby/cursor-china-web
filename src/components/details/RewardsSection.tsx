import { motion } from 'framer-motion';
import { Award, Users, DollarSign, TrendingUp, CheckCircle } from 'lucide-react';

/**
 * 奖励展示模块组件
 * 展示四大核心奖励：专家验证、云栖大会直通、现金奖励、影响力放大
 */
export default function RewardsSection() {
  const rewards = [
    {
      icon: CheckCircle,
      title: '专家验证',
      subtitle: '技术权威认可',
      description: '获得行业专家的专业评审和技术认可，为你的项目提供权威背书',
      features: [
        '阿里云技术专家评审',
        'Cursor 官方团队认可',
        '技术社区领袖推荐',
        '专业技术报告'
      ],
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Users,
      title: '云栖大会直通',
      subtitle: '顶级技术盛会',
      description: '直通云栖大会，与全球顶尖开发者面对面交流，展示你的创新成果',
      features: [
        '云栖大会演讲机会',
        '技术展示专区',
        '行业大咖面对面',
        '全程差旅支持'
      ],
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: DollarSign,
      title: '现金奖励',
      subtitle: '丰厚奖金激励',
      description: '设置多个奖项等级，为优秀作品提供实质性的现金奖励和技术支持',
      features: [
        '一等奖：￥50,000',
        '二等奖：￥20,000',
        '三等奖：￥10,000',
        '优秀奖：￥5,000'
      ],
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: TrendingUp,
      title: '影响力放大',
      subtitle: '全方位推广',
      description: '通过多渠道宣传推广，让你的项目获得更大的影响力和关注度',
      features: [
        '官方媒体报道',
        '技术社区推荐',
        '开源项目推广',
        '职业发展机会'
      ],
      color: 'from-gray-400 to-gray-600'
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
            丰厚奖励
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            我们为优秀的参赛作品准备了四大核心奖励，不仅有实质性的现金激励，
            更有珍贵的行业认可和职业发展机会。
          </p>
        </motion.div>

        {/* 奖励卡片网格 */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {rewards.map((reward, index) => {
            const IconComponent = reward.icon;
            return (
              <motion.div
                key={index}
                className="bg-black rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* 图标和标题 */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${reward.color} flex items-center justify-center mr-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-black">
                      {reward.title}
                    </h3>
                    <p className="text-gray-500 font-medium">
                      {reward.subtitle}
                    </p>
                  </div>
                </div>

                {/* 描述 */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {reward.description}
                </p>

                {/* 特性列表 */}
                <div className="space-y-3">
                  {reward.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${reward.color}`}></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 总奖金池展示 */}
        <motion.div
          className="bg-black text-white rounded-2xl p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Award className="w-16 h-16 text-white mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">总奖金池</h3>
          <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
            ￥100,000+
          </div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            除了现金奖励，我们还为获奖者提供技术资源、行业曝光和职业发展等多重价值，
            让每一份努力都得到应有的回报。
          </p>
        </motion.div>
      </div>
    </section>
  );
}