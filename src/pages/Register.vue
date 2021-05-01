<template>
  <q-page-customed>
    <logo-banner/>
    <q-card-customed class="row justify-center">
      <q-card-section class="col-12">
        <div class="text-h6">注册</div>
      </q-card-section>

      <q-separator style="width: 100%"/>

      <q-card-section class="col-lg-7 col-12">
        <q-input filled v-model:value="username" label="用户名" type="text" placeholder="用户名/邮箱">
          <template v-slot:prepend>
            <q-icon name="account_circle"/>
          </template>
        </q-input>
      </q-card-section>

      <q-card-section class="col-lg-7 col-12">
        <q-input filled v-model:value="password" label="密码" type="password" placeholder="用户密码">
          <template v-slot:prepend>
            <q-icon name="lock"/>
          </template>
        </q-input>
      </q-card-section>

      <q-card-section class="col-lg-7 col-12">
        <q-input filled v-model:value="repeat_pass" label="重复密码" type="password" placeholder="再次输入密码">
          <template v-slot:prepend>
            <q-icon name="lock"/>
          </template>
        </q-input>
      </q-card-section>

      <q-card-section class="col-lg-7 col-12">
        <q-input filled v-model:value="email" label="邮箱" placeholder="输入邮箱地址">
          <template v-slot:prepend>
            <q-icon name="lock"/>
          </template>
        </q-input>
      </q-card-section>

      <q-card-section class="row justify-center col-lg-7 col-12">
        <q-btn
          push
          class="q-mr-sm"
          icon-right="login"
          to="/login"
        >登录&nbsp;&nbsp;
        </q-btn>
        <q-btn push class="q-mr-sm" icon-right="accessibility_new" color="primary">注册&nbsp;&nbsp;</q-btn>
        <q-btn push icon-right="help">忘记密码&nbsp;&nbsp;</q-btn>
      </q-card-section>

    </q-card-customed>
  </q-page-customed>
</template>

<script>
import LogoBanner from "components/LogoBanner";
import QPageCustomed from "components/QPageCustomed";
import QCardCustomed from "components/QCardCustomed";

export default {
  name: "Register",
  data() {
    return {
      username: null,
      password: null,
      repeat_pass: null,
      email: null
    }
  },
  components: {QCardCustomed, QPageCustomed, LogoBanner}
}
</script>

<style lang="sass" scoped>

</style>
