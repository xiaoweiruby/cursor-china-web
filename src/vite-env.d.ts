/// <reference types="vite/client" />

/**
 * Vite环境变量类型声明
 */
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}