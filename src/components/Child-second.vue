<template>
  <div class="parnets-box">
    쌍둥이 동생 <br>
    이름 : {{ $store.state.CONNECT_DATA.CHILD_DATA.second.name }}<br>
    별명 : {{ $store.state.CONNECT_DATA.CHILD_DATA.second.nick }}
    <div class="change-box">
        <div class="title-box">바꿔볼까</div>
        <div>
            형 이름 : <input type="text" v-model="CHANGE_DATA.CHILD_DATA.first.name">
            형 별명 : <input type="text" v-model="CHANGE_DATA.CHILD_DATA.first.nick">
        </div>
        <div class="bt-wrap">
            <button @click="changeData">바꿔</button>
        </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Child-second',

    data() {
      return {
        CHANGE_DATA: {
          PARENT_DATA: {
            grade: '',
            class: '',
          },
          CHILD_DATA: {
            first: {
                name: '',
                nick: ''
            },
            second: {
                name: '',
                nick: ''
            },
          }
        }
      }
    },

    methods: {
        changeData() {
        this.$store.dispatch('connectUpdateData', this.CHANGE_DATA);
        }
    },
  }
</script>