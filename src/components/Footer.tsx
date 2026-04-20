import { Feedback, Menu, Logo } from "../components";

export const Footer = () => {
  return (
    <>
      <Feedback />
      <footer className="footer">
        <div className="container">
          <div className="top">
            <Logo />
            <div className="part1">
              <address>
                <span className="icon">
                  <img src="img/icons/footer_loc.png" alt="" />
                </span>
                <span className="content"> г. Калуга, ул. Московская 326 </span>
              </address>
              <a href="mailto:info@akmarket40.ru">
                <span className="icon">
                  <img src="img/icons/footer_mail.png" alt="" />
                </span>
                <span className="content"> info@akmarket40.ru </span>
              </a>
            </div>
            <div className="part2">
              <div className="tels">
                <span className="icon">
                  <img src="img/icons/footer_tel.png" alt="" />
                </span>
                <a href="tel:">+7 (4842) 40-15-99</a>
                <b className="line">|</b>
                <a href="tel:">+7 920 885 01 34</a>
              </div>
              <div className="work_schedule">
                <span className="icon">
                  <img src="img/icons/footer_schedule.png" alt="" />
                </span>
                <span> пн-пт. с 8-00 до 19-00 </span>
                <b className="line">|</b>
                <span> сб-вс. с 10-00 до 15-00 </span>
              </div>
            </div>
          </div>

          <nav className="main_nav">
            <Menu />
          </nav>

          <div className="bottom">
            <div className="copyright">
              <span> © 2025 ООО "USED-CARS" | Все права защищены </span>
            </div>
            <div className="links">
              <a href="/" className="privacy">
                Политика обработки персональных данных
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
