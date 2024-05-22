'use client'

import dynamic from 'next/dynamic'
import Toolbar from './toolbar'

// ホットリロード時のエラーを回避するためdynamicでラップ
// サーバー側で使われないようにするため ssr: false を指定
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

export default function Room() {
  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="flex-1">
        <ReactPlayer
          width="100%"
          height="100%"
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        />
      </div>
      <Toolbar />
    </div>
  )
}
