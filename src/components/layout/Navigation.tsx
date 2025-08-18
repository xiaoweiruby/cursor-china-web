import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { cn, scrollToElement } from '../../lib/utils'
import Button from '../ui/Button'

interface NavigationProps {
  className?: string
}

/**
 * 导航组件
 * 包含响应式菜单、平滑滚动和回到顶部功能
 */
const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const location = useLocation()
  const isHomePage = location.pathname === '/'

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      setIsScrolled(scrollTop > 50)

    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 导航菜单项
  const navigationItems = [
    { id: 'hero', label: '首页', href: '#hero' },
    { id: 'intro', label: '比赛介绍', href: '#intro' },
    { id: 'rewards', label: '奖励展示', href: '#rewards' },
    { id: 'process', label: '参赛流程', href: '#process' },
    { id: 'schedule', label: '时间安排', href: '#schedule' },
    { id: 'rules', label: '比赛规则', href: '#rules' }
  ]

  /**
   * 处理导航点击
   */
  const handleNavClick = (href: string) => {
    if (isHomePage && href.startsWith('#')) {
      const elementId = href.substring(1)
      scrollToElement(elementId, 80)
    }
    setIsMenuOpen(false)
  }



  return (
    <>
      {/* 主导航栏 */}
      <motion.nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-white/10'
            : 'bg-transparent',
          className
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                className="text-xl font-bold text-white"
                whileHover={{ scale: 1.05 }}
              >
                Cursor征文大赛
              </motion.div>
            </Link>

            {/* 桌面端导航菜单 */}
            <div className="hidden md:flex items-center space-x-8">
              {isHomePage && navigationItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
              
              <Link to="/submit">
                <Button variant="primary" size="sm">
                  提交作品
                </Button>
              </Link>
            </div>

            {/* 移动端菜单按钮 */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
                whileTap={{ scale: 0.95 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* 移动端菜单 */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
            >
              <div className="px-4 py-6 space-y-4">
                {isHomePage && navigationItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left text-white/80 hover:text-white transition-colors duration-200 py-2"
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                <Link to="/submit" className="block pt-4">
                  <Button variant="primary" size="sm" className="w-full">
                    提交作品
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>


    </>
  )
}

export default Navigation