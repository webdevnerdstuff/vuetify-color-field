<template>
	<v-row>

		<v-col
			class="offset-4 mt-15 pt-15"
			cols="4"
		>
			<v-card elevation="5">
				<v-container>
					<VColorPickerField
						v-model="color"
						:append-icon="VColorPickerFieldProps.appendIcon"
						:append-inner-icon="VColorPickerFieldProps.appendInnerIcon"
						:card-props="VColorPickerFieldProps.cardProps"
						:cardFieldWidth="VColorPickerFieldProps.cardFieldWidth"
						:cardOffsetX="VColorPickerFieldProps.cardOffsetX"
						:cardOffsetY="VColorPickerFieldProps.cardOffsetY"
						:cardPadding="VColorPickerFieldProps.cardPadding"
						:clearable="VColorPickerFieldProps.clearable"
						:color="VColorPickerFieldProps.color"
						:color-picker-props="VColorPickerFieldProps.colorPickerProps"
						:density="VColorPickerFieldProps.density"
						:hint="VColorPickerFieldProps.hint"
						:hint-align="VColorPickerFieldProps.hintAlign"
						:icon-hover-color="VColorPickerFieldProps.iconHoverColor"
						:label="VColorPickerFieldProps.label"
						:messages="VColorPickerFieldProps.messages"
						:name="VColorPickerFieldProps.name"
						:open="VColorPickerFieldProps.open"
						:persistent-hint="VColorPickerFieldProps.persistentHint"
						:persistent-placeholder="VColorPickerFieldProps.persistentPlaceholder"
						:pip="VColorPickerFieldProps.pip"
						:pipBorder="VColorPickerFieldProps.pipBorder"
						:pipBorderRadius="VColorPickerFieldProps.pipBorderRadius"
						:pipHeight="VColorPickerFieldProps.pipHeight"
						:pipIcon="VColorPickerFieldProps.pipIcon"
						:pipRadius="VColorPickerFieldProps.pipRadius"
						:pipSize="VColorPickerFieldProps.pipSize"
						:pipSlot="VColorPickerFieldProps.pipSlot"
						:placeholder="VColorPickerFieldProps.placeholder"
						:prepend-icon="VColorPickerFieldProps.prependIcon"
						:prependInnerIcon="VColorPickerFieldProps.prependInnerIcon"
						:readonly="VColorPickerFieldProps.readonly"
						:readonly-input="VColorPickerFieldProps.readonlyInput"
						:required="VColorPickerFieldProps.required"
						:theme="VColorPickerFieldProps.theme"
						:variant="VColorPickerFieldProps.variant"
					>

						<!-- <template #prepend="{ toggleColorPicker }">
							<v-icon
								icon="$vuetify"
								@click="toggleColorPicker"
							/>
						</template> -->

						<!-- <template #prepend-inner="{ toggleColorPicker }">
							<v-icon
								icon="$vuetify"
								@click="toggleColorPicker"
							/>
						</template> -->

						<!-- <template #append-inner="{ toggleColorPicker }">
							<v-icon
								icon="$vuetify"
								@click="toggleColorPicker"
							/>
						</template> -->

						<!-- <template #append="{ toggleColorPicker }">
							<v-icon
								icon="$vuetify"
								@click="toggleColorPicker"
							/>
						</template> -->


						<!-- <template #label>
							Color
						</template> -->

					</VColorPickerField>
				</v-container>
			</v-card>
		</v-col>
	</v-row>
</template>

<script setup>
const color = ref(null);

const VColorPickerFieldProps = ref({
	appendIcon: undefined,
	appendInnerIcon: undefined,
	cardFieldWidth: false,
	cardOffsetX: 0,
	cardOffsetY: 5,
	cardPadding: 4,
	cardProps: {
		border: false,
		color: '',
		elevation: 5,
		loading: false,
		tag: 'div',
		// theme: 'light',
		// verticalOffset: 28,
	},
	clearable: true,
	color: '',
	colorPickerProps: {
		// disabled: true,
		// mode: 'hex',
		// modes: ['hex'],
		// showSwatches: true,
	},
	density: undefined,
	hint: undefined,
	hintAlign: undefined,
	iconHoverColor: undefined,
	label: undefined,
	messages: undefined,
	// messages: 'This is a string message',
	// messages: ['This is a message', 'This is another message'],
	name: 'color',
	open: 'bottom left',
	persistentHint: true,
	persistentPlaceholder: false,
	pip: true,
	pipBorder: undefined,
	// pipBorderRadius: '50%',
	// pipIcon: 'mdi:mdi-circle',
	pipSize: 'default',
	pipSlot: undefined,
	placeholder: 'Select Color',
	prependIcon: undefined,
	prependInnerIcon: undefined,
	readonly: undefined,
	readonlyInput: undefined,
	required: false,
	theme: 'dark',
	variant: 'filled',
});


</script>

<style lang="scss" scoped>
</style>
