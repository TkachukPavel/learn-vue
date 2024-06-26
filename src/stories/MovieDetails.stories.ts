import MovieDetails from '@/components/MovieDetails.vue'
import { movieMock } from '@/tests/mocks/MovieDetails.mock'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Component/MovieDetails',
  component: MovieDetails,
  tags: ['autodocs'],
  args: {
    movie: movieMock,
  },
} satisfies Meta<typeof MovieDetails>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
