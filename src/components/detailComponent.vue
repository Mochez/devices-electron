<template>
    <div id="detail">
        <li v-for="(value, key) in todo" :key="key">
            <span>{{key}}: {{value}}</span>
        </li>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['todo'])
    }
}
</script>