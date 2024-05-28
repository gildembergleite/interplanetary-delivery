export type RequestOptions = {
  method: string
  headers?: Record<string, string>
  body?: any
}

export type MethodProps = {
  endpoint: string
  headers?: Record<string, string>
  body?: any
}

export class BaseApi {
  protected baseURL: string
  protected defaultHeaders: Record<string, string>

  constructor(baseURL: string, defaultHeaders: Record<string, string> = {}) {
    this.baseURL = baseURL
    this.defaultHeaders = defaultHeaders
  }

  protected async request(endpoint: string, options: RequestOptions) {
    const url = `${this.baseURL}${endpoint}`
    const headers = { ...this.defaultHeaders, ...options.headers }

    const response = await fetch(url, {
      method: options.method,
      headers,
      body: JSON.stringify(options.body),
    })

    return this.handleResponse(response)
  }

  protected async handleResponse(response: Response) {
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`)
    }
    return response.json()
  }

  protected get({ endpoint, headers }: MethodProps) {
    return this.request(endpoint, { method: 'GET', headers })
  }

  protected post({ endpoint, headers, body }: MethodProps) {
    return this.request(endpoint, { method: 'POST', headers, body })
  }

  protected patch({ endpoint, headers, body }: MethodProps) {
    return this.request(endpoint, { method: 'PATCH', headers, body })
  }

  protected delete({ endpoint, headers }: MethodProps) {
    return this.request(endpoint, { method: 'DELETE', headers })
  }
}
