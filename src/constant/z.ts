export const K_CATA: string[] = ['v2', 'v3sfc', 'v3tsx']

export const K_ENTRY_WEB: IMenu[] = [
  {
    level: 1,
    name_en: 'Web',
    name_zh: 'Web',
    name_meta: 'Web',
    children: [
      { level: 2, name_zh: 'Css位置', name_en: 'css position', name_meta: 'css_pos', desc: 'position relative absolute float' },
      { level: 2, name_zh: 'Css滤镜', name_en: 'css_filter', name_meta: 'css_filter', desc: '滤镜 filter blur grayscale' },
      { level: 2, name_zh: '居中', name_en: 'center', name_meta: 'css_center' },
      { level: 2, name_zh: '长宽一半', name_en: 'padding half', name_meta: 'css_padpct', desc: 'transform' },
      { level: 2, name_zh: 'Margin0Auto', name_en: 'margin 0 auto', name_meta: 'css_margin0auto', desc: 'transform' },
      { level: 2, name_zh: '正则replaceAll', name_en: 'regex replaceAll', name_meta: 'basic_regex_replaceAll' },
      { level: 2, name_zh: '毛玻璃', name_en: 'glass', name_meta: 'css_glass', desc: 'glass filter 毛玻璃' },
      {
        level: 2,
        name_zh: '基线baseline',
        name_en: 'baseline',
        name_meta: 'css_baseline',
        desc: 'verical align 基线 垂直 baseline',
      },
      { level: 2, name_zh: '浮动float', name_en: 'float', name_meta: 'css_float', desc: 'float 浮动 清除浮动' },
      { level: 2, name_zh: 'dnd拖动', name_en: 'dnd_h5_drag', name_meta: 'basic_dnd', desc: 'dnd h5 draggable 拖动' },
      { level: 2, name_zh: 'svg', name_en: 'svg', name_meta: 'basic_svg', desc: 'svg路径 path clip' },
    ],
  },
  {
    level: 1,
    name_en: 'Vue',
    name_zh: 'Vue',
    name_meta: 'Vue',
    children: [
      { level: 2, name_zh: 'vue3 tsx', name_en: 'vue3 tsx', name_meta: 'vue3_tsx' },
      { level: 2, name_zh: 'vue3 sfc', name_en: 'vue3 sfc', name_meta: 'vue3_sfc' },
      { level: 2, name_zh: 'vue语法糖', name_en: 'vue json component', name_meta: 'vue_abstract_schema' },
    ],
  },
  {
    level: 1,
    name_en: 'React',
    name_zh: 'React',
    name_meta: 'React',
    children: [
      { level: 2, name_zh: 'useMemo使用', name_en: 'useMemo', name_meta: 'use_memo', desc: 'useMemo' },
      { level: 2, name_zh: 'useCallback使用', name_en: 'useCallback', name_meta: 'use_callback', desc: 'useCallback' },
      { level: 2, name_zh: 'JSX.Element', name_en: 'jsxElement', name_meta: 'jsx_element_def', desc: 'jsx.element' },
    ],
  },
  {
    level: 1,
    name_en: 'Node',
    name_zh: 'Node',
    name_meta: 'Node',
    children: [{ level: 2, name_zh: 'sequelize', name_en: 'sequelize', name_meta: 'sequelize_use', desc: 'sequelize 使用' }],
  },
]

export const K_ENTRY_GO: IMenu[] = [
  {
    level: 1,
    name_en: 'Basic',
    name_zh: '基础',
    name_meta: 'Basic',
    children: [
      { level: 2, name_zh: '日志', name_en: 'go log', name_meta: 'go_log', desc: 'go log format' },
      { level: 2, name_zh: '协程', name_en: 'go func', name_meta: 'go_func', desc: 'go func x' },
    ],
  },
]

export const K_ENTRY_JAVA: IMenu[] = [
  {
    level: 1,
    name_en: 'Basic',
    name_zh: '基础',
    name_meta: 'Basic',
    children: [
      { level: 2, name_zh: 'Java日志', name_en: 'go log', name_meta: 'go_log', desc: 'go log format' },
      { level: 2, name_zh: 'Java协程', name_en: 'go func', name_meta: 'go_func', desc: 'go func x' },
    ],
  },
]

export const K_ENTRY_K8S: IMenu[] = [
  {
    level: 1,
    name_en: 'Docker',
    name_zh: 'Docker',
    name_meta: 'Docker',
    children: [
      { level: 2, name_zh: 'app转映像', name_en: 'docker template', name_meta: 'docker_template', desc: '抽成docker模版' },
      { level: 2, name_zh: '常用镜像', name_en: 'docker images', name_meta: 'docker_runimages', desc: '常用镜像运行' },
    ],
  },
]

export const K_ENTRY_CPP: IMenu[] = [
  {
    level: 1,
    name_en: 'Basic',
    name_zh: '基础',
    name_meta: 'Basic',
    children: [
      { level: 2, name_zh: 'CPP日志', name_en: 'go log', name_meta: 'go_log', desc: 'go log format' },
      { level: 2, name_zh: 'CPP协程', name_en: 'go func', name_meta: 'go_func', desc: 'go func x' },
    ],
  },
]

export const K_ENTRY_LANG: Record<string, string> = {
  'zh-CN': 'name_zh',
  en: 'name_en',
  ja: 'name_ja',
  ko: 'name_ko',
}
