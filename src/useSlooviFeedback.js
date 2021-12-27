import { useEffect } from 'react';

export const useFeedbackFish = (projectId, clientId, userId) => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = `https://stage.feedback.sloovi.com/sloovi-feedback.js?project_id=${projectId}&client_id=${clientId}&user_id=${userId}`;
		script.defer = true;

		const onScriptError = () => script.remove();
		script.addEventListener('error', onScriptError);

		document.body.appendChild(script);
	}, []);
};
