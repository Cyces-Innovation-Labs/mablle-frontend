import type { ReactNode } from "react"

const AppPageWrapper = ({ children }:{ children?: ReactNode }) => {
  return (
    <div className="px-5 py-1 m-2 rounded-md h-[calc(100%-26px)]">{children}</div>
  )
}

export default AppPageWrapper