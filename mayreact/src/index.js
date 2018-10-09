import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


class UserName extends React.Component {
    render() {
        return <div>name: {this.props.name}</div>;
    }
}

class User extends React.Component {
    render() {
        return <div>
            <h1>City: {this.props.user.city}</h1>
            <UserName name={this.props.user.name} />
        </div>;
    }
}

var user = { name: 'John', city: 'San Francisco' };
React.render(<User user={user} />, mountNode);
