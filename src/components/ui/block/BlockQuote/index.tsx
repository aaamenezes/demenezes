import Author from './Author';
import Quote from './Quote';
import Root from './Root';

const BlockQuote = Object.assign(Root, { Quote, Author });

export default BlockQuote;
