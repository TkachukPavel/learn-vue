import SortControl from '@/components/SortControl.vue'
import { SortingEnum } from '@/models/SortControl.model'
import { fn } from '@storybook/test'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Component/SortControl',
  component: SortControl,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'select',
      options: [SortingEnum.ReleaseDate, SortingEnum.Title],
    },
  },
  args: {
    modelValue: SortingEnum.ReleaseDate as SortingEnum,
  },
} satisfies Meta<typeof SortControl>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {}
