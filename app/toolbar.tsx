import dynamic from 'next/dynamic'
import OnlineStatus from './online-status'
import Pomodoro from './pomodoro'

const UserMenu = dynamic(() => import('./user-menu'), { ssr: false })
const PlayList = dynamic(() => import('./play-list'), { ssr: false })

export default function Toolbar() {
  return (
    <div className="bg-muted px-4 border h-14 flex gap-3 items-center">
      <Pomodoro />
      <span className="flex-1" />
      <OnlineStatus />
      <PlayList />
      <UserMenu />
    </div>
  )
}
