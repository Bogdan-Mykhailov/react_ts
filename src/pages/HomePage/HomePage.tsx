import React from 'react';
import './HomePage.scss';
import { Container, Sidebar } from '../../components';

export const HomePage = () => {
  return (
    <div className="home">
      <Sidebar />

      <Container>
        <div className="home__content">
          <div style={{ height: '130px' }}>
            <a className="home__main-title" href="https://git.io/typing-svg">
              <img
                src="https://readme-typing-svg.demolab.com?
          font=Fira+Code&weight=700&size=55&pause=1000&color=38DCAE&
          repeat=true&width=700&height=130&lines=Inventory"
                alt="Typing SVG"
              />
            </a>
          </div>

          <h2 className="home__subtitle">Загальний опис проекту</h2>

          <h2 className="home__section-title">
            Inventory: Платформа для ведення обліку продукції
          </h2>

          <p className="home__projet-desc">
            <strong>Inventory</strong>
            {' '}
            - це веб-платформа, розроблена для зручного
            та ефективного ведення обліку надходження нової продукції.
            Проєкт надає користувачам інструменти, що дозволяють сортувати
            продукцію за типом,
            створювати групи та додавати продукцію до цих груп.
            Інвентаризація допомагає підприємствам та організаціям
            ефективно вести облік та контроль над новими продуктами.
          </p>

          <img
            style={{ width: '100%' }}
            alt="Screenshot 2023-06-18 at 10 16 32"
            src={'https://github.com/Bogdan-Mykhailov/test/assets/'
              + '91826635/c7c03a87-9c8c-4cb7-8698-6fec2b289ec1'}
          />

          <h2 className="home__section-title">Особливості проєкту</h2>

          <ul className="home__list list">
            <li className="list__list-item">
              <strong>Сортування за типом продукції: </strong>
              Користувачі можуть легко сортувати продукцію за різними типами,
              що спрощує пошук та категоризацію.
              <img
                style={{ width: '100%' }}
                alt="Screenshot 2023-06-18 at 10 42 20"
                src={'https://github.com/Bogdan-Mykhailov/test/'
                  + 'assets/91826635/8815f8a9-7a0b-4752-b864-770850efac58'}
              />
            </li>
            <li className="list__list-item">
              <strong>Створення груп: </strong>
              Користувачі можуть створювати групи для організації продукції
              за певними критеріями або характеристиками.
            </li>
            <li className="list__list-item">
              <strong>Додавання продукції до груп: </strong>
              Користувачі можуть легко додавати нову продукцію
              до відповідних груп,що допомагає підтримувати
              структурованість та організованість обліку.
              <img
                style={{ width: '100%' }}
                alt="Screenshot 2023-06-18 at 10 43 43"
                src={'https://github.com/Bogdan-Mykhailov/test/'
                  + 'assets/91826635/8d83ed4b-9785-4b6d-bca4-bbead6fe0ae3'}
              />
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
