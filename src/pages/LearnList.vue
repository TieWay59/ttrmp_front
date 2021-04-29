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

    <logo-banner-large/>

    <q-card >
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
  </q-page>
</template>

<script>

import LogoBannerLarge from "components/LogoBannerLarge";
export default {
  name: "LearnList",
  components: {LogoBannerLarge}
}
</script>

<!--TODO 设置padding的断点-->
<style lang="sass" scoped>

.q-page
  padding: 0 20%
  min-height: 110vh
  .q-card
    margin: .5rem
</style>
