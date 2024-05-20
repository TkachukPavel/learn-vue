import GenreSelect from '@/components/GenreSelect.vue'
import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/vue3'

const genres = ['documentary', 'comedy', 'horror', 'crime']

const meta = {
  title: 'Component/GenreSelect',
  component: GenreSelect,
  tags: ['autodocs'],
  args: {
    genres,
    selectedGenre: genres[0],
    onOnSelect: fn(),
  },
} satisfies Meta<typeof GenreSelect>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
