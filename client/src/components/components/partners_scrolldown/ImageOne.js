import { Parallax } from 'react-parallax';
import wallpaper from './img/test_2.jpg'
const ImageOne = () => (
    <Parallax className='image' blur={0} bgImage={wallpaper} strength={300} bgImageStyle={{minHeight:"100vh"}}>
        <div className='content ct-right'>
            <div className='text-div'>
                <h3 className="img-title">TEDx, molto più che un evento.</h3>
                <p className="img-txt">Realizzare un TEDx è un lavoro di squadra. L’organizzazione avviene in sinergia con i nostri partner.</p>
                <p className="img-link"><a href="https://www.tedxsapienzau.com/" target="_blank" rel="noopener noreferrer">Scopri di più</a></p>
            </div>
        </div>
    </Parallax>
);

export default ImageOne