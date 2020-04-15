<template>
  <div id="app">
    <h1>Hello Fork Searcher</h1>
    <input type="text" name="" v-model="search">
    <button @click.prevent="filteredSearchForks">search</button>
    <hr>
    <ForksList
      :data="allForks"
      :totalItems="Math.ceil(allForks.length / 4)"
      :total="allForks.length"
      :perPage="1"
    />
    <FavorList
      :data="filteredSearchFavors"
      :totalItems="Math.ceil(allForks.length / 4)"
      :total="allForks.length"
      :perPage="5"
    />
  </div>
</template>

<script>
import ForksList from '@/components/ForksList'
import FavorList from '@/components/FavorList'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'App',
  async mounted() {
    this.fetchForks() //Получаю полный список данных
    this.fetchFavors() //Получаю полный список данных
  },
  data() {
    return {
      search: "" //строка поиска, встроена в инпут.
    }
  },
  methods: {
    //Метод, запрашивающий все данные таблицы
    ...mapActions(["fetchForks", "fetchFavors"]),
    filteredSearchForks: function(){ //Search with login
      this.fetchForks(this.search)
    },
  },
  computed: {
    //Геттер, возвращает все данные (список) таблицы
    ...mapGetters(["allForks", "allFavors"]),
    //Обработчик строки поиска, он же - поиск форков

    filteredSearchFavors: function(){
      return this.allFavors.filter((item)=>{
        return item.name.match(this.search)
      })
    },

  },
  components: {
    ForksList,
    FavorList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
