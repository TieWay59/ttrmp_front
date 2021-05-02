<template>
  <q-card-section>
    <q-chip outline clickable square v-for="item in tag_item" :key="item.id" icon="tag">
      {{ item.name }}
    </q-chip>
  </q-card-section>
</template>
<script>
export default {
  name: 'q-chip-customed',
  props: {
    tag_item: {}
  }
}
</script>
