<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          ZJNU/ACM集训队资源站
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="200"
      :breakpoint="500"
      overlay
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Essential Links
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'


const linksData = [];

export default {
  name: 'MainLayout',
  components: {EssentialLink},
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [{
        title: '主页',
        caption: '信息系统主页',
        icon: 'home',
        link: '/index'
      },
        {
          title: '学习资料',
          caption: '...',
          icon: 'school',
          link:'/learn'
        },
        {
          title: '训练日程',
          caption: '...',
          icon: 'book',
          link: '/calendar'
        }
      ]
    }
  }
}
</script>
