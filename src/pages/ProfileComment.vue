<template>
  <profile-layout>
    <q-card-customed>
      <q-card-section>
        <div class="text-h6">评论</div>
      </q-card-section>

      <q-separator/>

      <q-card-section>
        <q-list separator>
          <q-item
            v-for="comment in page_comment"
            :key="comment.id"
          >
            <q-item-section avatar top>
              <q-avatar icon="comment" color="primary" text-color="white"/>
            </q-item-section>
            <q-item-section class="col">
              <q-item-label>
                {{ comment.context }}
              </q-item-label>
              <q-item-label caption>
                <q-badge rounded color="orange" size="xs">new</q-badge>
                {{ comment.title }}
              </q-item-label>

            </q-item-section>

            <q-item-section side top>
              <q-chip square size="sm" icon="schedule">
                {{ comment.time }}
              </q-chip>
            </q-item-section>

            <q-item-section side top>
              <q-btn-group flat>
                <q-btn dense text-color="grey-7" icon="edit_note"/>
                <q-btn dense text-color="grey-7" icon="preview"/>
                <q-btn dense text-color="red-6" icon="delete_forever"/>
              </q-btn-group>
            </q-item-section>

          </q-item>
        </q-list>
      </q-card-section>

      <q-card-section class="q-pa-lg flex flex-center">
        <q-pagination
          v-model="page_current"
          :max="Math.ceil(comments.length / page_size)"
          :max-pages="6"
          boundary-numbers
          direction-links
          push
          color="primary"></q-pagination>
      </q-card-section>
    </q-card-customed>

  </profile-layout>
</template>

<script>
import ProfileLayout from "pages/ProfileLayout";
import QCardCustomed from "components/QCardCustomed";

export default {
  name: "ProfileComment",
  components: {QCardCustomed, ProfileLayout},
  data() {
    return {
      comments: [
        {id: 0, title: 'C++语法基础入门', time: '2020-12-11', context: 'Uhm no? Just do it twice. Once after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after after the contest ends, and the second one when the hacking phase ends. Stop trying to act smart you idiot.'},
        {id: 1, title: '时空复杂度分析', time: '2020-12-12', context: 'Wow! such big brain! and after every hack, rating changes of all 25,000 participants will be recalculated! No problem sir! I will put the word through to Mike'},
        {id: 2, title: 'title', time: '2020-12-12', context: 'It would be helpful if you could share the extension you find good.'},
        {id: 3, title: 'title', time: '2020-12-13', context: 'now, from this case, I\'m not sure that having predictor extension with such difference is enough :)'},
        {id: 4, title: 'title', time: '2020-12-13', context: 'Did anyone ever recieved any message from companies hiring through codechef ?'},
        {id: 5, title: 'title', time: '2020-12-14', context: 'Explain. What was your rank in cookoff and April long. what about your friend'},
        {id: 6, title: 'title', time: '2020-12-14', context: 'Not in april ...through jan;s long chanllege . We both were under 200 , I was in div.1 and he was in div 2'},
        {id: 7, title: 'title', time: '2020-12-15', context: 'Is this from cookoff or long challenge? because you know what long challenge means :)'},
        {id: 8, title: 'title', time: '2020-12-16', context: 'You can get selected from long too ... if there is no plag in your codes. Codechef do check for plag you know.'},
        {id: 9, title: 'title', time: '2020-12-16', context: 'They were hiring for internship n full time ... Time time I guess it is for coders with experience'},
      ],
      page_current: 1,
      page_size: 5
    }
  },
  computed: {
    page_comment() {
      return this.comments.filter((_, i) => {
        return Math.floor(i / this.page_size) + 1 === this.page_current;
      })
    }
  }
}
</script>

<style scoped>

</style>
