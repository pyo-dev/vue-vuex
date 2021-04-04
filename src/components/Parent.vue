<template>
    <div class="parnets-box">
        <div>{{ $store.state.CONNECT_DATA.PARENT_DATA.grade }}학년 {{ $store.state.CONNECT_DATA.PARENT_DATA.class }}반</div>
        형 이름 :  {{ $store.state.CONNECT_DATA.CHILD_DATA.first.name }}<br>
        형 별명 : {{ $store.state.CONNECT_DATA.CHILD_DATA.first.nick }}<br>
        동생 이름 : {{ $store.state.CONNECT_DATA.CHILD_DATA.second.name }}<br>
        동생 별명 : {{ $store.state.CONNECT_DATA.CHILD_DATA.second.nick }}

        <div class="change-box">
            <div class="title-box">바꿔볼까</div>
            <div>
                학년 : <input type="text" v-model="CHANGE_DATA.PARENT_DATA.grade">
                반 : <input type="text" v-model="CHANGE_DATA.PARENT_DATA.class">
            </div>
            <div>
                형 이름 : <input type="text" v-model="CHANGE_DATA.CHILD_DATA.first.name">
                형 별명 : <input type="text" v-model="CHANGE_DATA.CHILD_DATA.first.nick">
            </div>
            <div>
                동생 이름 : <input type="text" v-model="CHANGE_DATA.CHILD_DATA.second.name">
                동생 별명 : <input type="text" v-model="CHANGE_DATA.CHILD_DATA.second.nick">
            </div>
            <div class="bt-wrap">
                <button @click="changeData">바꿔</button>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    name: 'parent',

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