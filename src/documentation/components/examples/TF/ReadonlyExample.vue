<template>
	<VColorField
		v-model="color"
		:readonly="true"
	/>
</template>

<script setup>
const color = ref('#ff0000');

const templateCode = `<template>
  <VColorField
	  v-model="color"
	  :readonly="true"
  />
</template>
`;

const scriptCode = `\<script setup\>
  const color = ref('#ff0000');
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'Using the <code class="ic">readonly</code> prop will put the <code class="ic">VTextField</code> and <code class="ic">VColorPicker</code> components into readonly mode. Clicking on the field will still open the color picker.',
		name: 'Readonly Prop',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
