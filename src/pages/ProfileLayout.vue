<template>
  <q-page-customed>
    <q-card-customed>
      <q-tabs>
        <q-route-tab
          v-for="t in tab_items"
          :key="t.label"
          :icon="t.icon"
          :label="t.label"
          :to="t.to"
        ></q-route-tab>
      </q-tabs>
    </q-card-customed>
    <slot></slot>
  </q-page-customed>
</template>
<script>
import PostList from "pages/PostList"
import QBreadcrumbsCustomed from "components/QBreadcrumbsCustomed"
import QCardCustomed from "components/QCardCustomed"
import QChipCustomed from "pages/QChipCustomed"
import QPageCustomed from "components/QPageCustomed"

export default {
  name: 'profile-layout',
  components: {PostList, QBreadcrumbsCustomed, QCardCustomed, QChipCustomed, QPageCustomed},
  props: {
    // page_dir: {},
  },
  data() {
    return {
      tab_items: [
        {icon: "account_box", label: "个人中心", to: "/profile"},
        {icon: "info", label: "信息维护", to: "/profile/info"},
        {icon: "feed", label: "文章管理", to: "/profile/posts"},
        {icon: "rate_review", label: "评论管理", to: "/"},
        {icon: "folder", label: "文件管理", to: "/"}
      ]
    }
  }
}
</script>


