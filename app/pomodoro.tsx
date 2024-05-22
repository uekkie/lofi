import { Button } from '@/components/ui/button'
import { Play } from 'lucide-react'

export default function Pomodoro() {
  return (
    <div className="flex gap-3 items-center">
      <Button size="icon" variant="ghost">
        <Play size={20}></Play>
        <span className="sr-only">スタート</span>
      </Button>
      <time>25:00</time>
      <div className="overflow-hidden rounded-full h-5 w-40">
        <div className="size-full bg-sky-500"></div>
      </div>
    </div>
  )
}
