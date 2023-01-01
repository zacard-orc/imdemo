module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\js$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts|tsx)$',
  moduleFileExtensions: ['vue', 'js', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@/(.*)$': ['<rootDir>/src/$1'],
    '^@/(.*)\\.tsx$': ['<rootDir>/src/$1'],
  },
}
