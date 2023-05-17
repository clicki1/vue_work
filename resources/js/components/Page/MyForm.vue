<template>
    <h1 class="p-5">MY FORM</h1>
    <h2>{{ $store.state.post.likes }}</h2>
    <div class="border border-secondary m-1">
        <div class="input-group p-3">
            <span class="input-group-text">Name</span>
            <input v-model="message.name" type="text" name="name" class="form-control" placeholder="Name"
                   aria-label="Name">
        </div>
        <div class="input-group p-3">
            <span class="input-group-text">Text</span>
            <textarea v-model="message.text" name="message" class="form-control" aria-label="Text"></textarea>
        </div>
        <div class="input-group p-3">
            <button class="btn btn-outline-success" @click.prevent="addPost">Send</button>
        </div>
    </div>

</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
    name: "MyForm",
    data() {
        // return {
        //     message: {
        //         name: '',
        //         text: '',
        //     },
        //
        //     count: 0,
        //     posts: [],
        //
        // }
    },
    methods: {
        // ...mapMutations({
        //
        // }),
        ...mapActions({
            addPost: "addPost"
        })
        // sendMessage() {
        //     let a = {};
        //     a.id = this.count;
        //     a.name = this.message.name;
        //     a.text = this.message.text;
        //     console.log(this.message);
        //     console.log(a);
        //     this.posts.push(a);
        //     this.message.name = '';
        //     this.message.text = '';
        //     this.count++;
        //     console.log(this.posts);
        // }
    },
    computed:{
        ...mapState({
            message: state => state.post.message,
            count: state => state.post.count,
            posts: state => state.post.posts,
        })

    }
}
</script>

<style scoped>

</style>
