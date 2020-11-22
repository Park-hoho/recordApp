<template>
  <div class="twoot" @click="favouriteTwoot(twoot.id)">
    {{ username }}<br>
    {{ twoot.content }}
  </div>
</template>

<script>
export default {
  name: 'TwootItem',
  props: { // prop"s"
    username: {
      type: String,
      required: true
    },
    twoot: {
      type: Object,
      required: true
    }
  },
  methods: {
    favouriteTwoot(id) {
      this.$emit('favourite', id)
    }
  }
};
</script>

<style>
 .twoot {
   margin: 8px 0;
   padding: 8px 0;
   background-color: #f1f1f1;
 }
</style>