<template>
    <div>
        <Parent />

        <div class="flex-box">
            <div class="flex-item">
                <ChildFirst />
            </div>
            <div class="flex-item">
                <ChildSecond />
            </div>
        </div>
    </div>
</template>

<script>
import Parent from '@/components/Parent.vue'
import ChildFirst from '@/components/Child-first.vue'
import ChildSecond from '@/components/Child-second.vue'

export default {
    name: 'Main',

    components: {
        Parent,
        ChildFirst,
        ChildSecond
    },
}
</script>