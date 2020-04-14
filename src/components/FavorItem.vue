<template>
  <div class="list-wrap">
    <button type="button" class="star" placeholder="Добавить в избранное" @click.prevent="removeFavor(item.id)">
      Remove
    </button>
    <div class="">{{item.name}}</div>
    <div class="">{{item.owner.login}}</div>
    <div class="">{{item.score}}</div>
    <div class=""><a :href="item.html_url">Click to the Fork</a></div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['removeFromChanged']),
    removeFavor(id){
      this.removeFromChanged(id)
    }
  }
}
</script>

<style scoped>
  .star {
    display: flex;
    padding: 0;

    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .list-wrap {
    display: flex;

  }
  .list-wrap div {
    width: 100%;
    text-align: left;
    border: 1px solid #ccc;
  }
  input {
    width: 20px;
    height: 20px;
  }
  span {
    display: flex;
    align-items: center;
  }
  li {
    border: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: .5rem 2rem;
    margin-bottom: 1rem;
  }
  button {

  }
</style>
