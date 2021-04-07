var app = new Vue(
  {
    el: "#app",
    data: {
      email: "",
      emails: [],
    },
    mounted: function(){

      for (var i = 0; i < 10; i++) {

        var self = this;

        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")

        .then(function ( risposta ){
          self.emails.push(risposta.data.response);
        });
      }
    }
  }
);
