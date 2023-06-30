import React from 'react'
import { ConfigProvider, LocaleProvider } from '@douyinfe/semi-ui'
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN'

const withTheme = (node: JSX.Element) => (
  <>
    <ConfigProvider>
      {/* https://semi.design/zh-CN/other/locale */}
      <LocaleProvider locale={zh_CN}>{node}</LocaleProvider>
    </ConfigProvider>
  </>
)

export default withTheme
