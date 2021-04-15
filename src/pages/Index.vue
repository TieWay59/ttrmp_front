<template>
  <q-page class="flex flex-center column">
    <div class="fit column wrap justify-start items-start content-center q-gutter-sm" style="overflow: hidden;">
      <br>
      <br>
      <br>
      <q-card class="my-card">
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

      <q-card class="my-card">
        <q-img src="~assets/logo.png"/>
        <q-card-section>
          <div class="text-h5">ZJNU/ACM集训队资源站</div>
          <div class="text-subtitle2">浙江师范大学ACM集训基地资源管理平台</div>
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <q-card-section>
          <div class="text-h6">集训队简介</div>
        </q-card-section>
        <q-separator inset="true"/>
        <q-card-section>
          <router-link to="/learn">go to learn</router-link>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </q-card-section>
      </q-card>
      <br>
      <br>
      <br>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 800px
</style>
