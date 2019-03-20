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
// 2-way binding  'v-model:'
new Vue({
	el: '#vueAppBinds',
	data: {
		title: 'Hello Vue!',
		style: {
			color: 'red',
			'font-size': '25px'
		},
		enabled: true,
		checkedNames: []
	},
	methods: {
		alert: function() {
			window.alert('It works!')
		},

		alertData: function(_,event,_) {
			window.alert('the title is ' + this.title + ':)');
			console.log(event);
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

// directives
// v-if
// v-for
// v-show
// dont combine v-if and  v-for
new Vue({
	el: '#vueAppDirectives',
	data: {
		qty: 1,
		visible: false,
		someArray: ['string', 'string', 0, true],
		someObject: {
			firstName: 'John',
			lastName: 'Doe',
			age: 30
		}
	},
	methods: {
		toggleVisible: function() {
			this.visible = !this.visible;
		}
	}
});

// methods / computed
// + watch
new Vue({
	el: '#vueAppComputed',
	data: {
		counter1: 0,
		counter2: 0,
		counter3: 0,
		counter4: 0,
	},
	methods: {
		method1: function() {
			console.log('method1 call!');
			return this.counter1;
		},

		method2: function() {
			console.log('method2 call!');
			return this.counter2;
		},

		method3: function() {
			console.log('method3 call!');
		},

		method4: function() {
			console.log('method4 call!');
		}
	},
	computed: {
		computed1: function() {
			console.log('computed1 call!');
			return this.counter3;
		},

		computed2: function() {
			console.log('computed2 call!');
			return this.counter4;
		}
	},
	watch:{
		counter4: function(val) {
			console.log('watch see a value of :' + val)
		}
	}
});

// template
new Vue({
	template:
		`<div>Inside template </div>`
	,
	el: '#vueAppTemplate',
});

//lifecicle hooks
new Vue({
	el: '#vueAppHooks',

	beforeCreate: function () {
		// called before the app is created
	},

	created: function () {
		// called after the app is created
	},

	beforeMount: function () {
		// called before the app is mounted on the DOM
	},

	mounted: function () {
		// called after the app is mounted on the DOM
	},

	beforeDestroy: function () {
		// called before the app is destroyed
	},

	destroyed: function () {
		// called after the app is destroyed
	},

	beforeUpdate: function () {
		// called before a property is updated
	},

	updated: function () {
		// called after a property is updated
	},

	activated: function () {
		// called when a kept-alive component is activated
	},

	deactivated: function () {
		// called when a kept-alive component is deactivated
	}
});



// http calls
// vue-resource retired! Axios now
Vue.prototype.$http = axios;
new Vue({
	el: '#vueAppHttp',
	data: {
		luke: {
			name: null,
			hair: null,
			height: null
		}
	},
	methods: {
		getLuke: function() {
			var vm = this;
			this.$http
			.get('https://swapi.co/api/people/1/')
			.then(function(response) {
				vm.luke.name = response.data.name;
				vm.luke.height = response.data.height;
				vm.luke.hair = response.data.hair_color;
			})
	 	}
	},
});

// components
// globalnie zarejestrowany komponent , widoczny
// dla wszysktich komponentów vue poniżej
Vue.component('button-counter', {
	data: function () {
		return {
			count: 0
		}
	},
	template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})

//JSowy obiekt, zarejestrowany lokalnie jako komponent poniżej
var counter2 =  {
	data: function () {
		return {
			count: 0
		}
	},
	template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
}

new Vue({
	el: '#vueAppComponents',
});

new Vue({
	el: '#vueAppComponents2',
	components:{
		'button-counter2': counter2
	},
});

//propsy i eventy
var displayAndCallBack =  {
	template: `<div v-on:click="callBack">{{message}}</div>`,
	props: {
		message: String
	},
	data: function () {
		return {
			count: 0
		}
	},
	methods: {
		callBack() {
			this.$emit('call-back', this.message);
		}
	}
}

new Vue({
	el: '#vueAppComponentsProps',
	data: {
		texts:['parents message', 'different message']
	},
	methods:{
		consoleLog:function(event) {
			console.log('Child called back with ' + event +'!');
		}
	},
	components:{
		'display-callback': displayAndCallBack
	},
});

// SLOTS
// projekcja widoku to wnętrza komponentu
var iTakeSlot =  {
	template: `
	<div>
		Some text
		<slot></slot>
		Other text
	</div>`,
	props: {
		message: String
	},
	data: function () {
		return {
			count: 0
		}
	},
	methods: {
		callBack() {
			this.$emit('call-back', this.message);
		}
	}
}

new Vue({
	el: '#vueAppComponentsSlots',
	components:{
		'i-take-slot': iTakeSlot
	},
});









