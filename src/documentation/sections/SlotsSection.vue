<template>
	<v-row>
		<v-col
			id="slots"
			cols="12"
		>
			<h2 :class="classes.h2">
				<a
					:class="classes.headerA"
					href="#slots"
				>#</a>
				Slots
			</h2>

			The default slot used for the <code class="ic">VColorField</code> is the <code class="ic">prepend-inner</code>
			slot. The <code class="ic">VTextField</code> slots are available. For info on the specific slots, please refer to
			the <a
				:href="store.links.vuetify"
				target="_blank"
			>Vuetify</a> documentation. There is an additional prop passed to the <code class="ic">prepend</code>, <code
				class="ic"
			>prepend-inner</code>, <code class="ic">append-inner</code>, and <code class="ic">append</code> slots called <code
				class="ic"
			>toggleColorPicker</code> that can be used to toggle the color picker.
		</v-col>

		<v-col cols="12">
			<v-card>
				<v-table
					class="slots-table"
					hide-default-footer
				>
					<thead>
						<tr>
							<th width="20%">Name</th>
							<th>Description</th>
						</tr>
					</thead>
					<tbody>
						<!-- display.append slot -->
						<tr
							id="slots-prepend-inner"
							:class="rowClass"
						>
							<td>
								<span class="name-item text-mono ml-n2">
									<span class="text-primary">#</span>
									<a
										class="text-primary"
										:class="classes.appLink"
										href="#slots-display-default"
									>prepend-inner</a>
								</span>
							</td>
							<td>
								Slot that is prepended to the input.
							</td>
						</tr>
						<tr>
							<td colspan="2">
								<VCodeBlock
									:code="displaySlotsCode"
									:highlightjs="codeBlockSettings.plugin === 'highlightjs'"
									lang="typescript"
									:prismjs="codeBlockSettings.plugin === 'prismjs'"
									:theme="codeBlockSettings.theme"
								/>
							</td>
						</tr>
					</tbody>
				</v-table>
			</v-card>
		</v-col>
	</v-row>
</template>

<script setup>
import { inject } from 'vue';
import { useCoreStore } from '@/stores/index';

const props = defineProps({
	codeBlockOptions: {
		required: true,
		type: Object,
	},
});

const codeBlockSettings = computed(() => props.codeBlockOptions);
const store = useCoreStore();
const classes = inject('classes');
const theme = useTheme();
const isDark = ref(true);


watch(() => theme.global.current.value.dark, (val) => {
	isDark.value = val;
});

const rowClass = computed(() => {
	return isDark.value ? 'bg-grey-darken-3' : 'bg-grey-lighten-3';
});

const displaySlotsCode = `{
  isActive: Ref<boolean>
  isFocused: Ref<boolean>
  controlRef: Ref<HTMLElement>
  focus: () => void
  blur: () => void
  toggleColorPicker: () => void
}`;


</script>

<style lang="scss">
.slots-table {
	td {
		line-height: 2rem !important;

		> div {
			padding: 0.5rem 0 !important;
		}
	}
}
</style>
