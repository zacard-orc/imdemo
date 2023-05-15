export const K_CATA: string[] = ['v2', 'v3sfc', 'v3tsx']

export const K_ENTRY_WEB: IMenu[] = [
  {
    level: 1,
    name_en: 'Web',
    name_zh: 'Web',
    name_meta: 'Web',
    children: [
      {
        level: 2,
        name_zh: '浏览器适配',
        name_en: 'broswer umd esm',
        name_meta: 'browser',
        desc: 'cjs amd umd iife debug lighthouse',
      },
      { level: 2, name_zh: 'Css位置', name_en: 'css position', name_meta: 'css_pos', desc: 'position relative absolute float' },
      { level: 2, name_zh: 'Css动画', name_en: 'css animation', name_meta: 'css_anm', desc: 'animation 动画' },
      { level: 2, name_zh: 'Css滤镜', name_en: 'css_filter', name_meta: 'css_filter', desc: '滤镜 filter blur grayscale' },
      {
        level: 2,
        name_zh: 'Css背景',
        name_en: 'css_background',
        name_meta: 'css_background',
        desc: '背景 background-size postition',
      },
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
      { level: 2, name_zh: 'Svg', name_en: 'svg', name_meta: 'basic_svg', desc: 'svg路径 path clip' },
      { level: 2, name_zh: 'Grid', name_en: 'grid', name_meta: 'basic_grid', desc: 'grid gap' },
      { level: 2, name_zh: 'H5 Size', name_en: 'h5 size', name_meta: 'css_h5size', desc: 'h5 viewport vw rem px' },
      { level: 2, name_zh: 'Font字体', name_en: 'font family', name_meta: 'css_font', desc: '字体思源，微软' },
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
      { level: 2, name_zh: 'vue动态组件', name_en: 'vue runcompile dynamic', name_meta: 'vue_dym' },
      { level: 2, name_zh: 'vue2测试工程', name_en: 'vue2 ava test runner', name_meta: 'vue2_test' },
      { level: 2, name_zh: 'vue虚拟列表', name_en: 'vue virtual list虚拟列表', name_meta: 'vue_vlist' },
      { level: 2, name_zh: 'vue3批量图片', name_en: 'vue3 批量 异步 加载图片 import.meta glob', name_meta: 'vue3_importmeta' },
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
    children: [
      { level: 2, name_zh: 'sequelize', name_en: 'sequelize', name_meta: 'sequelize_use', desc: 'sequelize 使用' },
      { level: 2, name_zh: 'koa', name_en: 'koa', name_meta: 'koa', desc: 'koa router cors bodyparser 使用' },
      {
        level: 2,
        name_zh: 'webpack',
        name_en: 'webpack',
        name_meta: 'webpack',
        desc: 'webpack plugin sourcemap inline eval cheap',
      },
      {
        level: 2,
        name_zh: 'git',
        name_en: 'git',
        name_meta: 'git',
        desc: 'git track stage version reset',
      },
    ],
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
      {
        level: 2,
        name_zh: 'Spring5+Java1.8',
        name_en: 'spring5+java1.8',
        name_meta: 'spring5_8',
        desc: 'spring5 java1.8 idea docker dockerfile',
      },
      { level: 2, name_zh: 'Spring5+Java11', name_en: 'spring5+java11', name_meta: 'spring5_11', desc: 'spring5 java11 idea' },
      { level: 2, name_zh: 'Maven3安装', name_en: 'maven3', name_meta: 'maven3', desc: 'maven3安装' },
      {
        level: 2,
        name_zh: '环境配置properties',
        name_en: 'properties',
        name_meta: 'prop',
        desc: 'application.properties @value @autowired',
      },
      { level: 2, name_zh: 'curl使用', name_en: 'curl', name_meta: 'curl', desc: 'curl post get head json' },
      { level: 2, name_zh: 'linux使用', name_en: 'linux', name_meta: 'linux', desc: 'curl exec find regex' },
      {
        level: 2,
        name_zh: 'Spring控制器',
        name_en: 'spring_controller',
        name_meta: 'spring_controller',
        desc: 'url controller json get post',
      },
      {
        level: 2,
        name_zh: 'SpringSwagger',
        name_en: 'spring_swagger',
        name_meta: 'spring_swagger',
        desc: 'spring swagger markdown url',
      },
      {
        level: 2,
        name_zh: '语法糖',
        name_en: 'sugar',
        name_meta: 'sugar',
        desc: 'spring sugar final syntex grammar 语法 类',
      },
      {
        level: 2,
        name_zh: '注解',
        name_en: 'annotation',
        name_meta: 'ant',
        desc: 'annotation 注解 反射 @',
      },
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
      { level: 2, name_zh: 'shell', name_en: 'shell', name_meta: 'shell', desc: 'shell' },
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
