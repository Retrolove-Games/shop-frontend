export type LoginTokens = {
  authToken: string
  refreshToken: string
}

export type User = {
  id: string
  username: string
}

export type LoginRespone = {
  login: LoginTokens & {
    user: User
  } | null
}

export type AuthStore = {
  authToken: string
  refreshToken: string
  id: string
}