<template>
  <div class="">
      <div><h3>Избранное</h3></div>
      <div class="list-wrap">
        <button type="button" name="button" id="star" disabled>Remove</button>
        <div class=""><strong>Название</strong></div>
        <div class=""><strong>Владелец</strong></div>
        <div class=""><strong>Оценка</strong></div>
        <div class=""><strong>Ссылка</strong></div>
      </div>
      <FavorItem
        v-for="(p, index) in collection"
        v-bind:item="p"
        v-bind:key="index"
        />
        <div class="toolbar">
          <button v-for="(p, index) in pagination.pages" :key = "index" @click.prevent = "setPage(p)">
            {{p}}
          </button>
        </div>
  </div>
</template>

<script>
import FavorItem from '@/components/FavorItem'
import * as _ from 'lodash';
export default {
  props: ['data', 'totalItems', 'perPage', 'currentPage', 'total'],
  data(){
    return {
      pagination: {},
      totalLength: 0,
    }
  },
  watch: {
    data: function(newVal) {
      this.totalLength = newVal.length
      this.setPage(1)
    }
  },
  components: {
    FavorItem
  },
  created(){
    //Инициализация при старте - выбирает первую страницу.
    this.setPage(1)
  },
  computed: {
    collection(){
      //Список следующих функций - парсит данные, разбивая по страницам.
      //А этот метод возвращает результат для соответствующей страницы.
      return this.paginate(this.data);
    }
  },
  methods: {
    setPage(p) {
      this.pagination = this.paginator(this.totalLength, p);
    },
    paginate(data) {
      return _.slice(data, this.pagination.startIndex, this.pagination.endIndex + 1)
    },
    paginator(total, currentPage) {
      var startIndex = (currentPage - 1) * this.perPage,
      endIndex = Math.min(startIndex + this.perPage - 1, total - 1);
      return {
        currentPage: currentPage,
        startIndex: startIndex,
        endIndex: endIndex,
        pages: _.range(1, Math.ceil(total / this.perPage) + 1)
      }
    },
  },
}
</script>

<style scoped>
  .list-wrap {
    display: flex;
  }
  #star {
    display: flex;

    padding: 0;

    align-items: center;
    justify-content: center;
  }
  .list-wrap div {
    width: 100%;
    text-align: left;
    border: 1px solid #ccc;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
</style>
