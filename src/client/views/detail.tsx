import * as React from 'react';
import { useParams } from 'react- router-dom';

const Details: React.FC<DetailsProps> = props => {
    
    return (
		<main className="container">
            <section>
                <div className="col-md-6">
			        <h1 className="text-center">Details View!</h1>
                </div>
            </section>
		</main>
	 );
	 // };
	 
	}
	
	interface DetailsProps {}

	export default Details;