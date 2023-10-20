<template>
	<VColorField
		v-model="colorA"
		card-offset-x="-36"
	/>

	<VColorField
		v-model="colorB"
		card-offset-y="25"
	/>
</template>

<script setup>
const colorA = ref(null);
const colorB = ref(null);

const templateCode = `<template>
  <VColorField
    v-model="colorA"
    card-offset-x="-36"
  />

  <VColorField
    v-model="colorB"
    card-offset-y="25"
  />
</template>
`;

const scriptCode = `\<script setup\>
  const colorA = ref(null);
  const colorB = ref(null);
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'Using the <code class="ic">card-offset-x</code> & <code class="ic">card-offset-y</code> prop to offset the color picker card.',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
