export interface ServerErrorResponse {
  error: string;
  advice?: string;
  fields?: Record<string, string>;
}
