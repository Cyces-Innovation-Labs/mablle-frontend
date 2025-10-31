import type { ReactNode } from "react"

const AppPageWrapper = ({ children }:{ children?: ReactNode }) => {
  return (
    <div className="px-8 py-6 rounded-md h-[calc(100%-26px)]">{children}</div>
  )
}

export default AppPageWrapper