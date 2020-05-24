import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';

const Index = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} />
            </Switch>
        </BrowserRouter>
    );
};

render(<Index />, document.getElementById('root'));

export default Index;
