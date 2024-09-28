import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from '@repo/ui/components/ui/avatar'

function Profile() {
  return (
    <div>
      <Avatar className="w-36 h-36">
        <AvatarImage src="/images/profile.webp" />
        <AvatarFallback>앗 내 프로필 이미지 ㅠ</AvatarFallback>
      </Avatar>
    </div>
  )
}

export default Profile
