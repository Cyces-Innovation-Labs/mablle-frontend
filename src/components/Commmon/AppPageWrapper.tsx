import type { ReactNode } from "react"

const AppPageWrapper = ({ children }:{ children?: ReactNode }) => {
  return (
    <div className="bg-background px-6 py-1 m-3 border border-gray-200 rounded-md h-[calc(100%-26px)]">{children}</div>
  )
}

export default AppPageWrapper