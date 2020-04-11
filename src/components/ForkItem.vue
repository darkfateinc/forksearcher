<template>
  <div class="list-wrap">
    <button v-if="item.changed" type="button" class="star" placeholder="Добавить в избранное" @click.prevent="addToChange(item)">
      ★
    </button>
    <button v-else type="button" class="star" placeholder="Добавить в избранное" @click.prevent="addToChange(item)">
      ☆
    </button>
    <div class="">{{item.name}}</div>
    <div class="">{{item.owner}}</div>
    <div class="">{{item.rating}}</div>
    <div class="">{{item.link}}</div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['addToChanged']),
    addToChange(item){
      this.addToChanged(item)
    }
  }
}
</script>

<style scoped>
  .star {
    display: flex;
    padding: 0;
    font-size: 20px;
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
    min-width: 35px;
    max-width: 55px;
    border: 1px solid #ccc;
    border-radius: 3px;
    outline: none;
  }
</style>
