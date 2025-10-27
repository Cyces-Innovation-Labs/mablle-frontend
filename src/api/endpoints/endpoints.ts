export const callEndpoints = {
  makeACall: `/make-call`,
  getCallHistory: `/get-list`,
  getDetail:"/detail"
}

export const authEndpoints = {
  login: "/api/access/login/",
  signup: "/api/signup",
  refresh: "/api/access/refresh/",

  sendOtp: "/api/access/trigger-otp/",
  verifyOtp: "/api/access/login/",
  logout: "/api/access/logout/",
}

export const clientEndpoints = {
  list: "/api/admin-panel/user/list/",
  meta: "/api/admin-panel/user/list/table-meta/",
  cud: (id: string) => `/api/admin-panel/client/cud/${id? `${id}/`:`` }`,
  createMeta: "/api/admin-panel/client/cud/meta/",
  updateMeta: (id: string) => `/api/admin-panel/client/cud/${id}/meta`,
  updateDetail: (id: string) => `/api/admin-panel/client/update-detail/${id}/`,
  detail: (id: string) => `/api/admin-panel/client/detail/${id}/`,
}

export const fileEndpoints = {
  upload: "/api/access/profile-picture/upload/",
}

export const designerEndpoints = {
  list: "/api/admin-panel/users/list/",
  meta: "/api/admin-panel/users/list/table-meta/",
  cud: (id: string) => `/api/admin-panel/designer/cud/${id? `${id}/`:`` }`,
  createMeta: "/api/admin-panel/designer/cud/meta/",
  updateMeta: (id: string) => `/api/admin-panel/designer/cud/${id}/meta`,
  updateDetail: (id: string) => `/api/admin-panel/designer/update-detail/${id}/`,
  detail: (id: string) => `/api/admin-panel/designer/detail/${id}/`,
}

export const metaEndpoints = {
  region: "/api/common/region/list/",
}
