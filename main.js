new Vue({
	el: '#vueApp',
	data: {
		message: 'Hello Vue!'
	},
});

new Vue({
	el: 'div span',
	data: {
		message: 'Hello Vue!',
	},
});

// properties 'v-bind:' = ':'
// events 'v-on' = '@'
new Vue({
	el: '#vueAppBinds',
	data: {
		title: 'Hello Vue!',
		style: {
			color: 'red',
			'font-size': '25px'
		},
		enabled: true
	},
	methods: {
		alert: function() {
			window.alert('It works!')
		},

		alertData: function() {
			window.alert('the title is ' + this.title + ':)')
		},

		changeColor: function() {
			if(this.style.color ==='red') {
				this.style.color = 'blue'
			} else {
				this.style.color = 'red'
			}
		},

		toggleEnable: function() {
			this.enabled = !this.enabled;
		}

	}
});
