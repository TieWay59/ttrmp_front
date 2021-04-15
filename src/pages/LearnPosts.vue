<template>

  <q-page class="full-width column">
    <q-card>
      <q-card-section>
        <q-breadcrumbs class="text-brown">
          <template v-slot:separator>
            <q-icon
              size="1.5em"
              name="chevron_right"
              color="primary"
            />
          </template>
          <q-breadcrumbs-el label="Home" icon="home"/>
          <q-breadcrumbs-el label="Components" icon="widgets"/>
          <q-breadcrumbs-el label="Breadcrumbs" icon="navigation"/>
        </q-breadcrumbs>
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
        <q-markdown
          :src="text"
          toc
        >

        </q-markdown>
      </q-card-section>
    </q-card>

  </q-page>

</template>

<script>

import {QMarkdown} from '@quasar/quasar-ui-qmarkdown'

export default {
  name: "LearnPosts",
  data() {
    return {
      title: null,
      date: null,
      text: null,
      creator: null
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
  }, components: {
    QMarkdown
  }
}
</script>
<q-markdown>

</q-markdown>

<style lang="sass" scoped>
.q-page
  padding: 0 20%
  min-height: 110vh

  .q-card
    margin: .5rem
</style>

