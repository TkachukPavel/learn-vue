import Dialog from '@/components/Dialog.vue'
import { By } from '@/utils/testing'
import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it, test } from 'vitest'

describe('Dialog', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(Dialog, {
      props: { title: 'Test', show: true },
      global: { stubs: { teleport: true } },
    })
  })

  it('creates wrapper', () => {
    expect(wrapper).toBeTruthy()
  })

  it('displays dialog title', () => {
    const dialogTitle = wrapper.find(By.testId('dialog-title'))

    expect(dialogTitle.text()).toEqual('Test')
  })

  it('closes dialog on button click', async () => {
    await wrapper.find(By.testId('dialog-close')).trigger('click')

    expect(wrapper.find(By.testId('dialog')).exists()).toBeFalsy()
  })
})
