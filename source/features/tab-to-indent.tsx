import {eventHandler} from 'indent-textarea';

import features from '.';
import onCommentFieldKeydown from '../github-events/on-comment-field-keydown';

function init(): void {
	onCommentFieldKeydown(eventHandler);
}

features.add({
	id: __filebasename,
	description: 'Enables <kbd>tab</kbd> and <kbd>shift+tab</kbd> for indentation in comment fields.',
	screenshot: 'https://user-images.githubusercontent.com/1402241/33802977-beb8497c-ddbf-11e7-899c-698d89298de4.gif'
}, {
	waitForDomReady: false,
	repeatOnAjax: false,
	init
});
