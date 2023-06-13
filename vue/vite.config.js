import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  chainWebpack(config) {
    globalSass(config)
  }
})

const globalSass = config => {
  const oneOfsMap = config.module.rule('scss').oneOfs.store
  oneOfsMap.forEach((item) => {
    item
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: './src/style/public.scss'  //相对路径
      })
      .end()
  })

}