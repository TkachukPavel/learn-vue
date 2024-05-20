import SortControl from '@/components/SortControl.vue'
import { testid } from '@/constants'
import { SortingEnum } from '@/models/SortControl.model'
import { By } from '@/utils/testing'
import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'

const toggle = testid.SortControl.menu
const releaseDate = testid.SortControl.year
const title = testid.SortControl.title

describe('Sort Control', () => {
  let wrapper: VueWrapper
  beforeEach(() => {
    wrapper = mount(SortControl, {
      props: {
        modelValue: SortingEnum.Title,
      },
    })
  })

  it('should create', () => {
    // Assert
    expect(wrapper).toBeTruthy()
    expect(
      wrapper.find<HTMLInputElement>(By.testId(toggle)).element.value,
    ).toEqual(SortingEnum.Title)
  })

  it('can change sorting', async () => {
    //Act
    await wrapper.find(By.testId(toggle)).trigger('click')
    await wrapper.find(By.testId(releaseDate)).trigger('click')

    // Assert
    expect(
      wrapper.find<HTMLInputElement>(By.testId(toggle)).element.value,
    ).toEqual(SortingEnum.ReleaseDate)
    expect(wrapper.emitted('update:modelValue')).toEqual([
      [SortingEnum.ReleaseDate],
    ])
  })
})
