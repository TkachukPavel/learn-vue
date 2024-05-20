import Dialog from '@/components/Dialog.vue'
import { testid } from '@/constants'
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
    const dialogTitle = wrapper.find(By.testId(testid.Dialog.title))

    expect(dialogTitle.text()).toEqual('Test')
  })

  it('closes dialog on button click', async () => {
    await wrapper.find(By.testId(testid.Dialog.closeBtn)).trigger('click')

    expect(
      wrapper.find(By.testId(testid.Dialog.container)).exists(),
    ).toBeFalsy()
  })
})
