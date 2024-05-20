import { beforeEach, describe, expect, it } from 'vitest'
import { DOMWrapper, VueWrapper, mount } from '@vue/test-utils'
import { By } from '@/utils/testing'
import SearchForm from '@/components/SearchForm.vue'
import { testid } from '@/constants'

const initQuery = 'Test'
describe('SearchForm', () => {
  let wrapper: VueWrapper,
    input: DOMWrapper<HTMLInputElement>,
    btn: DOMWrapper<HTMLButtonElement>,
    form: DOMWrapper<HTMLFormElement>

  beforeEach(() => {
    wrapper = mount(SearchForm, {
      props: { initQuery },
    })

    input = wrapper.find(By.testId(testid.SearchForm.input))
    btn = wrapper.find(By.testId(testid.SearchForm.btn))
    form = wrapper.find(By.testId(testid.SearchForm.container))
  })

  it('is created', () => {
    expect(wrapper).toBeTruthy()
  })

  it('sets initial query', () => {
    expect(input.element.value).toEqual(initQuery)
  })

  it('emits event on search', async () => {
    // Arrange
    await input.setValue('Test 1')

    // Act
    await form.trigger('submit')

    // Assert
    expect(wrapper.emitted('onSearch')).toEqual([['Test 1']])
  })
})
