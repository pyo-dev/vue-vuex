import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CONNECT_DATA: {
      PARENT_DATA: {
        grade: 3,
        class: 2,
      },
      CHILD_DATA: {
        first: {
          name: '이순신',
          nick: '거북선'
        },
        second: {
          name: '홍길동',
          nick: '도둑'
        },
      }
    },
  },

  mutations: {
    updateData (state, payload) {
        state.CONNECT_DATA.PARENT_DATA.grade = payload.PARENT_DATA.grade || state.CONNECT_DATA.PARENT_DATA.grade;
        state.CONNECT_DATA.PARENT_DATA.class = payload.PARENT_DATA.class || state.CONNECT_DATA.PARENT_DATA.class;

        state.CONNECT_DATA.CHILD_DATA.first.name = payload.CHILD_DATA.first.name || state.CONNECT_DATA.CHILD_DATA.first.name;
        state.CONNECT_DATA.CHILD_DATA.first.nick = payload.CHILD_DATA.first.nick || state.CONNECT_DATA.CHILD_DATA.first.nick;

        state.CONNECT_DATA.CHILD_DATA.second.name = payload.CHILD_DATA.second.name || state.CONNECT_DATA.CHILD_DATA.second.name;
        state.CONNECT_DATA.CHILD_DATA.second.nick = payload.CHILD_DATA.second.nick || state.CONNECT_DATA.CHILD_DATA.second.nick;
    }
  },

  actions: {
    connectUpdateData ({ commit }, payload) {
      commit('updateData', payload);
    }
  },
})
