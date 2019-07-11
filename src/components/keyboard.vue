<template>
	<div class="grid">
		<div>AC</div>
		<div>+/-</div>
		<div>%</div>
		<div class="operators">&divide</div>
		<div>7</div>
		<div>8</div>
		<div>9</div>
		<div class="operators">x</div>
		<div>4</div>
		<div>5</div>
		<div>6</div>
		<div class="operators">-</div>
		<div>1</div>
		<div>2</div>
		<div>3</div>
		<div class="operators">+</div>
		<div class="zero">0</div>
		<div>,</div>
		<div class="operators">=</div>
	</div>
</template>

<script>
export default {

  name: 'keyboard',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
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
		background-color: lightgrey;
		padding: 15px;
	}

	div.operators {
		background-color: orange;
	}

	.zero {
		grid-column-start: 1;
		grid-column-end: 3;
	}
</style>