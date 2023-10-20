<template>
	<VColorPickerField
		v-model="colorA"
		pip
		pip-border="none"
		pip-icon="$vuetify"
		pip-slot="prepend"
		:prepend-inner-icon="null"
	/>

	<VColorPickerField
		v-model="colorB"
		pip
		pip-border="none"
		pip-icon="$vuetify"
	/>

	<VColorPickerField
		v-model="colorC"
		pip
		pip-border="none"
		pip-icon="$vuetify"
		pip-slot="append-inner"
		:prepend-inner-icon="null"
	/>

	<VColorPickerField
		v-model="colorD"
		pip
		pip-border="none"
		pip-icon="$vuetify"
		pip-slot="append"
		:prepend-inner-icon="null"
	/>
</template>

<script setup>
const colorA = ref(null);
const colorB = ref(null);
const colorC = ref(null);
const colorD = ref(null);

const templateCode = `<template>
  <VColorPickerField
    v-model="colorA"
    pip
    pip-border="none"
    pip-icon="$vuetify"
    pip-slot="prepend"
    :prepend-inner-icon="null"
  />

  <VColorPickerField
    v-model="colorB"
    pip
    pip-border="none"
    pip-icon="$vuetify"
  />

  <VColorPickerField
    v-model="colorC"
    pip
    pip-border="none"
    pip-icon="$vuetify"
    pip-slot="append-inner"
    :prepend-inner-icon="null"
  />

  <VColorPickerField
    v-model="colorD"
    pip
    pip-border="none"
    pip-icon="$vuetify"
    pip-slot="append"
    :prepend-inner-icon="null"
  />
</template>
`;

const scriptCode = `\<script setup\>
  const colorA = ref(null);
  const colorB = ref(null);
  const colorC = ref(null);
  const colorD = ref(null);
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'An example changing the <code class="ic">pip</code> icon. If you use a slot other than <code class="ic">prepend-inner-icon</code> you will need to set the <code class="ic">prepend-inner-icon</code> prop to <code class="ic">null</code> or <code class="ic">false</code> to remove the default icon. You will most likely want to set the <code class="ic">pip-border</code> to <class="ic">none</code> as well.',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
