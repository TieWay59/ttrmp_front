<template>
  <q-breadcrumbs class="text-brown">
    <template v-slot:separator>
      <q-icon
        size="1.5em"
        name="chevron_right"
        color="primary"
      />
    </template>
    <q-breadcrumbs-el v-if="page_dir.length > 0" :label="page_dir[0]" icon="home"/>
    <q-breadcrumbs-el v-if="page_dir.length > 1" :label="page_dir[1]" icon="widgets"/>
    <q-breadcrumbs-el v-if="page_dir.length > 2" :label="page_dir[2]" icon="navigation"/>
  </q-breadcrumbs>
</template>

<script>
export default {
  name: "QBreadcrumbsCustomed",
  props: {
    page_dir: {
      type: Array,
      required: true,
      default: []
    }
  }
}
</script>

<style scoped>

</style>
