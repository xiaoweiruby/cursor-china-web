import { motion } from 'framer-motion';
import { Lightbulb, Zap, Users, Trophy, Star, Target } from 'lucide-react';

/**
 * 评审标准模块组件
 * 展示六大评审维度和评分标准
 */
export default function CriteriaSection() {
  const criteria = [
    {
      icon: Lightbulb,
      title: '创新性',
      weight: '25%',
      description: '项目的创新程度和独特性',
      details: [
        '技术方案的创新性和前瞻性',
        '解决问题的独特思路和方法',
        '对现有技术的创新性应用',
        '项目概念的原创性和突破性'
      ],
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-500/10'
    },
    {
      icon: Zap,
      title: '技术实现',
      weight: '25%',
      description: '代码质量和技术深度',
      details: [
        '代码架构的合理性和可维护性',
        '技术选型的适当性和先进性',
        'Cursor AI 功能的有效利用',
        '项目的完整性和稳定性'
      ],
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-500/10'
    },
    {
      icon: Users,
      title: '实用价值',
      weight: '20%',
      description: '项目的实际应用价值',
      details: [
        '解决实际问题的有效性',
        '用户体验的优化程度',
        '商业化潜力和市场前景',
        '社会价值和影响力'
      ],
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-500/10'
    },
    {
      icon: Trophy,
      title: '完成度',
      weight: '15%',
      description: '项目的完整性和成熟度',
      details: [
        '功能模块的完整性',
        '项目文档的详细程度',
        '测试覆盖率和质量保证',
        '部署和演示的完善性'
      ],
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-500/10'
    },
    {
      icon: Star,
      title: '文章质量',
      weight: '10%',
      description: '技术文章的专业性',
      details: [
        '技术内容的深度和准确性',
        '文章结构的逻辑性和清晰度',
        '代码示例的质量和实用性',
        '知识分享的价值和启发性'
      ],
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-500/10'
    },
    {
      icon: Target,
      title: '社区影响',
      weight: '5%',
      description: '在技术社区的影响力',
      details: [
        '文章的阅读量和互动数据',
        '社区反馈和讨论热度',
        '技术传播的广度和深度',
        '对开发者群体的启发作用'
      ],
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-500/10'
    }
  ];

  const scoreRanges = [
    { range: '90-100分', level: '卓越', description: '在该维度表现极其出色，具有行业领先水平', color: 'text-white' },
    { range: '80-89分', level: '优秀', description: '在该维度表现优秀，达到高质量标准', color: 'text-gray-300' },
    { range: '70-79分', level: '良好', description: '在该维度表现良好，符合基本要求', color: 'text-gray-400' },
    { range: '60-69分', level: '合格', description: '在该维度表现合格，有改进空间', color: 'text-gray-500' },
    { range: '60分以下', level: '待改进', description: '在该维度需要显著改进', color: 'text-gray-600' }
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
            评审标准
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            公平、公正、公开的评审体系，确保每一份作品都能得到专业、全面的评价。
            我们从六个维度对参赛作品进行综合评估。
          </p>
        </motion.div>

        {/* 评审维度 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {criteria.map((criterion, index) => {
            const IconComponent = criterion.icon;
            
            return (
              <motion.div
                key={index}
                className={`${criterion.bgColor} border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* 图标和权重 */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${criterion.color} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${criterion.color} text-white text-sm font-semibold`}>
                    {criterion.weight}
                  </div>
                </div>
                
                {/* 标题和描述 */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {criterion.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {criterion.description}
                </p>
                
                {/* 详细标准 */}
                <div className="space-y-3">
                  {criterion.details.map((detail, detailIndex) => (
                    <motion.div
                      key={detailIndex}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (detailIndex * 0.05) }}
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${criterion.color} mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-400 text-sm">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 评分标准 */}
        <motion.div
          className="bg-black/50 rounded-2xl p-8 border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            评分等级标准
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {scoreRanges.map((score, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`text-2xl font-bold ${score.color} mb-2`}>
                  {score.range}
                </div>
                <div className="text-lg font-semibold text-white mb-3">
                  {score.level}
                </div>
                <div className="text-sm text-gray-400 leading-relaxed">
                  {score.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 评审流程说明 */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            评审流程
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">初审筛选</h4>
              <p className="text-gray-400 text-sm">技术专家对所有作品进行初步筛选，确保符合参赛要求</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">专家评审</h4>
              <p className="text-gray-400 text-sm">行业专家按照六大维度进行详细评分和专业点评</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">综合评定</h4>
              <p className="text-gray-400 text-sm">结合专家评分和社区反馈，确定最终获奖名单</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}