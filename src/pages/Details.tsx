import Header from '../components/common/Header';
import { motion } from 'framer-motion';
import IntroSection from '../components/details/IntroSection';
import RewardsSection from '../components/details/RewardsSection';
import ProcessSection from '../components/details/ProcessSection';
import CriteriaSection from '../components/details/CriteriaSection';
import TimelineSection from '../components/details/TimelineSection';
import FAQSection from '../components/details/FAQSection';
import SpotlightEffect from '../components/common/SpotlightEffect';

/**
 * 比赛详情页面
 * 整合所有详情模块，展示完整的比赛信息
 */
export default function Details() {
  return (
    <SpotlightEffect className="min-h-screen bg-black">
      <Header />
      
      <main>
        <IntroSection />
        <RewardsSection />
        <ProcessSection />
        <CriteriaSection />
        <TimelineSection />
        <FAQSection />
      </main>
    </SpotlightEffect>
  );
}