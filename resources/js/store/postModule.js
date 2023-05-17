import axios from "axios";

export const postModule = {
    state: () => ({
        message: {
            name: '',
            text: '',
        },
        posts: [],
    }),
    mutations: {
        setMessage(state, message) {
            state.message = message;
        },
        setPosts(state, posts) {
            state.posts = posts;
        },
    },
    actions: {
        addPost({state, commit}) {
            let a = {};
            a.id = state.posts.length;
            a.name = state.message.name;
            a.text = state.message.text;
            axios.post('/api/store', {name: a.name, text: a.text})
                .then(res => {
                    console.log(res.data);
                }).catch(err => {
                console.log(err.response);
            })
            console.log('111');
            commit('setPosts', [...state.posts, a]);
            commit('setMessage', {
                name: '',
                text: '',
            });
        }
    }
}
