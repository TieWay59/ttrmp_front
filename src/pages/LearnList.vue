<template>
  <q-page-customed>
    <q-card-customed>
      <q-card-section>
        <q-breadcrumbs-customed :page_dir="page_dir"/>
      </q-card-section>
    </q-card-customed>

    <logo-banner-large/>

    <post-list :page_current="page_current" :page_posts="page_posts"/>
  </q-page-customed>
</template>

<script>

import LogoBannerLarge from "components/LogoBannerLarge";
import QBreadcrumbsCustomed from "components/QBreadcrumbsCustomed";
import QPageCustomed from "components/QPageCustomed";
import QCardCustomed from "components/QCardCustomed";
import PostList from "pages/PostList";

export default {
  name: "LearnList",
  data() {
    return {
      page_dir: [
        {cap: "主页", url: "/index", icon: "home"},
        {cap: "帖子", url: "/learn/posts", icon: "widgets"}
      ],
    }
  },
  components: {PostList, QCardCustomed, QPageCustomed, QBreadcrumbsCustomed, LogoBannerLarge},
  created() {
  }
}
</script>

