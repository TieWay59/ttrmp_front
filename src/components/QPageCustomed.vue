<template>
  <q-page class="full-width column">
    <slot></slot>
  </q-page>
</template>

<script>
export default {
  name: "QPageCustomed"
}
</script>

<!-- removed scoped-->
<style lang="sass" >
.q-page
  padding: 0 20%
  min-height: 110vh

  .q-card
    margin: .5rem
</style>
