<template>
  <q-page-customed>
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

          <q-breadcrumbs-el label="主页" icon="home"/>
          <!--            <q-breadcrumbs-el label="Components" icon="widgets" />-->
          <!--            <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" />-->
        </q-breadcrumbs>

      </q-card-section>
    </q-card>

    <logo-banner-large/>

    <q-card>
      <q-card-section>
        <div class="text-h6">集训队简介</div>
      </q-card-section>
      <q-separator/>

      <q-card-section>
        <router-link to="/learn">go to learn</router-link>
        <p v-for="d in description" :key="d">
          {{ d }}
        </p>
      </q-card-section>
    </q-card>
    <br>

  </q-page-customed>
</template>

<script>
import LogoBannerLarge from "components/LogoBannerLarge";
import QPageCustomed from "components/QPageCustomed";

export default {
  name: 'PageIndex',
  data() {
    return {
      description: [
        "ACM协会前身为软件协会，创立于2004年2月。并于2005年晋级为校级社团，2007年10月正式更名为大学生ACM程序设计竞赛协会（简称ACM协会）",
        "ACM协会举办ACM学分制班，为对数据结构与算法感兴趣的同学提供一个深入学习的平台。协会的主要活动为在周末对会员进行编程算法方面的培训，举办新生程序设计竞赛，为后续的竞赛做好充足的后备，新生力量，为集训队注入新血。",
        "我们ACM协会与集训队努力的方向主要是用竞赛驱动创新型人才培养，让更多的学生在竞赛中受益。同时壮大我们协会的规模，为普及编程知识与算法尽自己的一份力，并且为集训队提供更优质的新鲜血液，让竞赛的成绩更上一层楼。"
      ],
    }
  },
  components: {QPageCustomed, LogoBannerLarge}
}
</script>

<style lang="sass" scoped>
</style>
