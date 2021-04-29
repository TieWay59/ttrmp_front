<template>
  <q-breadcrumbs class="text-light-green">
    <template v-slot:separator>
      <q-icon
        size="1.5em"
        name="chevron_right"
        color="primary"
      />
    </template>

    <q-breadcrumbs-el
      v-for="p in page_dir"
      :key="p.cap">
      <q-btn :label="p.cap"
             :to="p.url"
             :icon="p.icon"
             flat
             padding=".5em"
             dense
      >
      </q-btn>
    </q-breadcrumbs-el>
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
