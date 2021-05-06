const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', redirect: '/index'},
      {
        path: '/index',
        component: () => import('pages/Index.vue')
      },
      {
        path: '/learn', component: () => import('pages/Learn.vue'),
        children: [
          {path: '', redirect: 'posts'},
          {path: 'posts', component: () => import('pages/LearnList')},
          {path: 'posts/:id', component: () => import('pages/LearnPosts')},
          {path: 'posts/edit/:id', component: () => import('pages/LearnPostsEdit')}
        ]
      },
      {path: '/calendar', component: () => import('pages/Calendar')},
      {path: '/login', component: () => import('pages/Login')},
      {path: '/register', component: () => import('pages/Register')},
      {path: '/profile', component: () => import('pages/ProfileIndex')},
      {path: '/profile/info', component: () => import('pages/ProfileInfo')},
      {path: '/profile/posts', component: () => import('pages/ProfilePosts')},
      {path: '/profile/comment', component: () => import('pages/ProfileComment')},
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
