import * as React from 'react';
import { useHistory } from 'react-router-dom';

const Compose: React.FC<ComposeProps> = props => {
    const history = useHistory();

    const [ content,setContent] = React.useState<string>('');

    const submitChirp = async (e: ReactDOM.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log({content, userid: 1})
        const res = await fetch('/api/chirps', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content, userid: 1 })
        });
        history.push('/');

    }
    
    return (
		<main className="container">
            <section>
                <div className="col-md-8">
                    <form className="form-group p-3 border border primary rounded">
                        <label htmlFor="username">Username</label>
                        <input className="form-control" type="text"/>
                        <label htmlFor="content">Chirp</label>
                        <textarea value={} onChange={(e => setContent(e.target.value))} rows={8} className="form-control" />
                        <button onClick={submitChirp} className="btn btn-secondary btn-block mx-auto w-50 mt-3"></button>
                    </form>
                </div>
            </section>
		</main>
	 );
	 // };
	 
	}
	
	interface ComposeProps {}

	export default Compose;


