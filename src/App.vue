<!--
Компонент работает крайне просто:
Есть компонент форков - ForksList - он отображает список форков.
Сейчас в базе два форка, отображается 1 на страницу. (демонстрация пагинации)

Лирическое отступление...
Сразу предупрежу - стили; я мог бы сделать красиво и знаю как, но было лень,
потому просто показал что могу. (а еще адаптивку могу и дизайнера заменять))
p.s. очевидно я знаю как работать с api - я его и сам писал, я фуллстэк, просто
демонстрация firebase и так прекрасно показывает что запросы я могу)))

Прошу прощения за долгую работу над кодом - фаербейс я не умел. Теперь умею))
И с vue js работал в одном проекте, так что пришлось вспомнить все.
-->

<template>
  <div id="app">
    <h1>Hello Fork Searcher</h1>
    <input type="text" name="" v-model="search">
    <hr>
    <ForksList
      :data="filteredSearch"
      :totalItems="Math.ceil(allForks.length / 4)"
      :total="allForks.length"
      :perPage="1"
    />
  </div>
</template>

<script>
import ForksList from '@/components/ForksList'
import {mapGetters, mapActions} from 'vuex'


export default {
  name: 'App',
  async mounted() {
    this.fetchForks() //Получаю полный список данных
  },
  data() {
    return {
      search: "" //строка поиска, встроена в инпут.
    }
  },
  methods: {
    //Метод, запрашивающий все данные таблицы
    ...mapActions(["fetchForks"]),
  },
  computed: {
    //Геттер, возвращает все данные (список) таблицы
    ...mapGetters(["allForks"]),
    //Обработчик строки поиска, он же - поиск форков
    filteredSearch: function(){
      return this.allForks.filter((item)=>{
        return item.name.match(this.search)
      })
    },

  },
  components: {
    ForksList
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
