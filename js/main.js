var app = new Vue({
	el: '#app',
  data: {
  message: "Hello word!",
  url: 'https://www.google.co.jp',
  toggle: true,
  languages: ['Java', 'Ruby', 'python']
  },
  methods: {
  click: function(){
  this.message = 'clicked'
  }
  }
})
