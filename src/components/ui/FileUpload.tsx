import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Upload, X, File } from 'lucide-react'
import { cn, formatFileSize, isValidFileType } from '../../lib/utils'
import Button from './Button'

interface FileUploadProps {
  label?: string
  accept?: string
  multiple?: boolean
  maxSize?: number // in bytes
  allowedTypes?: string[]
  onFileSelect?: (files: File[]) => void
  error?: string
  helperText?: string
  className?: string
}

/**
 * 文件上传组件
 * 支持拖拽上传、文件类型验证和大小限制
 */
const FileUpload: React.FC<FileUploadProps> = ({
  label,
  accept,
  multiple = false,
  maxSize = 10 * 1024 * 1024, // 10MB default
  allowedTypes = ['image/*', 'application/pdf', '.doc', '.docx', '.txt'],
  onFileSelect,
  error,
  helperText,
  className
}) => {
  const [files, setFiles] = useState<File[]>([])
  const [isDragOver, setIsDragOver] = useState(false)
  const [uploadError, setUploadError] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  /**
   * 处理文件选择
   */
  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return

    const fileArray = Array.from(selectedFiles)
    const validFiles: File[] = []
    let errorMessage = ''

    for (const file of fileArray) {
      // 检查文件大小
      if (file.size > maxSize) {
        errorMessage = `文件 "${file.name}" 超过最大大小限制 (${formatFileSize(maxSize)})`
        break
      }

      // 检查文件类型
      if (!isValidFileType(file, allowedTypes)) {
        errorMessage = `文件 "${file.name}" 类型不支持`
        break
      }

      validFiles.push(file)
    }

    if (errorMessage) {
      setUploadError(errorMessage)
      return
    }

    setUploadError('')
    const newFiles = multiple ? [...files, ...validFiles] : validFiles
    setFiles(newFiles)
    onFileSelect?.(newFiles)
  }

  /**
   * 处理拖拽事件
   */
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    handleFileSelect(e.dataTransfer.files)
  }

  /**
   * 移除文件
   */
  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index)
    setFiles(newFiles)
    onFileSelect?.(newFiles)
  }

  /**
   * 打开文件选择器
   */
  const openFileSelector = () => {
    fileInputRef.current?.click()
  }

  const displayError = error || uploadError

  return (
    <div className={cn('w-full', className)}>
      {label && (
        <label className="block text-sm font-medium text-white mb-2">
          {label}
        </label>
      )}

      <motion.div
        className={cn(
          'relative border-2 border-dashed rounded-lg p-6 transition-all duration-200 cursor-pointer',
          isDragOver
            ? 'border-white bg-white/5'
            : 'border-gray-600 hover:border-gray-500',
          displayError && 'border-red-500'
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={openFileSelector}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFileSelect(e.target.files)}
          className="hidden"
        />

        <div className="flex flex-col items-center justify-center text-center">
          <Upload className="w-8 h-8 text-gray-400 mb-2" />
          <p className="text-sm text-white mb-1">
            点击选择文件或拖拽文件到此处
          </p>
          <p className="text-xs text-gray-400">
            支持 {allowedTypes.join(', ')} 格式，最大 {formatFileSize(maxSize)}
          </p>
        </div>
      </motion.div>

      {/* 文件列表 */}
      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <motion.div
              key={`${file.name}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg border border-gray-700"
            >
              <div className="flex items-center space-x-3">
                <File className="w-4 h-4 text-gray-400" />
                <div>
                  <p className="text-sm text-white">{file.name}</p>
                  <p className="text-xs text-gray-400">{formatFileSize(file.size)}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation()
                  removeFile(index)
                }}
                className="text-gray-400 hover:text-red-400"
              >
                <X className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      )}

      {displayError && (
        <p className="mt-2 text-sm text-red-400">
          {displayError}
        </p>
      )}

      {helperText && !displayError && (
        <p className="mt-2 text-sm text-gray-400">
          {helperText}
        </p>
      )}
    </div>
  )
}

export default FileUpload