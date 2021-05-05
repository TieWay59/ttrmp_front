<template>
  <q-card-section>
    <q-chip
      v-for="item in tag_item"
      :key="item.id"
      clickable
      icon="tag"
      outline
      square
      :removable="removable"
    >
      {{ item.name }}
    </q-chip>
    <q-chip
      v-if="removable"
      clickable
      icon="tag"
      outline
      square
      icon-right="add"
    >
      <template v-slot:default>
        <input
          v-model="text"
          placeholder="输入新标签"
          style="border: none"
        />
      </template>

    </q-chip>
  </q-card-section>
</template>
<script>
export default {
  name: 'q-chip-customed',
  props: {
    tag_item: {},
    removable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      text: ''
    }
  }
}
</script>
