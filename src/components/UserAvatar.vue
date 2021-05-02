<template>
  <q-item dark clickable v-ripple>
    <q-menu>
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-body1">
            <div>角色：
              <q-badge
                color="secondary"
                rounded
                class="no-border"
              >
                <q-icon name="manage_accounts"></q-icon>
                管理员
              </q-badge>
            </div>
            <div>简介：你好，我是伍玖~</div>
          </div>
        </div>

        <q-separator vertical inset="true" class="q-mx-lg"/>

        <div class="column items-center">
          <q-avatar size="72px">
            <q-img src="https://cdn.quasar.dev/img/boy-avatar.png"/>
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs">伍泰炜</div>

          <q-btn
            color="primary"
            label="登出"
            @click="switchAvatar"
            push
            size="sm"
            v-close-popup
          />
        </div>
      </div>
    </q-menu>

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
