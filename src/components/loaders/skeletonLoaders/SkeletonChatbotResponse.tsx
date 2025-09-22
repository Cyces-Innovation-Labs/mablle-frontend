import { Skeleton } from "@/components/ui/skeleton"

const SkeletonChatbotResponse = () => {
  return (
    <div className='flex items-center gap-2 w-full'>
        <div className="w-full">
            <Skeleton className='h-4 w-40 rounded-2xl mb-2' />
            <Skeleton className='h-4 w-full rounded-2xl mb-1' />
            <Skeleton className='h-4 w-full rounded-2xl mb-1' />
            <Skeleton className='h-4 w-full rounded-2xl mb-1' />
            <Skeleton className='h-4 w-full rounded-2xl mb-1' />
            <Skeleton className='h-4 w-full rounded-2xl mb-1' />
        </div>
    </div>)
}

export default SkeletonChatbotResponse