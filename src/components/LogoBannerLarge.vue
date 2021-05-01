<template>
    <q-card-customed>
      <q-card-section class="row justify-center">
        <q-img src="~assets/logo.png" :ratio="16/9" width="450px"/>
      </q-card-section>
      <q-card-section>
        <div class="text-h5">ZJNU/ACM集训队资源站</div>
        <div class="text-subtitle2">浙江师范大学ACM集训基地资源管理平台</div>
      </q-card-section>
    </q-card-customed>
</template>

<script>
import QCardCustomed from "components/QCardCustomed";
export default {
  name: "LogoBannerLarge",
  components: {QCardCustomed}
}
</script>

<style scoped>

</style>
