<template>
  <q-item dark clickable v-ripple @click="switchAvatar">
    <q-item-section v-if="avatarState" side>
      <q-avatar rounded size="36px">
        <q-img src="https://cdn.quasar.dev/img/boy-avatar.png"/>
      </q-avatar>
    </q-item-section>
    <q-item-section v-else side>
      <q-avatar rounded size="36px">
        <q-icon name="account_circle" size="30px"></q-icon>
      </q-avatar>
    </q-item-section>

    <q-item-section v-if="avatarState">
      <q-item-label>伍泰炜</q-item-label>
      <q-item-label caption>Administrator</q-item-label>
    </q-item-section>
    <q-item-section v-else>
      <q-item-label>未登录</q-item-label>
      <q-item-label caption>请登录账号</q-item-label>
    </q-item-section>

  </q-item>
</template>

<script>
export default {
  name: "UserAvatar",
  data() {
    return {
      avatarState: true
    }
  },
  methods: {
    switchAvatar() {
      this.avatarState = !this.avatarState;
    }
  }
}
</script>

<style scoped>

</style>
