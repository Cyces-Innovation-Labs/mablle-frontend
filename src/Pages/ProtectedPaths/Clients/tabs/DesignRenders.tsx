import GreenTickCircle from "@/icons/GreenTickCircle";
import { Copy, Trash2 } from "lucide-react";

type RenderImage = {
  id: string;
  url: string;
  isFinal?: boolean;
};

type RenderCategory = {
  id: string;
  name: string;
  files: number;
  images: RenderImage[];
};

type Walkthrough = {
  id: string;
  title: string;
  uploadedOn: string;
};

const sampleImg = "/project-sample.jpg";

const featuredFloorplans: RenderImage[] = [
  { id: "f1", url: sampleImg, isFinal: true },
  { id: "f2", url: sampleImg },
];

const categories: RenderCategory[] = [
  {
    id: "kitchen",
    name: "KITCHEN",
    files: 3,
    images: [
      { id: "k1", url: sampleImg, isFinal: true },
      { id: "k2", url: sampleImg },
      { id: "k3", url: sampleImg },
    ],
  },
  {
    id: "bedroom",
    name: "BEDROOM",
    files: 6,
    images: Array.from({ length: 6 }).map((_, i) => ({ id: `b${i}`, url: sampleImg, isFinal: i === 0 })),
  },
  {
    id: "dining",
    name: "DINING ROOM",
    files: 4,
    images: Array.from({ length: 4 }).map((_, i) => ({ id: `d${i}`, url: sampleImg, isFinal: i === 0 })),
  },
  {
    id: "bathroom",
    name: "BATHROOM",
    files: 2,
    images: Array.from({ length: 2 }).map((_, i) => ({ id: `ba${i}`, url: sampleImg, isFinal: i === 0 })),
  },
  {
    id: "foyer",
    name: "FOYER",
    files: 1,
    images: [{ id: "fo1", url: sampleImg, isFinal: true }],
  },
  {
    id: "master",
    name: "MASTER BEDROOM",
    files: 2,
    images: Array.from({ length: 2 }).map((_, i) => ({ id: `m${i}`, url: sampleImg, isFinal: i === 0 })),
  },
];

const walkthroughs: Walkthrough[] = [
  { id: "w1", title: "Living Room Walkthrough", uploadedOn: "23rd sep 2025" },
  { id: "w2", title: "Living Room Walkthrough", uploadedOn: "23rd sep 2025" },
  { id: "w3", title: "Living Room Walkthrough", uploadedOn: "23rd sep 2025" },
  { id: "w4", title: "Living Room Walkthrough", uploadedOn: "23rd sep 2025" },
];

const RenderCard = ({ img }: { img: RenderImage }) => (
  <div
    className={`relative rounded-[16px] overflow-hidden ${
      img.isFinal ? "border-2 border-[#0DA000]" : "border border-[#E4E7EC]"
    }`}
  >
    {img.isFinal && (
      <div className="absolute left-0 top-0 bg-white rounded-br-[20px] px-4 py-[6px] shadow-sm flex items-center gap-2">
        <span className="text-[#0DA000] font-bold text-[12px] leading-none">FINAL</span>
        <GreenTickCircle />
      </div>
    )}
    <img src={img.url} alt={img.id} className="w-full aspect-square object-cover" />
  </div>
);

const SectionHeader = ({ title, count }: { title: string; count?: string }) => (
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-2">
      <span className="text-md font-semibold text-[#9C6E61]">{title} {count && <span className="text-sm font-semibold text-[#717182] ml-2">({count})</span>}</span>
    </div>
    
  </div>
);

const DesignRenders = () => {
  return (
    <div className="space-y-6 bg-white shadow-sm rounded-[8px] p-6">
      <div className="flex items-center gap-2 mb-10">
          <div className="w-1 h-5 bg-[#054D8B] rounded" />
          <span className="text-base font-semibold">Design Renders</span>
        </div>
      
      {/* 3D Floorplan */}
      <SectionHeader title="3D Floorplan" count={`${featuredFloorplans.length} files`} />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {featuredFloorplans.map((img) => (
          <RenderCard key={img.id} img={img} />
        ))}
      </div>

      {/* Design Renders collection */}
      <SectionHeader title="Design Renders" count={`${categories.reduce((a, c) => a + c.images.length, 0)} files`} />

      <div className="space-y-6">
        {categories.map((cat) => (
          <div key={cat.id} className="rounded-[8px] border border-[#ECECEC] space-y-2">
            <div className="flex items-center justify-between px-4 py-2">
              <span className="text-sm font-bold tracking-wide text-[#23211D]">{cat.name}</span>
              <span className="text-sm font-semibold text-[#717182]">{cat.files} {cat.files === 1 ? "file" : "files"}</span>
            </div>
            <div className="px-4 pb-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {cat.images.map((img) => (
                <RenderCard key={img.id} img={img} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Walkthroughs */}
      <div className="mt-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-[#9C6E61]">3D Walkthroughs</span>
          <span className="text-xs text-muted-foreground">{walkthroughs.length} files</span>
        </div>
        <div className="space-y-2">
          {walkthroughs.map((item) => (
            <div key={item.id} className="rounded-[8px] bg-[#F3F5F8] px-4 py-3 flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-primary">{item.title}</div>
                <div className="text-[13px] font-semibold text-[#717182]">uploaded on {item.uploadedOn}</div>
              </div>
              <div className="flex items-center gap-4">
                <button className="inline-flex items-center gap-1 text-[#054D8B] text-sm font-semibold"><Copy className="w-4 h-4" /> Copy Link</button>
                <button className="inline-flex items-center gap-1 text-[#E7000B] text-sm"><Trash2 className="w-4 h-4" /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignRenders;

