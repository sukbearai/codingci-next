import Link from 'next/link'
import React, { useState } from 'react'
import {
  Layout,
  Nav,
  Button,
  Breadcrumb,
  Avatar,
  Steps,
  Pagination,
  Row,
  Badge,
  Tag,
  Rating,
  Tooltip,
  Timeline,
  Popover,
} from '@douyinfe/semi-ui'
import {
  IconSemiLogo,
  IconCamera,
  IconBell,
  IconHelpCircle,
  IconBytedanceLogo,
  IconHome,
  IconHistogram,
  IconLive,
  IconSetting,
  IconEdit,
  IconList,
} from '@douyinfe/semi-icons'
import { RecoilRoot } from 'recoil'

const { Header, Footer, Sider, Content } = Layout

const ROUTES = {
  path: '/',
  routes: [
    {
      path: '/',
      name: 'MidJourney',
    },
  ],
}

type Route = (typeof ROUTES.routes)[0]

const menuHeaderRender = (logo: React.ReactNode, title: React.ReactNode) => (
  <Link href='/'>
    {logo}
    {title}
  </Link>
)

const menuItemRender = (options: Route, element: React.ReactNode) => (
  <Link href={options.path ?? '/'}>{element}</Link>
)

export default function Main(children: JSX.Element) {
  const rowStyle = { margin: '16px 10px' }
  const badgeStyle = {
    width: '42px',
    height: '42px',
    borderRadius: '4px',
    display: 'inline-block',
  }
  const tagStyle = { marginRight: 8, marginBottom: 8 }

  return (
    <>
      <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
        <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
          <div>
            <Nav mode='horizontal' defaultSelectedKeys={['Home']}>
              <Nav.Header>
                <IconSemiLogo
                  style={{ width: '96px', height: '36px', fontSize: 36 }}
                />
              </Nav.Header>
              <span
                style={{
                  color: 'var(--semi-color-text-2)',
                }}
              >
                <span
                  style={{
                    marginRight: '24px',
                    color: 'var(--semi-color-text-0)',
                    fontWeight: '600',
                  }}
                >
                  模版推荐
                </span>
                <span style={{ marginRight: '24px' }}>所有模版</span>
                <span>我的模版</span>
              </span>
              <Nav.Footer>
                <Button
                  theme='borderless'
                  icon={<IconBell size='large' />}
                  style={{
                    color: 'var(--semi-color-text-2)',
                    marginRight: '12px',
                  }}
                />
                <Button
                  theme='borderless'
                  icon={<IconHelpCircle size='large' />}
                  style={{
                    color: 'var(--semi-color-text-2)',
                    marginRight: '12px',
                  }}
                />
                <Avatar color='orange' size='small'>
                  YJ
                </Avatar>
              </Nav.Footer>
            </Nav>
          </div>
        </Header>
        <Layout>
          <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
            <Nav
              style={{ maxWidth: 220, height: '100%' }}
              defaultSelectedKeys={['Home']}
              items={[
                {
                  itemKey: 'Home',
                  text: '首页',
                  icon: <IconHome size='large' />,
                },
                {
                  itemKey: 'Histogram',
                  text: '基础数据',
                  icon: <IconHistogram size='large' />,
                },
                {
                  itemKey: 'Live',
                  text: '测试功能',
                  icon: <IconLive size='large' />,
                },
                {
                  itemKey: 'Setting',
                  text: '设置',
                  icon: <IconSetting size='large' />,
                },
              ]}
              footer={{
                collapseButton: true,
              }}
            />
          </Sider>
          <Content
            style={{
              padding: '24px',
              backgroundColor: 'var(--semi-color-bg-1)',
            }}
          >
            <Breadcrumb
              style={{
                marginBottom: '24px',
              }}
              routes={['首页']}
            />
            <RecoilRoot>{children}</RecoilRoot>
          </Content>
        </Layout>
        <Footer
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            color: 'var(--semi-color-text-2)',
            backgroundColor: 'rgba(var(--semi-grey-0), 1)',
          }}
        >
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <IconBytedanceLogo size='large' style={{ marginRight: '8px' }} />
            <span>Copyright © 2019 ByteDance. All Rights Reserved. </span>
          </span>
          <span>
            <span style={{ marginRight: '24px' }}>平台客服</span>
            <span>反馈建议</span>
          </span>
        </Footer>
      </Layout>
    </>
  )
}
