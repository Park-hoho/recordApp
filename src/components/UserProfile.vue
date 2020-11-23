<template>
  <div class="user">
    @{{ user.username }}<br>
    {{fullName}}<br>
    <div class="admin-badge" v-if="user.isAdmin">
      admin
    </div>
    <strong>Followers : </strong>{{followers}}
    <form class="form-twoot" @submit.prevent="createNewTwoot">
      <label for="newToot">New Twoot</label>
      <textarea id="newToot" cols="30" rows="10" v-model="newTwootContent" />
      <div>
        <label for="newTwootType"></label>
        <select id="newTwootType" v-model="selectedTwootType">
          <option :value="option.value" v-for="(option, index) in twootTypes" :key="index">
            {{ option.name }}
          </option>
        </select>
      </div>
      <button>
        Twoot!
      </button>
    </form>
  </div>
  <!--(twoot, index) key=index index 넣어도 됨-->
  <TwootItem
      v-for="twoot in user.twoots"
      :key="twoot.id"
      :username="user.username"
      :twoot="twoot"
      @favourite="toggleFavourite"
  />
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
      newTwootContent: '',
      selectedTwootType: 'instant',
      twootTypes: [
        { value: 'draft', name: 'Darft'},
        { value: 'instant', name: 'Instant Twoot'},
      ],
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
    },
    createNewTwoot() {
      if (this.newTwootContent && this.selectedTwootType !== 'draft') {
        this.user.twoots.unshift({
          id: this.user.twoots.length + 1,
          content: this.newTwootContent
        })
        this.newTwootContent = '';
      }
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

  .form-twoot {
    margin-top: 32px;
  }

  .form-twoot > label {
    display: block;
  }
</style>