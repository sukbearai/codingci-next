import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { Imagine, Upscale, Variation } from '../request'
import { Message } from '../interfaces/message'
import Tag from '../components/tag'
import { userInfoStore } from '../store'
import { Button, Table } from '@douyinfe/semi-ui'

const columns = [
  {
    title: '标题',
    dataIndex: 'name',
  },
  {
    title: '大小',
    dataIndex: 'size',
  },
  {
    title: '所有者',
    dataIndex: 'owner',
  },
  {
    title: '更新日期',
    dataIndex: 'updateTime',
  },
]
const data = [
  {
    key: '1',
    name: 'Semi Design 设计稿.fig',
    nameIconSrc:
      'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png',
    size: '2M',
    owner: '姜鹏志',
    updateTime: '2020-02-02 05:13',
    avatarBg: 'grey',
  },
  {
    key: '2',
    name: 'Semi Design 分享演示文稿',
    nameIconSrc:
      'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
    size: '2M',
    owner: '郝宣',
    updateTime: '2020-01-17 05:31',
    avatarBg: 'red',
  },
  {
    key: '3',
    name: '设计文档',
    nameIconSrc:
      'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
    size: '34KB',
    owner: 'Zoey Edwards',
    updateTime: '2020-01-26 11:01',
    avatarBg: 'light-blue',
  },
  {
    key: '4',
    name: '系统测试 文档',
    nameIconSrc:
      'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
    size: '100KB',
    owner: '刘芸',
    updateTime: '2022-02-01 17:01',
    avatarBg: 'light-blue',
  },
  {
    key: '4',
    name: '工作总结分享 ',
    nameIconSrc:
      'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
    size: '9KB',
    owner: '张大大',
    updateTime: '2020-08-13 12:01',
    avatarBg: 'light-blue',
  },
  {
    key: '6',
    name: '产品文档',
    nameIconSrc:
      'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
    size: '300KB',
    owner: '产品小张',
    updateTime: '2020-06-01 13:08',
    avatarBg: 'light-blue',
  },
  {
    key: '7',
    name: '测试用例',
    nameIconSrc:
      'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
    size: '18KB',
    owner: '朱静',
    updateTime: '2020-05-21 10:01',
    avatarBg: 'light-blue',
  },
  {
    key: '8',
    name: '需求文档',
    nameIconSrc:
      'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
    size: '9KB',
    owner: '刘燕飞',
    updateTime: '2020-09-24 11:01',
    avatarBg: 'light-blue',
  },
  {
    key: '9',
    name: '开发文档',
    nameIconSrc:
      'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
    size: '1KB',
    owner: '项目经理',
    updateTime: '2020-03-09 21:01',
    avatarBg: 'light-blue',
  },
  {
    key: '10',
    name: '会议记录',
    nameIconSrc:
      'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
    size: '34KB',
    owner: '总经理',
    updateTime: '2020-03-03 17:01',
    avatarBg: 'light-blue',
  },
]

const Index: React.FC = () => {
  // const [userInfo, setUserInfo]: any = useRecoilState(userInfoStore)
  const switchMode = () => {
    const body = document.body
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode')
      // 以下这行代码，window.setMode仅用于当通过本Demo切换时，通知Semi官网Header记录更新当前模式（只用于演示）。在您的代码里无需存在。
    } else {
      body.setAttribute('theme-mode', 'dark')
    }
  }

  return (
    <>
      <Button onClick={switchMode}>切换主题色</Button>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  )
}

export default Index
