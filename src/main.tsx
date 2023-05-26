import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import { register } from 'swiper/element';
// register Swiper custom elements
register();
export const client = new ApolloClient({

        uri: 'https://lsl-test.bart-group.com/back/graphql',
        cache: new InMemoryCache()
    })
;

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
);
