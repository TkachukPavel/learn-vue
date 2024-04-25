import MovieTile from '@/components/MovieTile.vue'
import { movieMock } from '@/tests/mocks/MovieDetails.mock'
import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Component/MovieTile',
  component: MovieTile,
  tags: ['autodocs'],
  args: {
    movie: movieMock,
    onMovieClicked: fn(),
  },
} satisfies Meta<typeof MovieTile>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
