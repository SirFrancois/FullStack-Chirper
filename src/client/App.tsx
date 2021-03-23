import * as React from 'react';
import Compose from './views/compose';
import Home from './views/home';
//import { useState, useEffect } from 'react';
//import { Template } from 'webpack';

const Template: React.FC<TemplateProps> = props => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Home/>
				</Route>

				<Route exact path="/details/:chirpid">
					<Details/>	
				</Route>
				<Route> exact path="/Admin/:chirpid">
					<Admin />

				</Route><Route exact path="/compose">
					</Compose>
				</Route>
			</Switch>
		</BrowserRouter>
);
// };

}

	
	/* HOOK REACT EXAMPLE */
	// const App = (props: AppProps) => {
		// const [greeting, setGreeting] = useState<string>('');
		
		// useEffect(() => {
			// async function getGreeting() {
				// 		try {
					// 			const res = await fetch('/api/hello');
					// 			const greeting = await res.json();
					// 			setGreeting(greeting);
					// 		} catch (error) {
						// 			console.log(error);
						// 		}
						// 	}
						// 	getGreeting();
						// }, []);
						

	interface TemplateProps {}

	export default Template;


//interface AppProps {}

/* CLASS REACT EXAMPLE */
// class App extends React.Component<IAppProps, IAppState> {
// 	constructor(props: IAppProps) {
// 		super(props);
// 		this.state = {
// 			name: null
// 		};
// 	}

// 	async componentDidMount() {
// 		try {
// 			let r = await fetch('/api/hello');
// 			let name = await r.json();
// 			this.setState({ name });
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}

// 	render() {
// 		return (
// 			<main className="container my-5">
// 				<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
// 			</main>
// 		);
// 	}
// }

// export interface IAppProps {}

// export interface IAppState {
// 	name: string;
// }

// export default App;
