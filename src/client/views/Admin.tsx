import * as React from 'react';
import { useParams } from 'react-router';
import type { IChirp } from '../utils/types';

const Admin: React.FC<AdminProps> = props => {
    const { chirpid } = useParams();
    const history = useHistory();

    const [chirp, setChirp] = React.useState<IChirp>(null);


React.useEffect(() => {
    (async () => {
        const res = await fetch(`/api/chirps/${chirpid}`);
        if (res.ok)  {
            const chirp = await res.json();
            setChirp(chirp);
        }
        
    })
})    
    return (
		<main className="container">
            <section>
                <div className="col-md-6">
			        <h1 className="text-center">Admin View!</h1>
                </div>
            </section>
		</main>
	 );
	 // };
	 
	}
	
	interface AdminProps {}

	export default Admin;