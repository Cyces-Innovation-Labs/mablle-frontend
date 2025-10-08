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

export const userEndpoints = {
  list: "/api/admin-panel/user/list/",
  meta: "/api/admin-panel/user/list/table-meta/",
  cud: (id: string) => `/api/admin-panel/user/cud/${id? `${id}/`:`` }`,
  createMeta: "/api/admin-panel/user/cud/meta/",
  updateMeta: (id: string) => `/api/admin-panel/user/cud/${id}/meta`,
  updateDetail: (id: string) => `/api/admin-panel/user/update-detail/${id}/`,
  detail: (id: string) => `/api/admin-panel/user/detail/${id}/`,
}

export const fileEndpoints = {
  upload: "/api/access/profile-picture/upload/",
}

export const metaEndpoints = {
  region: "/api/common/region/list/",
}