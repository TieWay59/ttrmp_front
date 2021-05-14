<template>
  <q-page-customed>
    <q-card-customed>
      <q-card-section>
        <q-breadcrumbs-customed :page_dir="page_dir"></q-breadcrumbs-customed>
      </q-card-section>
    </q-card-customed>

    <logo-banner-large/>

    <q-card-customed>
      <q-card-section>
        <div class="text-h6">集训队简介</div>
      </q-card-section>
      <q-separator/>

      <q-card-section>
        <!--        <router-link to="/learn">go to learn</router-link>-->
        <p v-for="d in description" :key="d">
          {{ d }}
        </p>
      </q-card-section>
    </q-card-customed>

  </q-page-customed>
</template>

<script>
import LogoBannerLarge from "components/LogoBannerLarge";
import QPageCustomed from "components/QPageCustomed";
import QBreadcrumbsCustomed from "components/QBreadcrumbsCustomed";
import QCardCustomed from "components/QCardCustomed";

export default {
  name: 'PageIndex',
  data() {
    return {
      page_dir: [
        {cap: "主页", url: "/index", icon: "home"}
      ],
      description: [
        "ACM集训队创建于2004年，致力于培养ACM比赛选手，自主开发一套信息系统，辅助选拔人才，安排集训。专门建立了ACM/ICPC实验基地，为集训提供必要设备、场地。",
        "2015年亚洲赛中，我校ACM集训队以优异成绩拿到ACMICPC世界总决赛入场券。2016年5月，在ACM国际大学生程序设计总决赛中，我校代表队与其他来自六个大洲102国家，2736所大学的40266名选手同台竞技，获全球第54名、中国大陆代表队第11名。",
        "在2016年的浙江省大学生程序设计竞赛上，我校ACM集训队拿到了4个一等奖2个二等奖的好成绩，所拿一等奖数量占全省一等奖的四分之一。目前这一赛事上的水平已经进入浙江省前三。"
      ],
    }
  },
  components: {QCardCustomed, QBreadcrumbsCustomed, QPageCustomed, LogoBannerLarge}
}
</script>

<style lang="sass" scoped>
</style>
