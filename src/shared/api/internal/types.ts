export interface ServerErrorResponse {
  error: string
  advice?: string
  fields?: {
    [field: string]: string
  }
}
