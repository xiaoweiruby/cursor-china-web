import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Home, Submit, Success, NotFound } from './pages'

/**
 * 主应用组件
 * 配置路由系统和页面过渡动画
 */
function App() {
  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      {/* 白色边框容器 */}
      <div className="min-h-screen bg-black text-white border-4 border-white shadow-2xl max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <Routes>
            {/* 首页 */}
            <Route path="/" element={<Home />} />
            
            {/* 作品提交页面 */}
            <Route path="/submit" element={<Submit />} />
            
            {/* 提交成功页面 */}
            <Route path="/success" element={<Success />} />
            
            {/* 404页面 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App