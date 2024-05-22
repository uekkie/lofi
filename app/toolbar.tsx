import OnlineStatus from './online-status'
import PlayList from './play-list'
import Pomodoro from './pomodoro'
import UserMenu from './user-menu'

export default function Toolbar() {
  return (
    <div className="bg-muted px-4 border h-14 flex gap-3 items-center">
      <Pomodoro />
      <span className="flex-1"></span>
      <OnlineStatus />
      <PlayList />
      <UserMenu />
    </div>
  )
}
