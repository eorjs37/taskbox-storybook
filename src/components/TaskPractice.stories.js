import TackPractice from './TackPractice.vue'
import { fn } from '@storybook/test'
// eslint-disable-next-line storybook/story-exports
export const ActionsData = {
  onPinTask: fn(),
  onArchiveTask: fn()
}

export default {
  component: TackPractice,
  title: 'TaskPractice',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData
  }
}

export const Default = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}
