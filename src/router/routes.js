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
          {path: 'posts/:id', component: () => import('pages/LearnPosts')}
        ]
      },
      {path: '/calendar', component: () => import('pages/Calendar.vue')}
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
