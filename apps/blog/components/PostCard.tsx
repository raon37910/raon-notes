import Image from 'next/image'

import { Post } from '~/config/types'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@repo/ui/components/ui/card'
import { Badge } from '@repo/ui/components/ui/badge'
import { CalendarIcon } from 'lucide-react'

interface PostCardProps {
  post: Post
}

function PostCard({ post }: PostCardProps) {
  const {
    title,
    desc,
    categoryPublicName,
    thumbnail,
    dateString,
    readingMinutes,
  } = post

  return (
    <Card className="w-full max-w-md overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-sm hover:border-green-600 hover:shadow-green-400 group">
      <div className="relative w-full h-48">
        <Image
          src={thumbnail}
          alt="블로그 포스트 썸네일"
          fill
          className="object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <Badge variant="secondary">{categoryPublicName}</Badge>
          <div className="flex items-center text-sm text-muted-foreground">
            <CalendarIcon className="mr-1 h-3 w-3" />
            {dateString}
          </div>
        </div>
        <h2 className="text-2xl font-bold transition-colors duration-300 ease-in-out group-hover:text-green-600">
          {title}
        </h2>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{desc}</p>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        {readingMinutes} Min..
      </CardFooter>
    </Card>
  )
}

export default PostCard
