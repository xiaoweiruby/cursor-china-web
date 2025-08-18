import React from 'react'
import { motion } from 'framer-motion'
import { Github, Twitter, Mail, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

interface FooterProps {
  className?: string
}

/**
 * 页脚组件
 * 包含社交链接、版权信息和联系方式
 */
const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/cursor-community',
      label: 'GitHub社区'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      href: 'https://twitter.com/cursor_community',
      label: 'Twitter官方'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:contact@cursor-community.com',
      label: '联系邮箱'
    }
  ]

  const footerLinks = [
    {
      title: '比赛信息',
      links: [
        { name: '比赛规则', href: '#rules' },
        { name: '评选标准', href: '#criteria' },
        { name: '奖励设置', href: '#rewards' },
        { name: '时间安排', href: '#schedule' }
      ]
    },
    {
      title: '参与方式',
      links: [
        { name: '提交作品', href: '/submit' },
        { name: '参赛流程', href: '#process' },
        { name: '常见问题', href: '#faq' },
        { name: '技术支持', href: '#support' }
      ]
    },
    {
      title: '社区资源',
      links: [
        { name: 'Cursor官网', href: 'https://cursor.sh' },
        { name: '中文社区', href: 'https://cursor-community.com' },
        { name: '学习资料', href: '#resources' },
        { name: '开发文档', href: '#docs' }
      ]
    }
  ]

  return (
    <footer className={`bg-black border-t border-white/10 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* 品牌信息 */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Cursor中文社区征文大赛
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                展示你的创意，分享你的故事，与全球开发者一起探索AI编程的无限可能。
              </p>
              
              {/* 社交链接 */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* 链接列表 */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('#') ? (
                      <button
                        onClick={() => {
                          const element = document.querySelector(link.href)
                          element?.scrollIntoView({ behavior: 'smooth' })
                        }}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </button>
                    ) : link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* 分割线 */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* 版权信息 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center text-gray-400 text-sm"
            >
              <span>&copy; {currentYear} Cursor中文社区. 保留所有权利.</span>
            </motion.div>

            {/* 制作信息 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center text-gray-400 text-sm"
            >
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>by Cursor Community</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer