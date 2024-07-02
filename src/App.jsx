import { Footer } from './modules/Footer/Footer';
import { Goods } from './modules/Goods/Goods';
import { Header } from './modules/Header/Header';
import { Hero } from './modules/Hero/Hero';
import { Subscribe } from './modules/Subscribe/Subscribe';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className='filter'>
          <h2 className='visually-hidden'></h2>
          <div className='container'>
            <form className='filter__form'>
              <fieldset className='filter__group'>
                <input
                  className='filter__radio'
                  type='radio'
                  name='type'
                  value='bouquets'
                  id='flower'
                  defaultChecked
                />
                <label
                  className='filter__label filter__label_flower'
                  htmlFor='flower'
                >
                  Цветы
                </label>

                <input
                  className='filter__radio'
                  type='radio'
                  name='type'
                  value='toys'
                  id='toys'
                />
                <label
                  className='filter__label filter__label_toys'
                  htmlFor='toys'
                >
                  Игрушки
                </label>

                <input
                  className='filter__radio'
                  type='radio'
                  name='type'
                  value='postcards'
                  id='postcard'
                />
                <label
                  className='filter__label filter__label_postcard'
                  htmlFor='postcard'
                >
                  Открытки
                </label>
              </fieldset>

              <fieldset className='filter__group filter__group_choices'>
                <div className='filter__choices choices'>
                  <button className='filter__select choices__btn' type='button'>
                    Цена
                  </button>

                  <div className='choices__box filter__choices-box'>
                    <fieldset className='filter__price'>
                      <input
                        className='filter__input-price'
                        type='text'
                        name='minPrice'
                        placeholder='от'
                      />
                      <input
                        className='filter__input-price'
                        type='text'
                        name='maxPrice'
                        placeholder='до'
                      />
                    </fieldset>
                  </div>
                </div>

                <div className='filter__choices filter__choices_type choices'>
                  <button className='filter__select choices__btn' type='button'>
                    Тип товара
                  </button>

                  <div className='choices__box filter__choices-box filter__choices-box_type'>
                    <ul className='filter__type-list'>
                      <li className='filter__type-item'>
                        <button className='filter__type-button' type='button'>
                          Монобукеты
                        </button>
                      </li>
                      <li className='filter__type-item'>
                        <button className='filter__type-button' type='button'>
                          Авторские букеты
                        </button>
                      </li>
                      <li className='filter__type-item'>
                        <button className='filter__type-button' type='button'>
                          Цветы в коробке
                        </button>
                      </li>
                      <li className='filter__type-item'>
                        <button className='filter__type-button' type='button'>
                          Цветы в корзине
                        </button>
                      </li>
                      <li className='filter__type-item'>
                        <button className='filter__type-button' type='button'>
                          Букеты из сухоцветов
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </section>
        <Goods />
        <Subscribe />
      </main>
      <Footer />
      <div className='order' style={{ display: 'none' }}>
        <div className='order__wrapper'>
          <h2 className='order__title'>Оформить заказ</h2>
          <form className='order__form' id='order'>
            <fieldset className='order__fieldset'>
              <legend className='order__legend'>Данные заказчика</legend>
              <div className='order__input-group'>
                <input
                  className='order__input'
                  type='text'
                  name='name-buyer'
                  placeholder='Имя'
                />
                <input
                  className='order__input'
                  type='text'
                  name='phone-buyer'
                  placeholder='Телефон'
                />
              </div>
            </fieldset>
            <fieldset className='order__fieldset'>
              <legend className='order__legend'>Данные получателя</legend>
              <div className='order__input-group'>
                <input
                  className='order__input'
                  type='text'
                  name='name-recipient'
                  placeholder='Имя'
                />
                <input
                  className='order__input'
                  type='text'
                  name='phone-recipient'
                  placeholder='Телефон'
                />
              </div>
            </fieldset>
            <fieldset className='order__fieldset'>
              <legend className='order__legend'>Адрес</legend>
              <div className='order__input-group'>
                <input
                  className='order__input'
                  type='text'
                  name='street'
                  placeholder='Улица'
                />
                <input
                  className='order__input order__input_min'
                  type='text'
                  name='house'
                  placeholder='Дом'
                />
                <input
                  className='order__input order__input_min'
                  type='text'
                  name='apartment'
                  placeholder='Квартира'
                />
              </div>
            </fieldset>
            <fieldset className='order__fieldset'>
              <div className='order__payment'>
                <label className='order__label-radio'>
                  <input
                    className='order__radio'
                    type='radio'
                    name='payment-online'
                    value='true'
                    defaultChecked
                  />
                  Оплата онлайн
                </label>
              </div>
              <div className='order__delivery'>
                <label htmlFor='delivery'>Доставка 01.07</label>
                <input type='hidden' name='delivery-date' value='01.07' />
                <div className='order__select-wrapper'>
                  <select
                    className='order__select'
                    name='delivery-time'
                    id='delivery'
                  >
                    <option value='9-12'>с 9:00 до 12:00</option>
                    <option value='12-15'>с 12:00 до 15:00</option>
                    <option value='15-18'>с 15:00 до 18:00</option>
                    <option value='18-21'>с 18:00 до 21:00</option>
                  </select>
                </div>
              </div>
            </fieldset>
          </form>
          <div className='order__footer'>
            <p className='order__total'>92100&nbsp;₽</p>
            <button className='order__button' type='submit' form='order'>
              Заказать
            </button>
          </div>
        </div>
        <button className='order__close' type='button'>
          ×
        </button>
      </div>
      <div className='order' style={{ display: 'none' }}>
        <div className='order__wrapper'>
          <h2 className='order__title'>Заказ оформлен!</h2>
          <p className='order__id'>
            Ваш номер заказа: 971f365a-caa1-4cdb-9446-bad2eff047e1
          </p>
        </div>
      </div>
    </>
  );
};
