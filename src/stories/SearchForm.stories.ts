import SearchForm from '@/components/SearchForm.vue'
import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Component/SearchForm',
  component: SearchForm,
  tags: ['autodocs'],
  args: {
    initQuery: 'Star Wars',
    onOnSearch: fn(),
  },
} satisfies Meta<typeof SearchForm>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
