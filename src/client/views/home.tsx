import * as React from 'react';

const Home: React.FC<HomeProps> = props => {
    
    return (
		<main className="container">
            <section>
                <div className="col-md-6">
			        <h1 className="text-center">Home View!</h1>
                </div>
            </section>
		</main>
	 );
	 // };
	 
	}
	
	interface HomeProps {}

	export default Home;