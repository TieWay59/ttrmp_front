<template>
  <q-page-customed>
    <q-card-customed>
      <q-card-section>
        <q-breadcrumbs-customed :page_dir="page_dir"></q-breadcrumbs-customed>
      </q-card-section>
    </q-card-customed>

    <q-card-customed>
      <q-card-section horizontal>
        <q-card-section class="col-2">
          <q-img
            sizes="fit"
            class="rounded-borders"
            src="https://cdn.quasar.dev/img/boy-avatar.png"
          />
        </q-card-section>
        <q-card-section class="col-10">
          <div class="text-h5">
            伍泰炜
          </div>
          <div class="text-body1">
            <div>邮箱：tieway59@foxmail.com</div>
            <div>注册日期：2020-12-22</div>
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
        </q-card-section>
      </q-card-section>
    </q-card-customed>

    <post-list page_size="5" filter_author="tieway59"></post-list>

    <q-card-customed>
      <q-card-section class="text-h6">
        标签
      </q-card-section>
      <q-separator></q-separator>

      <q-chip-customed :tag_item="tag_item"/>
    </q-card-customed>

  </q-page-customed>
</template>


<script>
import QPageCustomed from "components/QPageCustomed";
import QCardCustomed from "components/QCardCustomed";
import QBreadcrumbsCustomed from "components/QBreadcrumbsCustomed";
import PostList from "pages/PostList";
import QChipCustomed from "pages/QChipCustomed";

export default {
  name: "Profile",
  data() {
    return {
      page_dir: [
        {cap: "主页", url: "/index", icon: "home"},
        {cap: "个人中心", url: "/profile", icon: "face"},
      ],
      tag_item: [
        {id: 1, name: "C++"},
        {id: 2, name: "数论"},
        {id: 3, name: "图论"},
        {id: 4, name: "计算几何"},
        {id: 5, name: "数据结构"},
        {id: 6, name: "基础知识"},
        {id: 7, name: "进阶知识"},
      ]
    }
  },
  components: {QChipCustomed, PostList, QBreadcrumbsCustomed, QCardCustomed, QPageCustomed}
}
</script>

