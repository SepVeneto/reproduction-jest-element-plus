import { shallowMount, mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = mount(HelloWorld, {
      props: { msg }
    })
    console.log(wrapper.html())
    expect(wrapper.text()).toMatch(msg)
  })
})
