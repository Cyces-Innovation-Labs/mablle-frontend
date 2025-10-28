import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";

export type ExecutionImage = {
  id: string;
  url: string;
  uploadedBy: "admin" | "designer";
  uploaderInitials?: string;
};

interface ExecutionImagesProps {
  images?: ExecutionImage[];
  onAddMore?: () => void;
}

const defaultImages: ExecutionImage[] = Array.from({ length: 10 }).map((_, i) => ({
  id: `img-${i + 1}`,
  url: "/project-sample.jpg",
  uploadedBy: i % 2 === 0 ? "admin" : "designer",
  uploaderInitials: i % 2 === 0 ? "A" : "C",
}));

const badgeStyles = (by: ExecutionImage["uploadedBy"]) =>
  by === "admin"
    ? "bg-[#717182] text-white"
    : "bg-[#9C6E61] text-white";

const ExecutionImages = ({ images = defaultImages, onAddMore }: ExecutionImagesProps) => {
  const total = images.length;

  return (
    <div className="space-y-4 bg-white shadow-sm rounded-[8px] p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1 h-5 bg-[#054D8B] rounded" />
          <span className="text-base font-semibold">Execution Images</span>
          <span className="text-sm text-muted-foreground">({total} files)</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={onAddMore} className="text-[#054D8B] gap-2">
            <UploadIcon className="w-4 h-4" /> Add more
          </Button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {images.map((img) => (
          <div key={img.id} className="relative rounded-[16px] overflow-hidden bg-muted">
            <img
              src={img.url}
              alt={img.id}
              className="w-full aspect-square object-cover"
              loading="lazy"
            />

            {/* Uploader badge */}
            <div className="absolute bottom-3 right-1">
              <Badge className={`rounded-full px-3 py-1 text-[10px] ${badgeStyles(img.uploadedBy)}`}>
                {img.uploadedBy === "admin" ? "Uploaded by admin" : "Uploaded by designer"}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExecutionImages;

