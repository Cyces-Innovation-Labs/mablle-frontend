
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

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

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="flex justify-between items-center py-[12px] px-[24px] w-full border-t">     
        <Button
          variant={"outline"}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
         <ArrowLeft className="w-4 h-4" /> Previous
        </Button>
        {pages.map((p) => (
          <Button
            key={p}
            variant={p === page ? "default" : "ghost"}
            size="icon"
            onClick={() => setPage(p)}
          >
            {p}
          </Button>
        ))}
        <Button
          variant={"outline"}
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
         Next   <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
  );
};

export default AppPagination;
