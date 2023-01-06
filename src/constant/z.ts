export const K_CATA: string[] = ['v2', 'v3sfc', 'v3tsx']

export const K_ENTRY: IMenu[] = [
  {
    level: 1,
    name_en: 'Web',
    name_zh: 'Web',
    name_meta: 'Web',
    children: [
      { level: 2, name_zh: 'Css位置', name_en: 'css position', name_meta: 'css_pos', desc: 'zss' },
      { level: 2, name_zh: '居中', name_en: 'center', name_meta: 'css_center' },
      { level: 2, name_zh: '长宽一半', name_en: 'padding half', name_meta: 'css_padpct' },
      { level: 2, name_zh: 'Margin0Auto', name_en: 'margin 0 auto', name_meta: 'css_margin0auto' },
      { level: 2, name_zh: '正则replaceAll', name_en: 'regex replaceAll', name_meta: 'basic_regex_replaceAll' },
    ],
  },
  {
    level: 1,
    name_en: 'Vue',
    name_zh: 'Vue',
    name_meta: 'Vue',
    children: [{ level: 2, name_zh: 'vue3 tsx', name_en: 'vue3 tsx', name_meta: 'css_padpct' }],
  },
  {
    level: 1,
    name_en: 'React',
    name_zh: 'React',
    name_meta: 'React',
    children: [
      { level: 2, name_zh: 'useMemo使用', name_en: 'usememo', name_meta: 'react_usememo' },
      {
        level: 2,
        name_zh: 'useCallback使用',
        name_en: 'usecallback',
        name_meta: 'react_usecallback',
      },
    ],
  },
]
export const K_ENTRY_LANG: Record<string, string> = {
  'zh-CN': 'name_zh',
  en: 'name_en',
  ja: 'name_ja',
  ko: 'name_ko',
}
