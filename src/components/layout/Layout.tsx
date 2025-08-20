import React from 'react'
import { motion } from 'framer-motion'
import Navigation from './Navigation'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  className?: string
  showNavigation?: boolean
  showFooter?: boolean
}

/**
 * 主布局组件
 * 包含导航栏、主要内容区域和页脚
 */
const Layout: React.FC<LayoutProps> = ({ 
  children, 
  className = '',
  showNavigation = true,
  showFooter = true
}) => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col relative overflow-hidden">

      {/* 导航栏 */}
      {showNavigation && (
        <motion.div
          className="relative z-10"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Navigation />
        </motion.div>
      )}

      {/* 主要内容区域 */}
      <motion.main 
        className={`flex-1 relative z-10 ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {children}
      </motion.main>

      {/* 页脚 */}
      {showFooter && (
        <motion.div
          className="relative z-10"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Footer />
        </motion.div>
      )}
    </div>
  )
}

export default Layout