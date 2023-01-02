interface IMenu {
  level: number
  name_zh: string
  name_meta: string
  name_en: string
  name_ja?: string
  name_ko?: string
  children?: IMenu[]
}
