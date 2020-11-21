<template>
  <div class="user">
    @{{ user.username }}<br>
    {{fullName}}<br>
    <div class="admin-badge" v-if="user.isAdmin">
      admin
    </div>
    <strong>Followers : </strong>{{followers}}
  </div>
  <!--(twoot, index) key=index index 넣어도 됨-->
  <TwootItem v-for="twoot in user.twoots" :key="twoot.id" :username="user.username" :twoot="twoot" @favourite="toggleFavourite" />
</template>

<script>
import TwootItem from './TwootItem';

export default {
  name: 'UserProfile',
  components: {
    TwootItem
  },
  data() {
    return {
      followers: 0,
      user: {
        id: 1,
        username: '_ByungHo',
        firstName: 'Park',
        lastName: 'ByungHo',
        email: 'qq@naver.com',
        isAdmin: true,
        twoots: [
          { id: 1, content: '멋져요'},
          { id: 2, content: '오..'}
        ]
      }
    }
  },
  watch: {
    followers(newFollowerCount, oldFollowerCount) {
      if (oldFollowerCount < newFollowerCount) {
        console.log(`${this.user.username} 팔로우함`)
      }
    }
  },
  computed: {
    fullName() {
      return `${this.user.firstName} ${this.user.lastName}`;
    }
  },
  methods: {
    followUser() {
      this.followers++;
    },
    toggleFavourite(id) {
      console.log(id);
    }
  },
  mounted() { // vue 에서 라이플 사이클 찾아보기
    this.followUser();
  }
}
</script>

<style>
  .user {
    width: 100%;
    height: 340px;
    background-color: #f1f1f1;
  }

  .admin-badge {
    display: inline-block;
    background-color: black;
    color: white;
    padding: 2px 4px;
  }
</style>