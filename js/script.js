const {createApp} = Vue;

createApp ({
  data(){
    return{

    }
  },

  mounted(){

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then( (risultato ) => {
      console.log(risultato);

    })
  }
}).mount('#app')