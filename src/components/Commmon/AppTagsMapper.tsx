import AppTag from "./AppTag";
import type { IAppTagsMapper } from "./types";

const AppTagsMapper = ({ tags = [] }: { tags: IAppTagsMapper[] }) => {
  return (
    <div className="flex items-center gap-[8px]">
      {tags?.map((tag) => (
        <AppTag key={tag?.name} tag={tag?.name} color={tag?.color} />
      ))}
    </div>
  );
};

export default AppTagsMapper;
