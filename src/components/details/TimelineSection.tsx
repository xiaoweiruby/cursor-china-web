import { motion } from 'framer-motion';
import { Calendar, Clock, Flag, Trophy, Users, Megaphone } from 'lucide-react';

/**
 * 时间安排模块组件
 * 展示比赛的完整时间线和重要节点
 */
export default function TimelineSection() {
  const timelineEvents = [
    {
      icon: Megaphone,
      date: '2025年8月1日',
      title: '比赛启动',
      subtitle: '官方宣布',
      description: '首届 Cursor 中文社区征文大赛正式启动，开放报名通道',
      details: [
        '发布比赛官方公告',
        '开放作品提交系统',
        '启动社区宣传推广',
        '开始接受参赛咨询'
      ],
      status: 'completed',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Users,
      date: '2025年8月18日 - 9月18日',
      title: '通行证申请（作品提交）',
      subtitle: '创作阶段',
      description: '参赛者开发项目、撰写技术文章，并提交参赛作品',
      details: [
        '开发创新技术项目',
        '撰写高质量技术文章',
        '完善项目文档和演示',
        '通过官方渠道提交作品'
      ],
      status: 'active',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Clock,
      date: '2025年9月18日 - 9月23日',
      title: '后台甄选（作品评审）',
      subtitle: '专业评审',
      description: '技术专家对所有提交作品进行初步审核和筛选',
      details: [
        '检查作品完整性和规范性',
        '验证技术实现的真实性',
        '确认参赛资格和要求',
        '筛选进入复审的作品'
      ],
      status: 'upcoming',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Trophy,
      date: '2025年9月24日',
      title: '主角登场（结果公布）',
      subtitle: '荣耀时刻',
      description: '公布获奖名单，举办线上颁奖典礼',
      details: [
        '公布最终获奖名单',
        '举办线上颁奖典礼',
        '分享优秀作品展示',
        '启动奖励发放流程'
      ],
      status: 'upcoming',
      color: 'from-gray-400 to-gray-600'
    }
  ];

  const importantDates = [
    {
      date: '9月18日',
      event: '作品提交截止',
      description: '最后提交机会',
      urgent: true
    },
    {
      date: '9月23日',
      event: '作品评审结束',
      description: '评分阶段完成',
      urgent: false
    },
    {
      date: '9月24日',
      event: '获奖名单公布',
      description: '最终结果揭晓',
      urgent: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-white';
      case 'active': return 'bg-white animate-pulse';
      case 'upcoming': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return '已完成';
      case 'active': return '进行中';
      case 'upcoming': return '即将开始';
      default: return '待定';
    }
  };

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
            时间安排
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            清晰的时间规划，让每个参赛者都能充分准备。
            从启动到颁奖，每个重要节点都为你精心安排。
          </p>
        </motion.div>

        {/* 重要日期提醒 */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            重要日期提醒
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {importantDates.map((item, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  item.urgent 
                    ? 'border-white bg-white/10 hover:bg-white/20' 
                    : 'border-gray-600 bg-gray-800/50 hover:bg-gray-700/50'
                }`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`text-2xl font-bold mb-2 ${
                  item.urgent ? 'text-white' : 'text-white'
                }`}>
                  {item.date}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {item.event}
                </div>
                <div className="text-gray-400 text-sm">
                  {item.description}
                </div>
                {item.urgent && (
                  <div className="mt-3 px-3 py-1 bg-white text-black text-xs rounded-full inline-block">
                    紧急
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 时间线 */}
        <div className="relative">
          {/* 中央时间线 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full"></div>
          
          {timelineEvents.map((event, index) => {
            const IconComponent = event.icon;
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                className={`relative flex items-center mb-16 ${
                  isLeft ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* 内容卡片 */}
                <div className={`w-5/12 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                  <motion.div
                    className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* 状态标签 */}
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                      event.status === 'completed' ? 'bg-white/20 text-white' :
              event.status === 'active' ? 'bg-white/20 text-white' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {getStatusText(event.status)}
                    </div>
                    
                    {/* 日期 */}
                    <div className="text-gray-400 text-sm mb-2">
                      {event.date}
                    </div>
                    
                    {/* 标题 */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {event.title}
                    </h3>
                    <p className="text-lg text-gray-300 mb-4">
                      {event.subtitle}
                    </p>
                    
                    {/* 描述 */}
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    
                    {/* 详细内容 */}
                    <div className="space-y-3">
                      {event.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: (index * 0.2) + (detailIndex * 0.1) }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${event.color} mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-400 text-sm">{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
                
                {/* 中央图标 */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <motion.div
                    className={`w-20 h-20 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center border-4 border-black`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  {/* 状态指示器 */}
                  <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full ${getStatusColor(event.status)} border-2 border-black`}></div>
                </div>
                
                {/* 空白区域（保持布局平衡） */}
                <div className="w-5/12"></div>
              </motion.div>
            );
          })}
        </div>

        {/* 倒计时区域 */}
        <motion.div
          className="mt-20 text-center bg-gradient-to-r from-gray-500/10 to-gray-600/10 rounded-2xl p-8 border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            距离作品提交截止还有
          </h3>
          <div className="flex justify-center items-center space-x-8 mb-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">45</div>
              <div className="text-gray-400">天</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">12</div>
              <div className="text-gray-400">小时</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">30</div>
              <div className="text-gray-400">分钟</div>
            </div>
          </div>
          <p className="text-gray-300 mb-6">
            时间宝贵，抓紧最后的机会完善你的作品！
          </p>
          <motion.button
            className="bg-gradient-to-r from-gray-400 to-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-gray-500 hover:to-gray-700 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            立即提交作品
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}