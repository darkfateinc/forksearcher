import {db} from '../../firebase'
export default {
  actions: {
    async fetchForks(ctx){
      let resp = await fetch(`https://api.github.com/search/repositories?q=user%3Astrongloop+repo%3Aexpress+express`);
        if(resp.ok) {
          let json = await resp.json();
          //console.log(json.items)
          return ctx.commit('updateForks', json.items);
        }else{
          alert("HTTP error: " + resp.status);
        }
    },

    fetchFavors(ctx) {
      db.ref('forks').on("value", (snp)=>{
        var data = [];
        snp.forEach(ss => {
           data.push(ss.val());
        });
        return ctx.commit('getFavors', data)
      })
    },

    addToChanged(ctx, item) {
      db.ref('forks/' + item.id).set(item);
      //db.ref('forks').child(item.id).update({'changed': !item.changed})
    },

    removeFromChanged(ctx, id){
      db.ref('forks/' + id).set(null);
    }
  },
  mutations: {
    updateForks(state, forks){
      state.forks = forks
    },
    getFavors(state, favors) {
      state.favors = favors
    }
  },
  state: {
    forks: [],
    favors: []
  },
  getters: {
    allForks: state => state.forks,
    allFavors: state => state.favors
  }
}
