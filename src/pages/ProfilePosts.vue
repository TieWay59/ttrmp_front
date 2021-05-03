<template>
  <profile-layout>
    <post-list page_size="5" filter_author="tieway59" :is_clickable="false">
      <template slot="button">
        <q-item-section side>
          <q-btn-group flat>
            <q-btn dense icon="edit_note"/>
            <q-btn dense icon="preview"/>
            <q-btn dense text-color="red-6" icon="delete_forever"/>
          </q-btn-group>
        </q-item-section>
      </template>
    </post-list>
  </profile-layout>
</template>

<script>
import ProfileLayout from "pages/ProfileLayout";
import PostList from "pages/PostList";

export default {
  name: "ProfilePosts",
  components: {PostList, ProfileLayout}
}
</script>

<style scoped>

</style>
