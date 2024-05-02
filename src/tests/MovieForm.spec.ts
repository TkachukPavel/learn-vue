import { type VueWrapper, mount, DOMWrapper } from '@vue/test-utils'
import { movieMock } from './mocks/MovieDetails.mock'
import MovieForm from '@/components/MovieForm.vue'
import { beforeEach, describe, expect, it } from 'vitest'
import { By } from '@/utils/testing'
import {
  durationFormatter,
  scoreFormatter,
} from '@/utils/number-formatters'
import { genres } from '@/constants/genres.const'

describe('Movie Form', () => {
  let wrapper: VueWrapper,
    title: DOMWrapper<HTMLInputElement>,
    releaseDate: DOMWrapper<HTMLInputElement>,
    movieUrl: DOMWrapper<HTMLInputElement>,
    rating: DOMWrapper<HTMLInputElement>,
    genreDisplay: DOMWrapper<HTMLInputElement>,
    movieLength: DOMWrapper<HTMLInputElement>,
    movieDescription: DOMWrapper<HTMLInputElement>

  beforeEach(() => {
    wrapper = mount(MovieForm, { props: { movie: movieMock } })

    title = wrapper.find(By.testId('movie-form-title'))
    releaseDate = wrapper.find('#dp-input-movie-form-release-date')
    movieUrl = wrapper.find(By.testId('movie-form-url'))
    rating = wrapper.find(By.testId('movie-form-rating'))
    genreDisplay = wrapper.find(By.testId('movie-form-genre-input'))
    movieLength = wrapper.find(By.testId('movie-form-length'))
    movieDescription = wrapper.find(By.testId('movie-form-description'))
  })

  it('should create', () => {
    expect(wrapper).toBeTruthy()
  })
  describe('Score Field', () => {
    it('applies formatting to score field', () => {
      expect(rating.element.value).toContain(
        scoreFormatter(movieMock.score),
      )
    })

    it('resets value to maximum if it is bigger than max', async () => {
      await rating.setValue(100)
      await rating.trigger('blur')

      expect(rating.element.value).toEqual(scoreFormatter(10))
    })

    it('resets value to minimum if it is less than min', async () => {
      await rating.setValue(-100)
      await rating.trigger('blur')

      expect(rating.element.value).toEqual(scoreFormatter(0))
    })
  })

  describe('Duration Field', () => {
    it('formats initial value', async () => {
      expect(movieLength.element.value).toEqual(
        durationFormatter(movieMock.length),
      )
    })

    it('parses the value on focus', async () => {
      await movieLength.trigger('focus')

      expect(movieLength.element.value).toEqual(
        movieMock.length.toString(),
      )
    })
  })

  describe('Genres Field', () => {
    it('displays genres', () => {
      expect(genreDisplay.element.value).toEqual(
        movieMock.genres.join(', '),
      )
    })

    it('can modify genres', async () => {
      await genreDisplay.trigger('click')
      await wrapper.find('#genre-0').setValue(true)
      await genreDisplay.trigger('blur')

      expect(genreDisplay.element.value).toEqual(
        [...movieMock.genres, genres[0]].join(', '),
      )
    })
  })

  describe('Form', () => {
    it('can reset value', async () => {
      // Arrange
      await title.setValue('Test')
      await releaseDate.setValue(null)
      await movieUrl.setValue('Test')
      await rating.setValue(100)

      await genreDisplay.trigger('focus')
      await wrapper.find('#genre-0').setValue(true)

      await movieLength.setValue(100)
      await movieDescription.setValue('Test')

      // Act
      await wrapper.find(By.testId('movie-form')).trigger('reset')
      // Assert
      expect(title.element.value).toEqual(movieMock.title)
      expect(releaseDate.element.value).contain(
        Intl.DateTimeFormat('en-US', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }).format(movieMock.releaseDate),
      )

      expect(movieUrl.element.value).toEqual(movieMock.movieUrl ?? '')
      expect(rating.element.value).toEqual(scoreFormatter(movieMock.score))
      expect(genreDisplay.element.value).toEqual(
        movieMock.genres.join(', '),
      )
      expect(movieDescription.element.value).toEqual(movieMock.description)
    })

    it('can submit value', async () => {
      await wrapper.find(By.testId('movie-form')).trigger('submit')

      expect(wrapper.emitted('submit')).toEqual([[movieMock]])
    })
  })
})
