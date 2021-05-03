<template>
  <q-card-customed>
    <q-card-section>
      <div class="text-h6">专题</div>
    </q-card-section>

    <q-separator/>

    <q-card-section>
      <q-list separator>
        <q-item
          v-for="post in page_posts"
          :key="post.id"
          :to='"/learn/posts/"+post.id'
          v-ripple
          clickable
        >
          <q-item-section avatar top>
            <q-avatar icon="feed" color="primary" text-color="white"/>
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

    <q-card-section class="q-pa-lg flex flex-center">
      <q-pagination
        v-model="page_current"
        :max="Math.ceil(author_filtered_posts.length / page_size)"
        :max-pages="6"
        boundary-numbers
        direction-links
        push
        color="primary"></q-pagination>
    </q-card-section>
  </q-card-customed>
</template>
<script>
import QCardCustomed from "components/QCardCustomed"

export default {
  name: 'post-list',
  components: {QCardCustomed},
  data() {
    return {
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
        {id: 11, title: "专题1: 计算几何相关算法", author: "tieway59"},
        {id: 12, title: "集训专题2: 图的连通性算法"},
        {id: 13, title: "集训专题3: 图的连通性算法"},
        {id: 14, title: "集训专题4: 图的连通性算法"},
        {id: 15, title: "集训专题5: 图的连通性算法"},
        {id: 16, title: "集训专题6: 图的连通性算法"},
        {id: 17, title: "集训专题7: 图的连通性算法"},
        {id: 18, title: "集训专题8: 图的连通性算法"},
        {id: 19, title: "集训专题9: 图的连通性算法"},
        {id: 20, title: "集训专题10: 图的连通性算法"},
        {id: 21, title: "专题1: 计算几何相关算法", author: "tieway59"},
        {id: 22, title: "集训专题2: 图的连通性算法"},
        {id: 23, title: "集训专题3: 图的连通性算法"},
        {id: 24, title: "集训专题4: 图的连通性算法"},
        {id: 25, title: "集训专题5: 图的连通性算法"},
        {id: 26, title: "集训专题6: 图的连通性算法"},
        {id: 27, title: "集训专题7: 图的连通性算法"},
        {id: 28, title: "集训专题8: 图的连通性算法"},
        {id: 29, title: "集训专题9: 图的连通性算法"},
        {id: 30, title: "集训专题10: 图的连通性算法"},
        {id: 31, title: "专题1: 计算几何相关算法", author: "tieway59"},
        {id: 32, title: "集训专题2: 图的连通性算法"},
        {id: 33, title: "集训专题3: 图的连通性算法"},
        {id: 34, title: "集训专题4: 图的连通性算法"},
        {id: 35, title: "集训专题5: 图的连通性算法"},
        {id: 36, title: "集训专题6: 图的连通性算法"},
        {id: 37, title: "集训专题7: 图的连通性算法"},
        {id: 38, title: "集训专题8: 图的连通性算法"},
        {id: 39, title: "集训专题9: 图的连通性算法"},
        {id: 40, title: "集训专题10: 图的连通性算法"},
        {id: 41, title: "专题1: 计算几何相关算法", author: "tieway59"},
        {id: 42, title: "集训专题2: 图的连通性算法"},
        {id: 43, title: "集训专题3: 图的连通性算法"},
        {id: 44, title: "集训专题4: 图的连通性算法"},
        {id: 45, title: "集训专题5: 图的连通性算法"},
        {id: 46, title: "集训专题6: 图的连通性算法"},
        {id: 47, title: "集训专题7: 图的连通性算法"},
        {id: 48, title: "集训专题8: 图的连通性算法"},
        {id: 49, title: "集训专题9: 图的连通性算法"},
        {id: 50, title: "集训专题10: 图的连通性算法"},
        {id: 51, title: "专题1: 计算几何相关算法", author: "tieway59"},
        {id: 52, title: "集训专题2: 图的连通性算法"},
        {id: 53, title: "集训专题3: 图的连通性算法"},
        {id: 54, title: "集训专题4: 图的连通性算法"},
        {id: 55, title: "集训专题5: 图的连通性算法"},
        {id: 56, title: "集训专题6: 图的连通性算法"},
        {id: 57, title: "集训专题7: 图的连通性算法"},
        {id: 58, title: "集训专题8: 图的连通性算法"},
        {id: 59, title: "集训专题9: 图的连通性算法"},
        {id: 60, title: "集训专题10: 图的连通性算法"},
        {id: 61, title: "专题1: 计算几何相关算法", author: "tieway59"},
        {id: 62, title: "集训专题2: 图的连通性算法"},
        {id: 63, title: "集训专题3: 图的连通性算法"},
        {id: 64, title: "集训专题4: 图的连通性算法"},
        {id: 65, title: "集训专题5: 图的连通性算法"},
        {id: 66, title: "集训专题6: 图的连通性算法"},
        {id: 67, title: "集训专题7: 图的连通性算法"},
        {id: 68, title: "集训专题8: 图的连通性算法"},
        {id: 69, title: "集训专题9: 图的连通性算法"},
        {id: 70, title: "集训专题10: 图的连通性算法"},
        {id: 71, title: "专题1: 计算几何相关算法", author: "tieway59"},
        {id: 72, title: "集训专题2: 图的连通性算法"},
        {id: 73, title: "集训专题3: 图的连通性算法"},
        {id: 74, title: "集训专题4: 图的连通性算法"},
        {id: 75, title: "集训专题5: 图的连通性算法"},
        {id: 76, title: "集训专题6: 图的连通性算法"},
        {id: 77, title: "集训专题7: 图的连通性算法"},
        {id: 78, title: "集训专题8: 图的连通性算法"},
        {id: 79, title: "集训专题9: 图的连通性算法"},
      ],
      page_current: 1,
      // page_size: 8
    };
  },
  props: {
    filter_author: {
      type: String,
      default: '*'
    },
    page_size: {
      default: 8
    }
  },
  computed: {
    author_filtered_posts() {
      return this.posts.filter((item) => {
        if (this.filter_author === '*') return true;
        if (!item.author) return false;
        return item.author === this.filter_author;
      });
    },
    page_posts() {
      return this.author_filtered_posts
        .filter((_, i) => {
          return Math.floor(i / this.page_size) + 1 === this.page_current;
        });
    }
  }
}
</script>
