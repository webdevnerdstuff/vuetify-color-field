<template>
	<VColorField
		v-model="colorA"
		icon-hover-color="primary"
	/>

	<VColorField
		v-model="colorB"
		color="primary"
	/>

	<VColorField
		v-model="colorC"
		color="primary"
		icon-hover-color="secondary"
	/>
</template>

<script setup>
const colorA = ref(null);
const colorB = ref(null);
const colorC = ref(null);

const templateCode = `<template>
  <VColorField
	  v-model="colorA"
	  icon-hover-color="primary"
  />

  <VColorField
    v-model="colorB"
    color="primary"
  />

  <VColorField
    v-model="colorC"
    color="primary"
    icon-hover-color="secondary"
  />
</template>
`;

const scriptCode = `\<script setup\>
  const colorA = ref(null);
  const colorB = ref(null);
  const colorC = ref(null);
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'Using the <code class="ic">icon-hover-color</code> prop. If you set the <code class="ic">color</code> prop the both the text field and icon will use that color. If you set the <code class="ic">icon-hover-color</code> prop the icon will use that color when the mouse hovers over it.',
		name: 'Icon Hover Color Prop',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
