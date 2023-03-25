export interface InternalApiError {
  advice?: string
  error: string
  fields?: {
    [field: string]: string
  }
}
