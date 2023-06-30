import React, { useState } from 'react'
import { Space, Tag } from '@douyinfe/semi-ui'

interface Props {
  Data: string[]
  onClick?: (tag: string) => void
}

const App = ({ Data, onClick }: Props) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  // const tagsData = ["V1", "V2", "V3", "V4"];
  const handleChange = (tag: string, checked: boolean) => {
    if (!checked) return
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag)
    console.log('You are interested in: ', nextSelectedTags)
    onClick && onClick(tag)
    setSelectedTags(nextSelectedTags)
  }

  return (
    <>
      <Space className='ml-5' wrap>
        {Data.map((tag) => (
          <Tag
            className={
              selectedTags.includes(tag) ? 'bg-neutral-700' : 'bg-neutral-200'
            }
            key={tag}
          >
            {tag}
          </Tag>
        ))}
      </Space>
    </>
  )
}

export default App
