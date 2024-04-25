import Counter from '@/components/Counter.vue'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Component/Counter',
  component: Counter,
  tags: ['autodocs'],
} satisfies Meta<typeof Counter>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
