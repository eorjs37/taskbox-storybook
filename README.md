# Storybook taskbox

## 튜토리얼

```
https://storybook.js.org/tutorials/intro-to-storybook/vue/en/get-started/
```

## 스토리북이란?

```
UI컴퍼넌트 개발 도구
개발자/디자이너의 문서화 하기 위해 사용할 수 있다.
UI컴퍼넌트가 각각 독립적으로 어떻게 실행되는지 시작적으로 테스트 할 수 있다.
```

## SimpleComponent

```
src/components/ButtonComp.vue
```

```html
<template>
  <button class="button_comp" :disabled="isdisabled" @click="onBtnClick">{{ buttonname }}</button>
</template>
<script>
  export default {
    props: {
      buttonname: {
        type: String,
        required: false,
        default: '버튼'
      },
      isdisabled: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    emits: ['btn-click'],
    setup(props, { emit }) {
      const onBtnClick = () => {
        emit('btn-click')
      }

      return {
        onBtnClick
      }
    }
  }
</script>
<style scoped src="./buttoncomp.css"></style>
```

```
src/components/ButtomComp.stories.js
```

```javascript
import { fn } from '@storybook/test'
import ButtonComp from './ButtonComp.vue'

//emit 함수를 가짜로 구현 emit('btn-click') 이면 onBtnClick으로 추가
export const ActionsData = {
  onBtnClick: fn()
}

// Component, title,tags,excludeStories,args 를 세팅한다
export default {
  component: ButtonComp,
  title: '버튼',
  tags: ['autodocs'],
  //렌더링에는 제외하는 데이터
  excludeStories: /.*Data$/,
  //추가 요소
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
```
