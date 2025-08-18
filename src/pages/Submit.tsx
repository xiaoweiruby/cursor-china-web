import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Send, FileText, User, Mail, Users, AlertCircle, CheckCircle } from 'lucide-react'
import { Layout } from '../components/layout'
import { Button, Input, Textarea, FileUpload } from '../components/ui'
import { isValidEmail, formatFileSize } from '../lib/utils'

interface FormData {
  title: string
  authorName: string
  email: string
  teamMembers: string
  category: string
  description: string
  files: File[]
}

interface FormErrors {
  title?: string
  authorName?: string
  email?: string
  category?: string
  description?: string
  files?: string
}

/**
 * 作品提交页面
 * 包含完整的表单验证和文件上传功能
 */
const Submit: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    authorName: '',
    email: '',
    teamMembers: '',
    category: '',
    description: '',
    files: []
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const categories = [
    { value: 'tutorial', label: '教程分享', description: '分享Cursor使用技巧和教程' },
    { value: 'project', label: '项目实战', description: '展示用Cursor完成的实际项目' },
    { value: 'comparison', label: '对比分析', description: '对比Cursor与其他IDE的优势' },
    { value: 'efficiency', label: '效率提升', description: '分享提高编程效率的心得' },
    { value: 'innovation', label: '创新应用', description: '介绍Cursor在特定领域的创新应用' },
    { value: 'other', label: '其他', description: '其他与Cursor相关的优质内容' }
  ]

  /**
   * 验证表单数据
   */
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // 标题验证
    if (!formData.title.trim()) {
      newErrors.title = '请输入作品标题'
    } else if (formData.title.length < 5) {
      newErrors.title = '标题至少需要5个字符'
    } else if (formData.title.length > 100) {
      newErrors.title = '标题不能超过100个字符'
    }

    // 作者姓名验证
    if (!formData.authorName.trim()) {
      newErrors.authorName = '请输入作者姓名'
    } else if (formData.authorName.length < 2) {
      newErrors.authorName = '姓名至少需要2个字符'
    }

    // 邮箱验证
    if (!formData.email.trim()) {
      newErrors.email = '请输入邮箱地址'
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址'
    }

    // 分类验证
    if (!formData.category) {
      newErrors.category = '请选择作品分类'
    }

    // 描述验证
    if (!formData.description.trim()) {
      newErrors.description = '请输入作品描述'
    } else if (formData.description.length < 50) {
      newErrors.description = '描述至少需要50个字符'
    } else if (formData.description.length > 1000) {
      newErrors.description = '描述不能超过1000个字符'
    }

    // 文件验证
    if (formData.files.length === 0) {
      newErrors.files = '请上传至少一个文件'
    } else if (formData.files.length > 3) {
      newErrors.files = '最多只能上传3个文件'
    } else {
      const totalSize = formData.files.reduce((sum, file) => sum + file.size, 0)
      if (totalSize > 10 * 1024 * 1024) { // 10MB
        newErrors.files = '文件总大小不能超过10MB'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  /**
   * 处理表单提交
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // 这里应该是实际的API调用
      // const response = await submitEntry(formData)
      
      setSubmitSuccess(true)
      
      // 3秒后跳转到成功页面
      setTimeout(() => {
        window.location.href = '/success'
      }, 3000)
      
    } catch (error) {
      console.error('提交失败:', error)
      alert('提交失败，请稍后重试')
    } finally {
      setIsSubmitting(false)
    }
  }

  /**
   * 处理输入变化
   */
  const handleInputChange = (field: keyof FormData, value: string | File[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // 清除对应字段的错误
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }))
    }
  }

  /**
   * 返回首页
   */
  const handleGoBack = () => {
    window.location.href = '/'
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  if (submitSuccess) {
    return (
      <Layout showNavigation={false} showFooter={false}>
        <div className="min-h-screen flex items-center justify-center bg-black">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-md mx-auto px-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-2xl font-bold text-white mb-4">提交成功！</h2>
            <p className="text-gray-300 mb-6">
              你的作品已成功提交，我们将在3个工作日内进行初步审核。
            </p>
            <p className="text-sm text-gray-400">
              正在跳转到成功页面...
            </p>
          </motion.div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout showNavigation={false} showFooter={false}>
      <div className="min-h-screen bg-black py-12">
        {/* 背景装饰 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* 头部 */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              onClick={handleGoBack}
              className="mb-6 text-gray-400 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回首页
            </Button>
            
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                提交你的
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  征文作品
                </span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                分享你的Cursor使用心得，展示你的技术实力，
                与全球开发者一起推动AI编程的发展。
              </p>
            </div>
          </motion.div>

          {/* 表单 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* 基本信息 */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-400" />
                  基本信息
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Input
                    label="作品标题 *"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    error={errors.title}
                    placeholder="请输入作品标题"
                  />
                  <Input
                    label="作者姓名 *"
                    value={formData.authorName}
                    onChange={(e) => handleInputChange('authorName', e.target.value)}
                    error={errors.authorName}
                    placeholder="请输入你的姓名"
                  />
                  <Input
                    label="邮箱地址 *"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    error={errors.email}
                    placeholder="请输入邮箱地址"
                  />
                  <Input
                    label="团队成员"
                    value={formData.teamMembers}
                    onChange={(e) => handleInputChange('teamMembers', e.target.value)}
                    placeholder="如果是团队作品，请输入其他成员姓名"
                    helperText="个人参赛可留空"
                  />
                </div>
              </motion.div>

              {/* 作品分类 */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-green-400" />
                  作品分类
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categories.map((category) => (
                    <label
                      key={category.value}
                      className={`relative cursor-pointer group ${
                        formData.category === category.value
                          ? 'bg-blue-500/20 border-blue-400/50'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                      } border rounded-xl p-4 transition-all duration-300`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={category.value}
                        checked={formData.category === category.value}
                        onChange={(e) => handleInputChange('category', e.target.value)}
                        className="sr-only"
                      />
                      <div className="text-sm font-semibold text-white mb-1">
                        {category.label}
                      </div>
                      <div className="text-xs text-gray-400">
                        {category.description}
                      </div>
                      {formData.category === category.value && (
                        <div className="absolute top-2 right-2">
                          <CheckCircle className="w-4 h-4 text-blue-400" />
                        </div>
                      )}
                    </label>
                  ))}
                </div>
                {errors.category && (
                  <p className="text-red-400 text-sm mt-2 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.category}
                  </p>
                )}
              </motion.div>

              {/* 作品描述 */}
              <motion.div variants={itemVariants}>
                <Textarea
                  label="作品描述 *"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  error={errors.description}
                  placeholder="请详细描述你的作品内容、创作背景、技术亮点等（50-1000字）"
                  rows={6}
                  helperText={`${formData.description.length}/1000 字符`}
                />
              </motion.div>

              {/* 文件上传 */}
              <motion.div variants={itemVariants}>
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-purple-400" />
                  文件上传
                </h3>
                <FileUpload
                  label="作品文件 *"
                  onFileSelect={(files) => handleInputChange('files', files)}
                  error={errors.files}
                  accept=".pdf,.doc,.docx,.txt,.md,.zip,.rar"
                  maxSize={10 * 1024 * 1024}
                  helperText="支持PDF、Word、文本、压缩包等格式，最多3个文件，总大小不超过10MB"
                />
              </motion.div>

              {/* 提交按钮 */}
              <motion.div variants={itemVariants} className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleGoBack}
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    取消
                  </Button>
                  <Button
                    type="submit"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 px-8"
                  >
                    {isSubmitting ? '提交中...' : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        提交作品
                      </>
                    )}
                  </Button>
                </div>
              </motion.div>
            </form>
          </motion.div>

          {/* 提示信息 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <div className="bg-blue-500/10 border border-blue-400/30 rounded-xl p-4 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-2">
                <AlertCircle className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-semibold">温馨提示</span>
              </div>
              <p className="text-sm text-gray-300">
                提交前请仔细检查所有信息，提交后将无法修改。
                我们将在3个工作日内完成初步审核并通过邮件通知结果。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

export default Submit