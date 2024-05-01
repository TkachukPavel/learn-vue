import MovieForm from '@/components/MovieForm.vue'
import { movieMock } from '@/tests/mocks/MovieDetails.mock'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Component/MovieForm',
  component: MovieForm,
  tags: ['autodocs'],
} satisfies Meta<typeof MovieForm>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const withMovie: Story = {
  args: {
    movie: movieMock,
  },
}
