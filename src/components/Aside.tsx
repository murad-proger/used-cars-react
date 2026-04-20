import React from 'react'

type AsideProps = {
    children?: React.ReactNode;
}

export const Aside = ({children}:AsideProps) => {
  return (
    <aside>
        {children}
        <div className="ad_unit">
            <div className="item unit1" style={{backgroundImage: "url('img/ad_unit.png')"}}>
                <h3 className="title">
                    Подпишитесь на нашу E-mail рассылку
                </h3>
                <span>И получите</span>
                <b>бесплатную доставку</b>
                <span>на первые 3 заказа</span>
                <a href="/" className="subscribe">
                    Подписаться
                    <img src="img/icons/palne.png" alt='' />
                </a>
            </div>
            <div className="item unit2">
                <h3 className="title">
                    Будьте вкурсе наших акций и новостей
                </h3>
                <a href="/" className="subscribe">
                    Подписаться
                    <img src="img/icons/palne.png" alt='' />
                </a>
            </div>
        </div>
    </aside>
  )
}
