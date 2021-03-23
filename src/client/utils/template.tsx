import * as React from 'react';

const Template: React.FC<TemplateProps> = props => {
    
    return (
		<main className="container">
            <section>
                <div className="col-md-6">
			        <h1 className="text-center">Template View!</h1>
                </div>
            </section>
		</main>
	 );
	
	 
	}
	
	interface templateProps {}

	export default Template;