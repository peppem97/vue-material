import {createStore} from 'vuex'

export default createStore(
    {
        state: {
            user: {name: 'John Doe', email: 'fake@email.com', username: 'jd123'},
            posts: ['post 1', 'post 2', 'post 3', 'post 4'],
            someString: 'etc',
            errors: []
        },
        getters: {
            postsCount: (state) => state.posts.length,
            postsCountMessage: (state, getters) => `${getters.postsCount} posts available`
        },
        mutations: {
            INSERT_POST(state, post) {
                state.posts.push(post)
            },
            INSERT_ERROR(state, error) {
                state.errors.push(error)
            },
            INCREMENT_USER_POSTS_COUNT(state) {
                state.user.postsCount++
            }
        },
        actions: {
            insertPost({commit}, payload) {
                try {
                    commit('INSERT_POST', payload);
                    commit('INCREMENT_USER_POSTS_COUNT');
                } catch (error) {
                    commit('INSERT_ERROR', error);
                }
            }
        }
    }
)

