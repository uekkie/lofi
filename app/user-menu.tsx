import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import useLocalStorageState from 'use-local-storage-state'
import { LofiSettings } from './settings'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

const defaultValue: LofiSettings = {
  name: 'noname',
  volume: 0.2,
  playList: '', // "https://www.youtube.com/watch?v=LXb3EKWsInQ"
  avatarURL: '',
}

export default function UserMenu() {
  const [settings, setSettings] = useLocalStorageState<LofiSettings>(
    'lofi-settings',
    {
      defaultValue,
      storageSync: true,
    }
  )
  const form = useForm<LofiSettings>({
    defaultValues: settings || defaultValue,
  })
  const onSubmit = (data: LofiSettings) => {
    setSettings(data)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="icon" variant="ghost">
          <Avatar>
            <AvatarImage src="https://pbs.twimg.com/profile_images/1381956162740871168/Ngibewkx_400x400.jpg" />
          </Avatar>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="name"
              render={({ field }) => (
                <FormItem>
                  <Label>名前</Label>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="avatarURL"
              render={({ field }) => (
                <FormItem>
                  <Label>アバター画像</Label>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="volume"
              render={({ field }) => (
                <FormItem>
                  <Label>音量</Label>
                  <FormControl>
                    <Input type="number" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button>保存</Button>
          </form>
        </Form>
      </PopoverContent>
    </Popover>
  )
}
