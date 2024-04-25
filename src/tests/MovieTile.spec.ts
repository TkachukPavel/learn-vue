import MovieTile from '@/components/MovieTile.vue'
import { mount, type VueWrapper } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'
import { movieMock } from './mocks/MovieDetails.mock'
import { By } from '@/utils/testing'

const tile = 'movie-tile'
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
})
