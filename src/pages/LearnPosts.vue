<template>
  <q-page-customed>
    <q-card>
      <q-card-section>
        <q-breadcrumbs-customed :page_dir="page_dir"></q-breadcrumbs-customed>
      </q-card-section>
    </q-card>

    <q-card>
      <q-card-section>
        <iframe style="min-height: 500px; min-width: 100%"
                src="//player.bilibili.com/player.html?aid=970406443&bvid=BV1ap4y1r78w&cid=259790525&page=1"
                scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
      </q-card-section>
    </q-card>

    <q-card>
      <q-card-section>
        <q-chip>{{ title }}</q-chip>
      </q-card-section>
      <q-card-section>
        <q-chip>{{ date }}</q-chip>
      </q-card-section>
      <q-card-section>
        <q-chip>{{ creator }}</q-chip>
      </q-card-section>
      <q-card-section>
        <v-md-editor v-if="text" mode="preview" v-model="text"></v-md-editor>
      </q-card-section>
    </q-card>
  </q-page-customed>
</template>

<script>

import QPageCustomed from "components/QPageCustomed";
import QBreadcrumbsCustomed from "components/QBreadcrumbsCustomed";

export default {
  name: "LearnPosts",
  components: {QBreadcrumbsCustomed, QPageCustomed},
  data() {
    return {
      title: null,
      date: null,
      text: null,
      creator: null,
      page_dir: ["主页", "帖子", "当前页面"]
    }
  },
  created() {
    this.$axios
      .get(`/api/post/${this.$route.params.id}`)
      .then(res => {
        this.title = res.data.postTitle;
        this.date = res.data.postDate;
        this.text = res.data.postText;
        this.creator = res.data.postCreator;
      });
  }
}
</script>

<style lang="sass" scoped>
</style>

