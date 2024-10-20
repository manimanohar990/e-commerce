import React from 'react';
import './slider.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

export const Slider = ()=>{
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    
    const items = [
        <div className='con-size'><img className="item" src='https://s3-alpha-sig.figma.com/img/1708/c339/362237370ea139219155cf9fca2448d3?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qOfBgpd9SdsbpVrN0LI3IT5bMV-rQDcjcD~6xv-PGI3HQ-z1SlJOGY6sCK2eSVMEgLB~JEOWFyA-eZPoULd-HfJCJ9NH06HJyk07nKSk8YqswrM91QFC5sBu09eiJikco~Cz9XH5pryCnorJ4qyY0BbUW2XZMGOpehUePpzpv4rd8NoonGchv0gqyMNmSHdSfUV5pobVkd3wOYhyuHyU~TlTXkXEqeEC0AWUg4TKMy~YYdrPP4dCdMODHxFVfPAB~zzmOWC-7HOmun~xC~uXlIgHJwEUN-j9IJ7YLPpbC6F6hjJHm9gglfaw1KI~uOeW5bcduOxMUxbxtWRPkgYRWg__' alt='Load'/>
        <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum </p>
        </div>,

        <div className='con-size'><img className="item" src='https://s3-alpha-sig.figma.com/img/5267/1e62/8375cef653c6b9ae388a7f2dda4ba454?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=poRgM6pbkBqdnWsbKmfeS4UcxZkAhi2YMDifsURB-xTIfZcY-QDKhmleBzmNDh3fkjjWEfCtge~Lcr5s7BgkVPU00EZzrOgDP4AwiJpQZhLvRByGDVoDVufqT0lzgOyN9eUHZhC3wUrnOTQCDUpdFO8J0Af~FYl4246Uu-bgheR2kdA2NqkfxOmQs15LNeEsa177Q6uzc4CeEsxTi7Krr-H2F5RcU1fIufPCkvfJasBqRujHQeLQV-7OsXT9tMvK98cPscZcnrQdbTLa0XL4WQrWlaRMbK6tRpyIB7nuxyRTAUhRzeXbkOfSHHhy-wYWGJCwKeQNfn2WzbWKMJxbQA__' alt='Load'/>
            <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum</p>
        </div>,

        <div className='con-size'><img className="item" src='https://s3-alpha-sig.figma.com/img/84ed/e8e9/935a62fb31df9354ded9299559307ae6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EkUcvN372cksGIWPwvW5owktp9ytkBrXYwKGswGcGcKTz1P5vCJ1AwDg6XEfLcuYGcNx3T1xbxpj2h0vVt2Jx~J8CqBxk5HOJ8WQGo9GtH-JwoEbw4G2si9EZQgMu95KzZzjsFsbph4Xeq5w6POOx4eZvkuWwjZmTCujut12EViAzhpxyYT8qSiL~eM0VMPp53TxbY47bk1EYpFVi2f~sc8BuMIJ9pnlkysxhWaYblRHulmELZCJcaUDO1QVDUYR6BdzNpmAmCw9xLufhKnsqamAgmGkfC0XfTfN3mxoWd6fZJKhiubj5FVj70lJp1uSwL4zggWiChoZOHe2doVWEA__' alt='Load'/>
        <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum</p>
        </div>,
        
        <div className='con-size'><img className="item" src='https://s3-alpha-sig.figma.com/img/c120/4e2d/7eca96d5008198d2181b991de6f19034?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A52FjCuUbWlwRRJ5kOMbW3y-66Ka0TLI~iK-4nDzoZjb6qA1ukUSJEt~m8qs64IXzwUwhN6sjYdXNt3MJfz4a2XhqqyikLsjbZfS5Mlmxedhs7rxSrK1BwgurAatuEB33Szqkf0UdNyvZF8iiAT1C1eNJl2wN6mjmARVS8GLQXroxtZQe9gRVvHH1K85O8n6B~qNfbMdm0-83H3gnp4Lr~MjstT6BveBn4Htrcw0XdYY3mlPvdPvjNFE~nDn8NEbbOSZEr9dxVZV5m5mp6qhV-ejNZlw~NBSg0NFw8U-jhgBatLZUVqY5jRXaOdmKgnMrKhH9UHRCqBi5RdRcjNWcA__' alt='Load'/>
        <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum</p>
        </div>,
        <div className='con-size'><img className="item" src='https://res.cloudinary.com/dmgvoecio/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1729338215/GettyImages-1494628683-c0c2b1897bee4a4eaf21e851d36c2f02_vcoj1f.jpg' alt='Load'/>
        <p>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum</p>
        </div>,
        <div className='con-size'><img className="item" src='https://res.cloudinary.com/dmgvoecio/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1729338215/What-Are-Plants_x8kisp.jpg' alt='Load'/>
        <p className='para'>Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum</p>
        </div>,
        
    ];
    return <div>

        <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
            /> 
    </div>
};
