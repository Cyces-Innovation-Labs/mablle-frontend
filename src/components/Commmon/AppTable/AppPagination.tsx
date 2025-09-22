import AppText from "@/components/Commmon/AppText";
import { Button } from "@/components/ui/button";

const AppPagination = ({
  page,
  perPage = 24,
  total,
  setPage,
}: {
  page: number;
  perPage?: number;
  total: number;
  setPage: (page: number) => void;
}) => {
  const totalPages = Math.ceil(total / perPage);
  return (
    <div className="flex justify-between items-center py-[12px] px-[24px] w-full">
      <AppText
        className="font-medium text-sm text-text-secondary"
        text={`Page ${page} of ${totalPages}`}
      />
      <div className="flex gap-2">
        <Button
          variant={"outline"}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Previous
        </Button>
        <Button
          variant={"outline"}
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default AppPagination;
