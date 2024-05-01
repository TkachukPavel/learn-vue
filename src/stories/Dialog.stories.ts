import Dialog from '@/components/Dialog.vue'
import MovieForm from '@/components/MovieForm.vue'
import { movieMock } from '@/tests/mocks/MovieDetails.mock'
import type { Meta, StoryObj } from '@storybook/vue3'

const meta = {
  title: 'Component/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    title: 'Dialog Title',
    show: true,
  },
}

export const AddMovie: Story = {
  args: {
    title: 'add movie',
    show: true,
  },

  render: (args) => ({
    components: { MovieForm, Dialog },
    setup() {
      return { args }
    },
    template: `
    <div id="app">
      <Dialog id="app" v-bind="args"> 
        <MovieForm /> 
      </Dialog> 
    </div>`,
  }),
}

export const EditMovie: Story = {
  args: {
    title: 'edit movie',
    show: true,
    movie: movieMock,
  },

  render: (args) => ({
    components: { MovieForm, Dialog },
    setup() {
      return { args }
    },
    template: `<Dialog :title="args.title" :show="args.show"> <MovieForm :movie="args.movie"/> </Dialog>`,
  }),
}
