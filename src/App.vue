<template>
  <div id="app">
    <div class="calculator-container" ontouchstart="">
      <display
        :input="input"
      />
      <keyboard
        @setInput="setInput"
        :memory="memory.length"
      />
    </div>
  </div>
</template>

<script>
import display from '@/components/display.vue';
import keyboard from '@/components/keyboard.vue';
export default {
  name: 'app',
  components: {
    display,
    keyboard
  },
  data () {
    return {
      input: '0',
      memory: [],
      input_done: true
    };
  },
  methods: {
    setInput: function (payload, event) {
      let operator = event.target.classList.contains('operators')
      let lastOperation = this.memory[this.memory.length-1]

      if (this.input_done && !isNaN(payload)) {
        this.input = payload
        this.input_done = false
      }
      else if (isNaN(payload) && !operator) {
        this[payload]()
      }
      else if (!operator) {
        this.input += payload
      }
      else {
        if (this.memory.length === 0) {
          this.save(this.input)
          this.save(payload)
          return
        }
        if (lastOperation === payload){
          if (this.input_done) {
            // operator clicked twice or more
            console.error('operator clicked twice or more')
            return
          }
          else{
            this.input = this.calc() + ''
            payload !== 'equals' ? this.save(payload) : ''
            console.warn('same operation')
            return
          }
        }
        else if (this.input_done) {
          console.warn('going to change operation')
          console.log(lastOperation)
          console.log('payload', payload)
          this.memory.splice(-1,1,payload)
          console.log('changed operation', this.memory)
       }
       else {
          this.input = this.calc() + ''
          payload !== 'equals' ? this.save(payload) : this.save(this.input)
          console.warn('diff operation')

          return
        }
      }
    },
    save: function (number) {
      console.log('saving', number)
      this.memory = [...this.memory, number]
      console.log('memory', this.memory)
      this.input_done = true
    },
    sign: function () {
      this.input = (this.input * -1) + ''
      console.warn('sign')

    },
    clear: function () {
      this.input = '0'
      this.output = 0
      this.memory = []
      this.input_done = true
    },
    percent: function () {
      this.input = parseFloat(this.input) / 100 + ''
    },
    dot: function () {
      if (this.input.indexOf('.') != -1) return
      console.log(parseFloat(this.input).toFixed(1))
      this.input = parseFloat(this.input).toFixed(1)
      this.input = this.input.slice(0,-1)
    },
    calc: function () {
      this.save(this.input)
      let last_index = this.memory.length-1
      console.log(this.memory[last_index])
      let a = parseFloat(this.memory[last_index-2])
      let operation = this.memory[last_index-1]
      let b = parseFloat(this.memory[last_index])
      console.warn(a, operation, b)
      return this[operation](a,b)
    },
    sum: function (a,b) {
      console.log('sum function')
      let output = a + b
      this.save(output)
      return output
    },
    minus: function (a,b) {
      console.log('minus function')
      let output = a - b
      this.save(output)
      return output
    },
    multiply: function (a,b) {
      console.log('multiply function')
      let output = a * b
      this.save(output)
      return output
    },
    divide: function (a,b) {
      console.log('divide function')
      let output = a / b
      this.save(output)
      return output
    },
    equals: function (a,b) {
      console.log('equals function')
      let output = a + 0
      this.save(output)
      return output
    },

  }
}
</script>

<style lang="scss">
html {
  box-sizing: border-box;
  font-size: 62.5%;
  margin: 0;
  padding: 0;
}

*, *::before, *::after {
  box-sizing: inherit;
}

body {
  font-size: 1.6rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.calculator-container {
  min-width: fit-content;
  filter: drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.7));
}

@media screen and (min-width: 768px) {
  .calculator-container {
    min-width: 764px;
    max-width: 60%;
    margin: 0 auto;
  }
}
</style>
