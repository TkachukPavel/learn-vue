import { beforeEach, describe, expect, it } from 'vitest'
import { DOMWrapper, VueWrapper, mount } from '@vue/test-utils'
import { By } from '@/utils/testing'
import GenreSelect from '@/components/GenreSelect.vue'

const genres = ['Test1', 'Test2']
const selectedGenre = genres[1]
const selectedCss = 'genre-select__genre--selected'

describe('Genre Select', () => {
  let wrapper: VueWrapper, preselectedGenre: DOMWrapper<HTMLDivElement>

  beforeEach(() => {
    wrapper = mount(GenreSelect, {
      props: { selectedGenre, genres },
    })

    preselectedGenre = wrapper.find(By.testId(`genre-${selectedGenre}`))
  })

  it('is created', () => {
    expect(wrapper).toBeTruthy()
  })

  it('should pre-select genre', () => {
    // Assert
    expect(preselectedGenre.classes(selectedCss)).toEqual(true)
  })

  it('can select genre', async () => {
    // Arrange
    const otherGenre = wrapper.find(By.testId(`genre-${genres[0]}`))

    // Act
    await otherGenre.trigger('click')

    // Assert
    expect(otherGenre.classes(selectedCss)).toEqual(true)
    expect(preselectedGenre.classes(selectedCss)).toEqual(false)
  })
})
