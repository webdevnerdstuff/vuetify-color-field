<template>
	<v-row>

		<v-col
			class="offset-4 mt-15 pt-15"
			cols="4"
		>
			<v-card elevation="5">
				<v-container>
					<VColorField
						v-model="color"
						:append-icon="VColorFieldProps.appendIcon"
						:append-inner-icon="VColorFieldProps.appendInnerIcon"
						:cardFieldWidth="VColorFieldProps.cardFieldWidth"
						:cardOffsetX="VColorFieldProps.cardOffsetX"
						:cardOffsetY="VColorFieldProps.cardOffsetY"
						:cardPadding="VColorFieldProps.cardPadding"
						:cardProps="VColorFieldProps.cardProps"
						:clearable="VColorFieldProps.clearable"
						:color="VColorFieldProps.color"
						:color-picker-props="VColorFieldProps.colorPickerProps"
						:density="VColorFieldProps.density"
						:hint="VColorFieldProps.hint"
						:hint-align="VColorFieldProps.hintAlign"
						:icon-hover-color="VColorFieldProps.iconHoverColor"
						:iconSize="VColorFieldProps.iconSize"
						:label="VColorFieldProps.label"
						:messages="VColorFieldProps.messages"
						:name="VColorFieldProps.name"
						:open="VColorFieldProps.open"
						:persistent-hint="VColorFieldProps.persistentHint"
						:persistent-placeholder="VColorFieldProps.persistentPlaceholder"
						:pip="VColorFieldProps.pip"
						:pipBorder="VColorFieldProps.pipBorder"
						:pipBorderRadius="VColorFieldProps.pipBorderRadius"
						:pipHeight="VColorFieldProps.pipHeight"
						:pipIcon="VColorFieldProps.pipIcon"
						:pipRadius="VColorFieldProps.pipRadius"
						:pipSlot="VColorFieldProps.pipSlot"
						:placeholder="VColorFieldProps.placeholder"
						:prepend-icon="VColorFieldProps.prependIcon"
						:prepend-inner-icon="VColorFieldProps.prependInnerIcon"
						:readonly="VColorFieldProps.readonly"
						:readonlyInput="VColorFieldProps.readonlyInput"
						:required="VColorFieldProps.required"
						:theme="VColorFieldProps.theme"
						:variant="VColorFieldProps.variant"
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

					</VColorField>
				</v-container>
			</v-card>
		</v-col>
	</v-row>
</template>

<script setup>
const color = ref(null);

const VColorFieldProps = ref({
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
	},
	clearable: true,
	color: '',
	colorPickerProps: {
		// mode: 'hex',
		// modes: ['hex'],
		// showSwatches: true,
	},
	density: undefined,
	hint: undefined,
	hintAlign: undefined,
	iconHoverColor: undefined,
	iconSize: 'default',
	label: undefined,
	messages: undefined,
	// messages: 'This is a string message',
	// messages: ['This is a message', 'This is another message'],
	name: 'color',
	open: 'bottom left',
	persistentHint: true,
	persistentPlaceholder: false,
	pip: false,
	// pipBorder: 'none',
	// pipBorderRadius: '50%',
	pipIcon: undefined,
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
