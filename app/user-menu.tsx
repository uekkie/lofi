import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { ListVideo } from 'lucide-react'

export default function UserMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="ghost">
          <Avatar>
            <AvatarImage src="https://pbs.twimg.com/profile_images/1381956162740871168/Ngibewkx_400x400.jpg" />
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">user status </PopoverContent>
    </Popover>
  )
}
