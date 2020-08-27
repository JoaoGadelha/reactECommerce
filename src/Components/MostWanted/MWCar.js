import React, {useEffect} from 'react'
import MWCarItem from './MWCarItem'
import img1 from '../../img/MWCar/img1'

const MWCar = () => {

    let mwcar;
    let walkDist = 0;
    let mwcarItem;
    let counter;
    useEffect(() => {
        counter = 0;
        mwcarItem = document.getElementsByClassName('mwcar-item invisible');
        mwcarItem[0].className = 'mwcar-item';
        walkDist -= document.getElementsByClassName('mwcar-item')[0].offsetWidth;
    },[]);

    const nextFun = () => {
        console.log(walkDist);
        mwcar = document.getElementsByClassName('mwcar-slider');
        mwcar[0].style.transform = 'translateX('+walkDist+'px)';
        walkDist -= document.getElementsByClassName('mwcar-item')[0].offsetWidth;
        document.getElementsByClassName('mwcar-item')[counter+1].className = 'mwcar-item';
    }

    const transEnd = () => {
        mwcarItem = document.getElementsByClassName('mwcar-item');
        for ( let i = 0; i < mwcarItem.length; i++) {
            if(i!==counter) {
                mwcarItem[counter].className = 'mwcar-item invisible';
            }
        }
        counter += 1;
    }

    return (
        <div className='mwcar-container'>
            <div className='mwcar-slider' onTransitionEnd={transEnd}>
                <MWCarItem img={img1} title='Smartphone LG K40S Preto 32GB, Tela 6,1" HD+ FullVision, Inteligência Artificial, Câmera Traseira Dupla, Selfie de 13MP e Processador Octa-Core' oldPrice='$ 999.00' price='$ 849.00'/>
                <MWCarItem img={img1} title='Smartphone LG K40S Preto 32GB, Tela 6,1" HD+ FullVision, Inteligência Artificial, Câmera Traseira Dupla, Selfie de 13MP e Processador Octa-Core' oldPrice='$ 999.00' price='$ 849.00'/>
                <MWCarItem img={img1} title='Smartphone LG K40S Preto 32GB, Tela 6,1" HD+ FullVision, Inteligência Artificial, Câmera Traseira Dupla, Selfie de 13MP e Processador Octa-Core' oldPrice='$ 999.00' price='$ 849.00'/>
                <MWCarItem img={img1} title='Smartphone LG K40S Preto 32GB, Tela 6,1" HD+ FullVision, Inteligência Artificial, Câmera Traseira Dupla, Selfie de 13MP e Processador Octa-Core' oldPrice='$ 999.00' price='$ 849.00'/>
                <MWCarItem img={img1} title='Smartphone LG K40S Preto 32GB, Tela 6,1" HD+ FullVision, Inteligência Artificial, Câmera Traseira Dupla, Selfie de 13MP e Processador Octa-Core' oldPrice='$ 999.00' price='$ 849.00'/>
                <MWCarItem img={img1} title='Smartphone LG K40S Preto 32GB, Tela 6,1" HD+ FullVision, Inteligência Artificial, Câmera Traseira Dupla, Selfie de 13MP e Processador Octa-Core' oldPrice='$ 999.00' price='$ 849.00'/>
                <MWCarItem img={img1} title='Smartphone LG K40S Preto 32GB, Tela 6,1" HD+ FullVision, Inteligência Artificial, Câmera Traseira Dupla, Selfie de 13MP e Processador Octa-Core' oldPrice='$ 999.00' price='$ 849.00'/>
                <MWCarItem img={img1} title='Smartphone LG K40S Preto 32GB, Tela 6,1" HD+ FullVision, Inteligência Artificial, Câmera Traseira Dupla, Selfie de 13MP e Processador Octa-Core' oldPrice='$ 999.00' price='$ 849.00'/>
                
            </div>
            <button>PREV</button>
            <button onClick={nextFun}>NEXT</button>
        </div>
    )
}

export default MWCar