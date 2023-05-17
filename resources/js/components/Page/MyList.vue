<template>
    <div>MY LIST</div>
    <div>
        <ul>
            <li v-for="post in posts">ID: {{ post.id }} NAME: {{ post.name }} TEXT: {{ post.text }}</li>
        </ul>
    </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex';
export default {
    name: "MyList",
    computed:{
        ...mapState({
            posts: state => state.post.posts,
        })

    }
}
</script>

<style scoped>

</style>
