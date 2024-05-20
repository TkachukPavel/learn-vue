import { api } from '@/constants'
import MovieListPage from '@/pages/MovieListPage.vue'
import { MoviesResponseMock } from '@/tests/mocks'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Component/MovieListPage',
  component: MovieListPage,
  parameters: {
    fetchMock: {
      mocks: [
        {
          matcher: {
            name: 'moviesSuccess',
            path: `${api}/movies`,
          },
          response: {
            status: 200,
            body: MoviesResponseMock,
          },
        },
      ],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MovieListPage>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
