import {db} from '../../firebase'
export default {
  actions: {
    fetchForks(ctx){
      db.ref('forks').on("value", (snp)=>{
        var data = [];
        snp.forEach(ss => {
           data.push(ss.val());
        });
        return ctx.commit('updateForks', data)
      })
    },
    addToChanged(ctx, item) {
      db.ref('forks').child(item.id).update({'changed': !item.changed})
    }
  },
  mutations: {
    updateForks(state, forks){
      state.forks = forks
    },
  },
  state: {
    forks: [],
    forksper: []
  },
  getters: {
    allForks: state => state.forks,
  }
}
