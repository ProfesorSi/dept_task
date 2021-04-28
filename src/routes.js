import UserList from './components/UserList.vue';
import UserDetail from './components/UserDetail.vue';

export const routes = [
    {
        path: '/',
        name: 'UserList',
        component: UserList,
        props: true
    },
    {
        path: '/user-detail/:id',
        name: 'UserDetail',
        component: UserDetail,
        props: true
    }

]