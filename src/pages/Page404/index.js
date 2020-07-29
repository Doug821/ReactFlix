import React from 'react';
import PageDefault from '../../components/PageDefault';
import './index.css';

function page404(){
    return(
        <>
            <PageDefault>
                <div className="page404">
                    <h1> 404 - Page Not Found</h1>
                    <p>Acho que não é o que procura, mas temos Flappy Bird</p>
                    <iframe 
                        src="https://mariosouto.com/flappy-bird-devsoutinho"
                        title = "FlappyBirdGame"
                        scrolling="no"
                        style={{
                            width: 340,
                            height: 540,
                            borderWidth: 0,
                        }} />
                </div>
            </PageDefault>
        </>
    )
}

export default page404;