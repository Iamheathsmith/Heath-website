import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle, faProjectDiagram, faCameraRetro } from '@fortawesome/free-solid-svg-icons';

library.add(faInfoCircle, faProjectDiagram, faCameraRetro);

ReactDom.render(<App />, document.getElementById('root'));
