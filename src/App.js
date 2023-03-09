import 'bulma/css/bulma.css';
import { ProfileCard } from "./components/ProfileCard";
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {   

    return(
        <div>
            <section className='hero is-primary'>
                <div className='hero-body'>
                    <p className='title'>Personal digital assistant</p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard
                                title="Alexa" 
                                handle="@aleksa" 
                                image={AlexaImage}
                                description="Aleksa is created by Amazon and helps you buy things."
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Cortana" 
                                handle="@cortana" 
                                image={CortanaImage}
                                description="Cortana was made by Microsoft in 2014. It got it's name after video game Halo where character named Cortana is also digital assistant. Preety coll stuff! "
                            />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                                title="Siri" 
                                handle="@siri" 
                                image={SiriImage} 
                                description="Siri was made by Apple. Who use this anymore?"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
