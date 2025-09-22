import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import AppText from "@/components/Commmon/AppText";

const SkeletonChatbotQuestionsAnswersList = () => {
  return (
    <div className="space-y-4">
      {[1, 2, 3].map((item) => (
        <Card key={item} className="p-4">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <div>
                <AppText
                  text="Question"
                  className="text-grey-900 text-sm font-medium ml-1 mb-1"
                />
                <Skeleton className="h-[40px] w-full rounded-md" />
              </div>
              <div>
                <AppText
                  text="Answer"
                  className="text-grey-900 text-sm font-medium mt-2 ml-1 mb-1"
                />
                <Skeleton className="h-[80px] w-full rounded-md" />
              </div>
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-8 w-8 rounded-md" />
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SkeletonChatbotQuestionsAnswersList;
