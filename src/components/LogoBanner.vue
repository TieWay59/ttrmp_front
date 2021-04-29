<template>
  <q-card>
    <q-item>
      <q-item-section side>
        <q-avatar rounded size="100px">
          <q-img src="~assets/logo.png" :ratio="14/8" width="180px"/>
        </q-avatar>
      </q-item-section>
      <q-item-section class="col justify-between q-py-lg">
        <q-item-label class="text-h6">ZJNU/ACM集训队资源站</q-item-label>
        <q-item-label caption>浙江师范大学ACM集训基地资源管理平台</q-item-label>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script>
export default {
  name: "LogoBanner"
}
</script>

<style scoped>

</style>
