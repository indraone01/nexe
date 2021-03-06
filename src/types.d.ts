declare module 'got' {
  interface GotFn {
    (url: string, options?: any): Promise<{ body: string }>
    stream(url: string, optoins?: any): any
  }
  function got(url: string, options?: any): Promise<{ body: string }>
  export = got as GotFn
}
declare module 'download' {
  import { Duplex } from 'stream'
  interface DownloadOptions {
    extract?: boolean
    strip?: number
    filename?: string
    proxy?: string
  }
  function download(
    url: string,
    destination?: string | DownloadOptions,
    options?: DownloadOptions
  ): PromiseLike<Buffer> & Duplex
  export = download
}
