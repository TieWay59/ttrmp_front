<template>
  <q-page-customed>
    <q-card>
      <q-card-section>
        <q-breadcrumbs-customed :page_dir="page_dir"/>
      </q-card-section>
    </q-card>

    <logo-banner-large/>

    <q-card>
      <q-card-section>
        <router-link to="/learn/posts/1"> goto posts-1</router-link>
      </q-card-section>
      <q-card-section>
        2020赛季
        2020暑期集训专题1：图的连通性算法
        2020暑期集训专题2：数论
        …
        2020暑期集训专题x：…
        2020新生培训专题1：
        2020新生培训专题2：…
        …
        2020社团培训专题1：
        …
        2019赛季
        2020暑期集训专题1：图的连通性算法
        2020暑期集训专题2：数论
        …
        2020暑期集训专题x：…
        2020新生培训专题1：
        2020新生培训专题2：…
        …
        2020社团培训专题1：
        …
        2020赛季
        2020暑期集训专题1：图的连通性算法
        2020暑期集训专题2：数论
        …
        2020暑期集训专题x：…
        2020新生培训专题1：
        …
      </q-card-section>
    </q-card>
  </q-page-customed>
</template>

<script>

import LogoBannerLarge from "components/LogoBannerLarge";
import QBreadcrumbsCustomed from "components/QBreadcrumbsCustomed";
import QPageCustomed from "components/QPageCustomed";

export default {
  name: "LearnList",
  data() {
    return {
      page_dir: [
        {cap: "主页", url: "/index", icon: "home"},
        {cap: "帖子", url: "/learn/posts", icon: "widgets"}
      ]
    }
  },
  components: {QPageCustomed, QBreadcrumbsCustomed, LogoBannerLarge}
}
</script>

<style lang="sass" scoped>
</style>
