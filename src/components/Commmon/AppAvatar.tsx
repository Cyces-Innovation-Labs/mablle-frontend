import { Avatar, AvatarImage,AvatarFallback } from "../ui/avatar"

const AppAvatar = ({ src, fallback }: { src: string, fallback: string }) => {
  return (
    <Avatar>
    <AvatarImage src={src} />
    <AvatarFallback>{fallback}</AvatarFallback>
  </Avatar>
  )
}

export default AppAvatar