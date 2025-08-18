import React from 'react'
import { motion } from 'framer-motion'
import { Layout } from '../components/layout'
import {
  HeroSection,
  IntroSection,
  RewardsSection,
  ProcessSection,
  ScheduleSection,
  RulesSection,
  CTASection
} from '../components/sections'

/**
 * 首页组件
 * 整合所有区域组件形成完整的首页布局
 */
const Home: React.FC = () => {
  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }

  return (
    <motion.div
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Layout showNavigation={false} showFooter={false}>
        {/* 聚光灯开场区域 */}
        <HeroSection />
        
        {/* 比赛介绍区域 */}
        <IntroSection />
        
        {/* 奖励展示区域 */}
        <RewardsSection />
        
        {/* 参赛流程区域 */}
        <ProcessSection />
        
        {/* 时间安排区域 */}
        <ScheduleSection />
        
        {/* 比赛规则区域 */}
        <RulesSection />
        
        {/* 结尾号召区域 */}
        <CTASection />
        
        {/* 主办方和赞助方信息 */}
        <motion.div
          className="bg-black text-white py-8 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          </div>
        </motion.div>
      </Layout>
    </motion.div>
  )
}

export default Home