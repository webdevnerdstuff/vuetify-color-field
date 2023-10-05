import { CSSProperties } from 'vue';
import {
	UseContainerStyle
} from '@/types';


// ------------------------------------------------ Component Container //
export const useContainerStyle: UseContainerStyle = (options) => {
	const { displayType } = options;

	const styles = {
		display: displayType,
	};


	return styles as CSSProperties;
};
