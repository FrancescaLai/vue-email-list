var app = new Vue(
  {
    el: "#app",
    data: {
      email: "francesca@boolean.com",
    },
    mounted: function(){
      var self = this;

      axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then(function ( risposta ){
        self.email = risposta.data.response;
      });
    }
  }
);
