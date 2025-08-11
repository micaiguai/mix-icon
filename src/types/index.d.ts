export interface CollectionInfo {
  id: string
  name: string
  author?: { name: string, url: string }
  license?: { title: string, url: string }
  url?: string
  sampleIcons?: string[]
  category?: string
  palette?: string
  total?: number
  prepacked?: IconifyJSON
}

export interface CollectionMeta extends CollectionInfo {
  icons: string[]
  categories?: Record<string, string[]>
  variants?: Record<string, string[]>
}

export interface IconMeta {
  meta: CollectionMeta
  icon: string
}
