import { isValidElement, cloneElement } from 'react';

import { useFeedbackFish } from './useSlooviFeedback';

export const SlooviFeedback = props => {
	useFeedbackFish(props.projectId, props.clientId, props.userId);

	if (!props.children) return null;

	const childrenProps = {
		'data-sloovi-feedback': true,
	};

	if (isValidElement(props.children)) {
		return cloneElement(props.children, childrenProps);
	}

	if (typeof props.children === 'function') {
		return props.children(childrenProps);
	}

	return null;
};
