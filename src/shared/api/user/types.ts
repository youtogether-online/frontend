export type User = {
  id: string
  username: string
  name?: string
  biography?: string
  //FIXME: Change friends type
  // friends?: unknown
  userRole: "admin" | "user"
  avatar?: string
  email: string
  //FIXME: Change rooms type
  // rooms?: unknown
  language?: "en" | "ru"
  theme?: "white" | "dark"
  //FIXME: Change movies type
  // movies?: unknown
}