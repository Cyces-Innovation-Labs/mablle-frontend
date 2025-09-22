import AppText from "./AppText";

const AppTag = ({
  tag,
  color,
  className,
}: {
  tag: string;
  color: string;
  className?: string;
}) => {
  return (
    <AppText className={`app-tag app-tag-${color} ${className}`}>{tag}</AppText>
  );
};

export default AppTag;
