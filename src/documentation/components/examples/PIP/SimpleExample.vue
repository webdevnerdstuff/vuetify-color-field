<template>
	<VColorField
		v-model="color"
		pip
	/>
</template>

<script setup>
const color = ref(null);

const templateCode = `<template>
  <VColorField
    v-model="color"
    pip
  />
</template>
`;

const scriptCode = `\<script setup\>
  const color = ref(null);
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'A simple example of a color picker field using the <code class="ic">pip</code> prop.',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
