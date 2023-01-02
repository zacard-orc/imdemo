export const K_CATA: string[] = ['v2', 'v3sfc', 'v3tsx']

export const K_ENTRY: IMenu[] = [
  {
    level: 1,
    name_zh: 'Web',
    name_meta: 'Web',
    children: [
      { level: 2, name_zh: 'Css位置', name_meta: 'css_pos' },
      { level: 2, name_zh: '居中', name_meta: 'css_center' },
      { level: 2, name_zh: '长宽一半', name_meta: 'css_padpct' },
    ],
  },
  {
    level: 1,
    name_zh: 'Vue',
    name_meta: 'Vue',
    children: [
      { level: 2, name_zh: 'vue3 tsx', name_meta: 'css_padpct' },
      { level: 2, name_zh: '居中', name_meta: 'css_padpct' },
      { level: 2, name_zh: '长宽一半', name_meta: 'css_padpct' },
    ],
  },
  {
    level: 1,
    name_zh: 'React',
    name_meta: 'React',
    children: [
      { level: 2, name_zh: 'useMemo使用', name_meta: 'react_usememo' },
      { level: 2, name_zh: 'useCallback使用', name_meta: 'react_usecallback' },
    ],
  },
]
