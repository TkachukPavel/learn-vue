import { beforeEach, describe, expect, it } from 'vitest'
import { DOMWrapper, VueWrapper, mount } from '@vue/test-utils'
import { By } from '@/utils/testing'
import Counter from '@/components/Counter.vue'

describe('Counter', () => {
  let wrapper: VueWrapper,
    incBtn: DOMWrapper<HTMLButtonElement>,
    decBtn: DOMWrapper<HTMLButtonElement>,
    val: DOMWrapper<HTMLDivElement>
  beforeEach(() => {
    wrapper = mount(Counter)

    incBtn = wrapper.find(By.testId('counter__inc-btn'))
    decBtn = wrapper.find(By.testId('counter__dec-btn'))
    val = wrapper.find(By.testId('counter__val'))
  })

  it('is created', () => {
    expect(wrapper).toBeTruthy()

    expect(val.text()).toEqual('0')
  })

  it('can increment counter', async () => {
    // Act
    await incBtn.trigger('click')

    // Assert
    expect(val.text()).toEqual('1')
  })

  it('can decrement counter', async () => {
    // Act
    await decBtn.trigger('click')

    // Assert
    expect(val.text()).toEqual('-1')
  })
})
