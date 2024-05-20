import MovieTile from '@/components/MovieTile.vue'
import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { movieMock } from './mocks/MovieDetails.mock'
import { By } from '@/utils/testing'
import { testid } from '@/constants'

const tile = testid.MovieTile.container
const menu = testid.MovieTile.menu
const edit = testid.MovieTile.menuEdit
const del = testid.MovieTile.menuDelete
describe('MovieTile', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(MovieTile, { props: { movie: movieMock } })
  })

  it('should create', () => {
    expect(wrapper).toBeTruthy()
  })

  it('should emit on tile click', async () => {
    // Act
    await wrapper.find(By.testId(tile)).trigger('click')

    // Assert
    expect(wrapper.emitted('movieClicked')).toEqual([[movieMock]])
  })

  it('should emit on edit movie', async () => {
    // Act
    await wrapper.find(By.testId(tile)).trigger('mouseover')
    await wrapper.find(By.testId(menu)).trigger('click')
    await wrapper.find(By.testId(edit)).trigger('click')

    // Assert
    expect(wrapper.emitted('editMovie')).toEqual([[movieMock]])
  })

  it('should emit on delete movie', async () => {
    // Act
    await wrapper.find(By.testId(tile)).trigger('mouseover')
    await wrapper.find(By.testId(menu)).trigger('click')
    await wrapper.find(By.testId(del)).trigger('click')

    // Assert
    expect(wrapper.emitted('deleteMovie')).toEqual([[movieMock]])
  })
})
