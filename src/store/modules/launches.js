export default{
    state: {
        launches:[],
    },
    mutations: {
        updateLaunches(state, launches){
            state.launches = launches
        },
    },
    actions: {
        async fetchLaunches(ctx){
            let response = await fetch(`https://api.spacexdata.com/v3/launches`);
            let launches = await response.json()
            ctx.commit('updateLaunches' , launches)
        },
    },
    getters:{
        allLaunches(state){
            return state.launches
        }
    },
}