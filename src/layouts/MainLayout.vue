<template>
  <q-scroll-area
    :thumb-style="{
        right: '4px',
        borderRadius: '2px',
        width: '2px',
        opacity: 0.25
      }"
    style="height: 100vh"
  >
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

          <user-avatar/>
        </q-toolbar>
      </q-header>

      <!--    show-if-above -->
      <q-drawer
        v-model="leftDrawerOpen"
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
            页面导航
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
  </q-scroll-area>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import UserAvatar from "components/UserAvatar";


const linksData = [];

export default {
  name: 'MainLayout',
  components: {UserAvatar, EssentialLink},
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: '主页',
          caption: '信息系统主页',
          icon: 'home',
          link: '/index'
        },
        {
          title: '学习资料',
          caption: '...',
          icon: 'school',
          link: '/learn'
        },
        {
          title: '个人中心',
          caption: '...',
          icon: 'account_box',
          link: '/profile'
        },
        {
          title: '敬请期待 (未开放)',
          caption: '...',
          icon: 'book',
          link: '/calendar'
        }
      ]
    }
  }
}
</script>
