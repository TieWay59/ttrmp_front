<template>
  <q-page-customed>
    <q-card-customed>
      <q-card-section>
        <q-breadcrumbs-customed :page_dir="page_dir"></q-breadcrumbs-customed>
      </q-card-section>
    </q-card-customed>

    <q-card-customed>
      <q-card-section>
        <div v-if="title" class="text-h6">{{ title }}</div>
        <q-skeleton v-else type="text" animation="pulse-y" width="150px"></q-skeleton>
      </q-card-section>
      <q-separator/>
      <q-card-section class="q-pb-none">
        <q-chip v-if="date" square icon="event">{{ date }}</q-chip>
        <q-chip v-if="time" square icon="schedule">{{ time }}</q-chip>
        <q-chip v-if="creator" square icon="person"> {{ creator }}</q-chip>
      </q-card-section>
      <q-chip-customed class="q-pt-none" :tag_item="post_tag_item"/>
    </q-card-customed>

    <q-card-customed>
      <q-card-section>
        <q-video
          :ratio="16/9"
          src="//player.bilibili.com/player.html?bvid=BV1r4411B7wN"
          style="height: 500px"
        />
      </q-card-section>
    </q-card-customed>

    <q-card-customed>
      <q-card-section class="q-pt-none">
        <v-md-editor
          v-if="text"
          v-model="text"
          mode="preview"
        ></v-md-editor>
        <q-skeleton
          v-for="i in 3"
          v-else
          :key="i"
          animation="pulse-y"
          class="q-my-sm"
          type="text"
        ></q-skeleton>
      </q-card-section>
    </q-card-customed>

    <q-card-customed>
      <!--      TODO 看起来不错的card图片-->
      <!--      <q-img :src="getPicUrl()"></q-img>-->
      <q-card-section>
        <div v-if="title" class="text-h6">评论</div>
        <q-skeleton v-else type="text" animation="pulse-y" width="150px"></q-skeleton>
      </q-card-section>

      <q-separator></q-separator>

      <q-card-section>
        <q-item>
          <q-item-section avatar top>
            <q-avatar rounded size="xl">
              <q-img
                src="https://cdn.quasar.dev/img/boy-avatar.png"
                ratio="1"
                transition="rotate"
              >
                <template v-slot:loading>
                  <q-spinner-gears color="white" size="sm"/>
                </template>
              </q-img>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>
                <span class="text-h6">
                  伍泰炜
                </span>
              <q-badge
                color="secondary"
                rounded
                class="no-border"
              >
                <q-icon name="manage_accounts"></q-icon>
                管理员
              </q-badge>
            </q-item-label>
            <q-item-label class="q-py-sm">
              <q-editor v-model:value="comment_buffer"></q-editor>
            </q-item-label>
            <q-item-section side>
              <q-btn
                color="primary"
                label="评论"
                outline
                size="sm"
                @click="appendComment()"
              ></q-btn>
            </q-item-section>
          </q-item-section>
        </q-item>
      </q-card-section>


      <q-separator/>


      <q-card-section>
        <q-list>
          <q-item v-for="c in getComments" :key="c.id">
            <q-item-section avatar top>
              <q-avatar rounded size="xl">
                <q-img
                  :src="c.src? c.src : getPicUrl()"
                  ratio="1"
                  transition="rotate"
                >
                  <template v-slot:loading>
                    <q-spinner-gears color="white" size="sm"/>
                  </template>
                </q-img>
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>
                <span class="text-h6">
                  {{ c.username }}
                </span>
                <q-badge
                  v-if="c.role==='admin'"
                  color="secondary"
                  rounded
                  class="no-border"
                >
                  <q-icon name="manage_accounts"></q-icon>
                  管理员
                </q-badge>
              </q-item-label>
              <q-item-label class="q-py-sm">
                {{ c.context }}
              </q-item-label>
              <q-item-section side>
                <q-btn label="回复" color="primary" outline size="sm"></q-btn>
              </q-item-section>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>

    </q-card-customed>
  </q-page-customed>
</template>

<script>

import QPageCustomed from "components/QPageCustomed";
import QBreadcrumbsCustomed from "components/QBreadcrumbsCustomed";
import {date} from 'quasar';
import QCardCustomed from "components/QCardCustomed";
import QChipCustomed from "pages/QChipCustomed";

export default {
  name: "LearnPosts",
  components: {QChipCustomed, QCardCustomed, QBreadcrumbsCustomed, QPageCustomed},
  data() {
    return {
      title: null,
      date: null,
      time: null,
      text: null,
      creator: null,
      page_dir: [
        {cap: "主页", url: "/index", icon: "home"},
        {cap: "帖子", url: "/learn/posts", icon: "widgets"},
        {cap: "当前页面", url: `/learn/posts/${this.$route.params.id}`, icon: "navigation"},
      ],
      comments: [
        {id: 1, username: 'tieway59', role: 'admin', context: 'Hello?'},
        {
          id: 2,
          username: 'RakibJoy',
          role: 'normal',
          context: 'I think preliminary rating change in educational rounds will be great.'
        },
        {
          id: 3,
          username: '_aryanv',
          role: 'normal',
          context: 'Uhm no? Just do it twice. Once after the contest ends, and the second one when the hacking phase ends. Stop trying to act smart you idiot.\n' +
            '\n' +
            'PS — We have rating predictor extensions so prelim rating changes are not really needed.'
        },
        {
          id: 4,
          username: 'discopose1234',
          role: 'normal',
          context: 'Nope. You can check submission time on codechef. He submitted 40 minutes before the contest expired. Also i know this is a fake profile vj12. so do that someplace else. You sure have a lot of time arpit0891 to do this fake stuff and upvote your own comment from different profile.\n' +
            '\n' +
            'But assuming you are genuine. This is still bad. Indulging in cheating is as bad as letting others cheat. Thanks for making it more easy for us. Regards'
        },
        {
          id: 5,
          username: '周天辰1',
          role: 'admin',
          context: 'I don\'t think we stand a chance though. cheaters will get interviews and you will get nothing. no reject mails even.\n' +
            '\n' +
            'so please take your time, read what i have written (https://discuss.codechef.com/t/are-cheaters-getting-interviews/88769/6) and give a f***k . cause the whole of admin team doesn\'t seem to give one?'
        },
        {id: 6, username: '018429', role: 'normal', context: 'i am very excited to participate the contest,wooooooo~'},
        {id: 7, username: '周天辰2', role: 'admin', context: 'Hello?'},
        {id: 8, username: '周天辰123', role: 'admin', context: 'Hello?'},
        {id: 9, username: 'Sundaram_Sharma', role: 'normal', context: 'waoooo~'},
        {id: 10, username: 'tieway59', role: 'admin', context: 'Hello?'},
        {
          id: 11,
          username: 'Sundaram_Sharma',
          role: 'normal',
          context: 'For each position in the array i I tried generating an even length subarray and uneven length subarray that begins with that position as the middle or one of the middle elements. At each iteration add one more in each end so that the new subarray is continuous. Notice that moving through them like this maintains the position of the ones inside, so you just have to see what difference the new ends would make. O(n^2) time, O(n) memory.'
        },
      ],
      comment_buffer: 'This post is nice.',
      post_tag_item: [
        {id: 1, name: "C++"},
        {id: 6, name: "基础知识"},
      ],
    }
  },
  methods: {
    getPicUrl() {
      return 'https://placeimg.com/150/150/nature?t=' + Math.random();
    },
    appendComment() {
      this.comments.push({
        id: this.comments.length + 1,
        username: '伍泰炜',
        context: this.comment_buffer,
        role: 'admin',
        src: "https://cdn.quasar.dev/img/boy-avatar.png"
      })
    }
  },
  computed: {
    getComments() {
      let a = Array(...this.comments);
      return a.reverse();
    }
  }
  ,
  created() {
    this.$axios
      .get(`/api/post/${this.$route.params.id}`)
      .then(res => {
        this.title = res.data.postTitle;
        let td = date.extractDate(res.data.postDate, 'YYYY-MM-DDTHH:mm:ss.SSSZ');
        this.date = date.formatDate(td, 'YYYY-MM-DD');
        this.time = date.formatDate(td, 'HH:mm:ss');
        this.text = res.data.postText;
        // this.creator = res.data.postCreator;
        return this.$axios.get(`/api/user/` + res.data.postCreator);
      })
      .catch(() => {
        this.title = "请求超时"
      })
      .then(res => {
        this.creator = res.data.userName;
      });
  }
}
</script>

<style lang="sass" scoped>
</style>

