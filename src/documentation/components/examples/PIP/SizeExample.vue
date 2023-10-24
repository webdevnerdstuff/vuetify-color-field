<template>
	<VColorField
		v-model="colorA"
		icon-size="x-small"
		pip
		pip-border="none"
		pip-icon="$vuetify"
		pip-slot="prepend"
		:prepend-inner-icon="null"
	/>

	<VColorField
		v-model="colorB"
		icon-size="small"
		pip
		pip-border="none"
		pip-icon="$vuetify"
	/>

	<VColorField
		v-model="colorC"
		icon-size="default"
		pip
		pip-border="none"
		pip-icon="$vuetify"
		pip-slot="append-inner"
		:prepend-inner-icon="null"
	/>

	<VColorField
		v-model="colorD"
		icon-size="large"
		pip
		pip-border="none"
		pip-icon="$vuetify"
		pip-slot="append"
		:prepend-inner-icon="null"
	/>

	<VColorField
		v-model="colorE"
		icon-size="x-large"
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
const colorE = ref(null);

const templateCode = `<template>
  <VColorField
    v-model="colorA"
    icon-size="x-small"
    pip
    pip-border="none"
    pip-icon="$vuetify"
    pip-slot="prepend"
    :prepend-inner-icon="null"
  />

  <VColorField
    v-model="colorB"
    icon-size="small"
    pip
    pip-border="none"
    pip-icon="$vuetify"
  />

  <VColorField
    v-model="colorC"
    icon-size="default"
    pip
    pip-border="none"
    pip-icon="$vuetify"
    pip-slot="append-inner"
    :prepend-inner-icon="null"
  />

  <VColorField
    v-model="colorD"
    icon-size="large"
    pip
    pip-border="none"
    pip-icon="$vuetify"
    pip-slot="append"
    :prepend-inner-icon="null"
  />

  <VColorField
    v-model="colorE"
    icon-size="x-large"
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
  const colorE = ref(null);
\</script\>`;

defineExpose({
	exampleCode: {
		desc: 'Changing the <code class="ic">pip</code> icon size.',
		script: scriptCode,
		template: templateCode,
	}
});
</script>
