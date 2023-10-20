<template>
	<VColorField v-model="color" />
</template>

<script setup>
const color = ref(null);

const templateCode = `<template>
  <VColorField v-model="color" />
</template>
`;

const scriptCode = `\<script setup\>
  const color = ref(null);
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'A simple example of a color picker field using the <code class="ic">VTextField</code> component. Clicking on the icon will open the color picker.',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
