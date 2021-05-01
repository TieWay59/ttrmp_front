<template>
  <q-page-customed>
    <q-card-customed>
      <q-card-section>
        <q-breadcrumbs-customed :page_dir="page_dir"/>
      </q-card-section>
    </q-card-customed>

    <logo-banner-large/>

    <q-card-customed>
      <q-card-section>
        <div class="text-h6">学习资料清单</div>
      </q-card-section>
      <q-separator/>

      <q-card-section>
        <q-btn label="打开第一篇文章" to="/learn/posts/1"></q-btn>
      </q-card-section>

      <q-card-section>
        <q-list>
          <q-item
            v-for="post in page_posts"
            :key="post.id"
            :to='"/learn/posts/"+post.id'
            v-ripple
            clickable
          >
            <q-item-section avatar top>
              <q-avatar icon="folder" color="primary" text-color="white"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                {{ post.title }}
              </q-item-label>
              <q-item-label caption>
                {{ post.author ? post.author : "未知作者" }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

    </q-card-customed>

    <q-card-customed>
      <q-card-section class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="page_current"
          :max="10"
          :max-pages="6"
          boundary-numbers
          direction-links
          push
          color="primary"></q-pagination>
      </q-card-section>
    </q-card-customed>

  </q-page-customed>
</template>

<script>

import LogoBannerLarge from "components/LogoBannerLarge";
import QBreadcrumbsCustomed from "components/QBreadcrumbsCustomed";
import QPageCustomed from "components/QPageCustomed";
import QCardCustomed from "components/QCardCustomed";

export default {
  name: "LearnList",
  data() {
    return {
      page_dir: [
        {cap: "主页", url: "/index", icon: "home"},
        {cap: "帖子", url: "/learn/posts", icon: "widgets"}
      ],
      posts: [
        {id: 1, title: "专题1: 计算几何相关算法", author: "tieway59"},
        {id: 2, title: "集训专题2: 图的连通性算法"},
        {id: 3, title: "集训专题3: 图的连通性算法"},
        {id: 4, title: "集训专题4: 图的连通性算法"},
        {id: 5, title: "集训专题5: 图的连通性算法"},
        {id: 6, title: "集训专题6: 图的连通性算法"},
        {id: 7, title: "集训专题7: 图的连通性算法"},
        {id: 8, title: "集训专题8: 图的连通性算法"},
        {id: 9, title: "集训专题9: 图的连通性算法"},
        {id: 10, title: "集训专题10: 图的连通性算法"},
        {id: 11, title: "集训专题11: 图的连通性算法"},
        {id: 12, title: "集训专题12: 图的连通性算法"},
        {id: 3, title: "集训专题3: 图的连通性算法"},
        {id: 4, title: "集训专题4: 图的连通性算法"},
        {id: 5, title: "集训专题5: 图的连通性算法"},
        {id: 6, title: "集训专题6: 图的连通性算法"},
        {id: 7, title: "集训专题7: 图的连通性算法"},
        {id: 8, title: "集训专题8: 图的连通性算法"},
        {id: 9, title: "集训专题9: 图的连通性算法"},
        {id: 10, title: "集训专题10: 图的连通性算法"},
        {id: 11, title: "集训专题11: 图的连通性算法"},
        {id: 12, title: "集训专题12: 图的连通性算法"},
        {id: 3, title: "集训专题3: 图的连通性算法"},
        {id: 4, title: "集训专题4: 图的连通性算法"},
        {id: 5, title: "集训专题5: 图的连通性算法"},
        {id: 6, title: "集训专题6: 图的连通性算法"},
        {id: 7, title: "集训专题7: 图的连通性算法"},
        {id: 8, title: "集训专题8: 图的连通性算法"},
        {id: 9, title: "集训专题9: 图的连通性算法"},
        {id: 10, title: "集训专题10: 图的连通性算法"},
        {id: 11, title: "集训专题11: 图的连通性算法"},
        {id: 12, title: "集训专题12: 图的连通性算法"},
        {id: 3, title: "集训专题3: 图的连通性算法"},
        {id: 4, title: "集训专题4: 图的连通性算法"},
        {id: 5, title: "集训专题5: 图的连通性算法"},
        {id: 6, title: "集训专题6: 图的连通性算法"},
        {id: 7, title: "集训专题7: 图的连通性算法"},
        {id: 8, title: "集训专题8: 图的连通性算法"},
        {id: 9, title: "集训专题9: 图的连通性算法"},
        {id: 10, title: "集训专题10: 图的连通性算法"},
        {id: 11, title: "集训专题11: 图的连通性算法"},
        {id: 12, title: "集训专题12: 图的连通性算法"},
        {id: 7, title: "集训专题7: 图的连通性算法"},
        {id: 8, title: "集训专题8: 图的连通性算法"},
        {id: 9, title: "集训专题9: 图的连通性算法"},
        {id: 10, title: "集训专题10: 图的连通性算法"},
        {id: 11, title: "集训专题11: 图的连通性算法"},
        {id: 12, title: "集训专题12: 图的连通性算法"},
        {id: 3, title: "集训专题3: 图的连通性算法"},
        {id: 4, title: "集训专题4: 图的连通性算法"},
        {id: 5, title: "集训专题5: 图的连通性算法"},
        {id: 6, title: "集训专题6: 图的连通性算法"},
        {id: 7, title: "集训专题7: 图的连通性算法"},
        {id: 8, title: "集训专题8: 图的连通性算法"},
        {id: 9, title: "集训专题9: 图的连通性算法"},
        {id: 10, title: "集训专题10: 图的连通性算法"},
        {id: 11, title: "集训专题11: 图的连通性算法"},
        {id: 12, title: "集训专题12: 图的连通性算法"},
      ],
      page_current: 1,
      page_size: 8
    }
  },
  components: {QCardCustomed, QPageCustomed, QBreadcrumbsCustomed, LogoBannerLarge},
  computed: {
    page_posts() {
      return this.posts.filter((_, i) => {
        return Math.floor(i / this.page_size) + 1 === this.page_current;
      });
    }
  },
  created() {
    // this.posts.forEach((item) => {
    //   item.url = `/learn/posts/${item.id}`;
    //   return item;
    // })
  }
}
</script>

<style lang="sass" scoped>
</style>
