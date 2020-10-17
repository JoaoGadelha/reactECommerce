import React, {useState} from 'react'
import './AppAd.css'

const AppAd  = () => {

    let [visibleAd, setVisibleAd] = useState(true);

      const closeAppAd = () => {
        setVisibleAd(false);
      }

    return (
        <>{visibleAd && <div className='app-ad-mobile' >
                <div>
                    <span>Download now our new app and enjoy exclusive promotions!</span>
                    <button>Download our app</button>
                </div>
                <img src='https://m.casasbahia.com.br/assets/images/icon-fechar.svg' onClick={closeAppAd} className='closingX'></img>
            </div>}</>
    )

}

export default AppAd