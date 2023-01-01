import { mount } from '@vue/test-utils'

import Incre from './Incre'

describe('Incre.tsx', () => {
  it('renders a Incre', () => {
    const wrapper = mount(Incre)
    expect(wrapper.text()).toMatch('Times clicked')
  })
})
// import { render, screen } from '@testing-library/vue'
//
// import Incre from './Incre'
//
// test('tsx: increments value on click', async () => {
//   // render component.
//   await render(Incre)
//
//   // mounted
//   const textNode = await screen.findByTestId('clicked')
//   expect(textNode).toBeTruthy()
//   expect(textNode.textContent).toBe('Times clicked: 0')
//   //
//   // // Click a couple of times.
//   // const button = await screen.findByTestId('increment')
//   // await fireEvent.click(button)
//   // await fireEvent.click(button)
//   //
//   // expect(textNode.textContent).toBe('Times clicked: 2')
// })
