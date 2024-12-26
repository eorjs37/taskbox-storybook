import { fn } from '@storybook/test'
import ButtonComp from './ButtonComp.vue'

export const ActionsData = {
  onBtnClick: fn()
}

export default {
  component: ButtonComp,
  title: '버튼',
  tags: ['autodocs'],
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData
  }
}

export const Default = {
  args: {
    buttonname: '버튼명'
  }
}

export const Disabled = {
  args: {
    ...Default.args,
    isdisabled: true
  }
}
