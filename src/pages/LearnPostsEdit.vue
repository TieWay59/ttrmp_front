<template>
  <q-page-customed>
    <q-card-customed>
      <q-card-section class="row justify-between">
        <q-breadcrumbs-customed
          class="col-10"
          :page_dir="page_dir"></q-breadcrumbs-customed>
        <q-btn
          label="保存"
          flat
          color="primary"
          icon="save"
        >
          <q-badge color="red" rounded floating
            label="!"
          >
          </q-badge>
        </q-btn>
      </q-card-section>
    </q-card-customed>

    <q-card-customed>
      <q-card-section>
        <q-input outlined dense v-model="title">
        </q-input>
      </q-card-section>
      <q-separator/>
      <q-card-section class="q-pb-none">
        <q-chip v-if="date" square icon="event">{{ date }}</q-chip>
        <q-chip v-if="time" square icon="schedule">{{ time }}</q-chip>
        <q-chip v-if="creator" square icon="person"> {{ creator }}</q-chip>
      </q-card-section>
      <q-chip-customed class="q-pt-none" :tag_item="post_tag_item" :removable="true"/>
    </q-card-customed>

    <!--    <q-card-customed>-->
    <!--      <q-card-section>-->
    <!--        <q-video-->
    <!--          :ratio="16/9"-->
    <!--          style="height: 500px" src="//player.bilibili.com/player.html?bvid=BV1r4411B7wN">-->
    <!--        </q-video>-->
    <!--      </q-card-section>-->
    <!--    </q-card-customed>-->

    <q-card-customed>
      <q-card-section>
        <q-uploader
          label="上传新视频"
          flat
          color="white"
          text-color="dark"
          url="http://localhost:4444/upload"
          class="full-width"
        />
      </q-card-section>
      <q-card-section>

        <q-media-player
          type="video"
          background-color="black"
          :muted="false"
          radius=".3rem"
          :autoplay="false"
          :show-big-play-button="false"
          :sources="video.sources"
          :poster="video.poster"
          :tracks="video.tracks"
          track-language="English"
          dense
        >
        </q-media-player>
      </q-card-section>
    </q-card-customed>

    <q-card-customed>
      <q-card-section>
        <v-md-editor
          v-model="text"
          mode="edit"
        ></v-md-editor>
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
  name: "LearnPostsEdit",
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
        {cap: "编辑文章", url: `/learn/posts/${this.$route.params.id}`, icon: "edit"},
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
      video: {
        label: 'clip',
        sources: [
          {
            src: require("assets/clip1.mp4"),
            type: 'video/mp4'
          }
        ]
      }
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
  },
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
  },
}
</script>

<style scoped>

</style>
