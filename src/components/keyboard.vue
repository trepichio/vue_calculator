<template>
  <div
    class="grid"
    @click="$emit('setInput',$event.target.dataset.value, $event)"
  >
    <div data-value='clear'>AC</div>
    <div data-value='sign'>+/-</div>
    <div data-value='percent'>%</div>
    <div data-value='divide' class="operators">&divide</div>
    <div data-value='7'>7</div>
    <div data-value='8'>8</div>
    <div data-value='9'>9</div>
    <div data-value='multiply' class="operators">x</div>
    <div data-value='4'>4</div>
    <div data-value='5'>5</div>
    <div data-value='6'>6</div>
    <div data-value='minus' class="operators">-</div>
    <div data-value='1'>1</div>
    <div data-value='2'>2</div>
    <div data-value='3'>3</div>
    <div data-value='sum' class="operators">+</div>
    <div data-value='0' class="zero">0</div>
    <div data-value='dot'>,</div>
    <div data-value='equals' class="operators">=</div>
  </div>
</template>

<script>
export default {

  name: 'Keyboard',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
	$keycolor: hsl(0, 0%, 83%);
	$operatorscolor: hsl(49, 100%, 50%);

	.grid {
		background: black;
		font-size: 4rem;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		grid-gap: 8px;
		padding: 1rem;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
	}

	.grid div {
		border: 2px solid gray;
		border-radius: 20px;
		background-color: $keycolor;
		padding: 15px;

		&:hover {
			background-color: lighten($keycolor, 40%)
		}
	}

	div.operators {
		background-color: $operatorscolor;

		&:hover {
			background-color: lighten($operatorscolor, 40%);
		}
	}

	.zero {
		grid-column-start: 1;
		grid-column-end: 3;
	}
</style>