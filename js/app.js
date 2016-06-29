
'use strict';

var React = require('React');
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Navigation from './layouts/Navigation';

const {serverURL} = require('./env');
class App extends React.Component {
	constructor() {
      super();
      this.state = {
        isLoading: true,
        store: configureStore(() => this.setState({isLoading: false})),
      };
}
	render() {
		if (this.state.isLoading) {
			return null;
		}
		return (
			<Provider store={this.state.store}>
				<Navigation/>
			</Provider>
		);
	}
}


export default App;
