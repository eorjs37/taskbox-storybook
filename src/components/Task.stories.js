import { fn } from '@storybook/test'
import Task from './Task.vue'

// eslint-disable-next-line storybook/story-exports
export const ActionsData = {
  onPinTask: fn(),
  onArchiveTask: fn()
}

export default {
  component: Task,
  title: 'Task',
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
      title: 'Pinned',
      state: 'TASK_PINNED'
    }
  }
}

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      title: 'Archived',
      state: 'TASK_ARCHIVED'
    }
  }
}
