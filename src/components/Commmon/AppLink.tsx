import { forwardRef, type ReactNode } from "react";
import { Link, type LinkProps } from "react-router";

const AppLink = forwardRef<
  HTMLAnchorElement,
  LinkProps & { children: ReactNode }
>(({ to, children, ...props }, ref) => {
  return (
    <Link ref={ref} to={to} {...props}>
      {children}
    </Link>
  );
});

export default AppLink;
