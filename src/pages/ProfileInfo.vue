<template>
  <profile-layout>
    <q-card-customed class="row justify-center">
      <q-card-section class="col-lg-7 col-12 row ">
        <q-uploader
          class="fit"
          url="http://localhost:4444/upload"
          flat
          color="grey-2"
          text-color="grey-8"
          label="上传新头像"
        >
          <template v-slot:list="scope">
            <q-list separator>
              <q-item v-for="file in scope.files" :key="file.name">
                <q-item-section>
                  <q-item-label class="full-width ellipsis">
                    {{ file.name }}
                  </q-item-label>

                  <q-item-label caption>
                    Status: {{ file.__status }}
                  </q-item-label>

                  <q-item-label caption>
                    {{ file.__sizeLabel }} / {{ file.__progressLabel }}
                  </q-item-label>
                </q-item-section>

                <q-item-section
                  v-if="file.__img"
                  thumbnail
                  class="gt-xs"
                >
                  <q-img width="5rem" :ratio="1" :src="file.__img.src" />
                </q-item-section>

                <q-item-section top side>
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    icon="delete"
                    @click="scope.removeFile(file)"
                  />
                </q-item-section>
              </q-item>

            </q-list>
          </template>
        </q-uploader>
      </q-card-section>

      <q-card-section class="col-12">
        <q-separator></q-separator>
      </q-card-section>

      <q-card-section class="col-lg-7 col-12">
        <q-input filled v-model:value="username" label="用户名" type="text" placeholder="用户名/邮箱">
          <template v-slot:prepend>
            <q-icon name="account_circle"/>
          </template>
        </q-input>
      </q-card-section>

      <q-card-section class="col-lg-7 col-12">
        <q-input filled v-model:value="email" label="邮箱" placeholder="输入邮箱地址">
          <template v-slot:prepend>
            <q-icon name="email"/>
          </template>
        </q-input>
      </q-card-section>

      <q-card-section class="col-lg-7 col-12">
        <q-input filled v-model:value="description" label="简介" placeholder="输入个人简介">
          <template v-slot:prepend>
            <q-icon name="description"/>
          </template>
        </q-input>
      </q-card-section>

      <q-card-section class="col-lg-7 col-12">
        <q-input filled v-model:value="password" label="密码 (必填)" type="password" placeholder="用户密码">
          <template v-slot:prepend>
            <q-icon name="lock"/>
          </template>
          <template v-slot:label>
            密码
            <q-badge color="red" rounded>必填</q-badge>
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

      <q-card-section class="row justify-center col-lg-7 col-12">
        <q-btn push icon-right="sync_alt" color="primary">更新信息&nbsp;&nbsp;</q-btn>
      </q-card-section>
    </q-card-customed>
  </profile-layout>
</template>

<script>
import QPageCustomed from "components/QPageCustomed";
import QBreadcrumbsCustomed from "components/QBreadcrumbsCustomed";
import QCardCustomed from "components/QCardCustomed";
import ProfileLayout from "pages/ProfileLayout";
import QChipCustomed from "pages/QChipCustomed";

export default {
  name: "ProfileInfo",
  data() {
    return {}
  },
  components: {QChipCustomed, ProfileLayout, QCardCustomed, QBreadcrumbsCustomed, QPageCustomed}
}
</script>

<style scoped>

</style>
