import { CSSProperties } from 'vue';
import {
	UsePipStyle,
} from '@/types';


// ------------------------------------------------ Pip //
export const usePipStyles: UsePipStyle = (options) => {
	const { pipBorder, pipBorderRadius } = options;

	const styles = {
		backgroundColor: 'rgb(var(--v-theme-on-surface))',
		border: pipBorder,
		borderRadius: pipBorderRadius,
		overflow: 'hidden',
	};

	return styles as CSSProperties;
};
