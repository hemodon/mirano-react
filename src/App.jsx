import { Filter } from './modules/Filter/Filter';
import { Footer } from './modules/Footer/Footer';
import { Goods } from './modules/Goods/Goods';
import { Header } from './modules/Header/Header';
import { Hero } from './modules/Hero/Hero';
import { OrderForm } from './modules/OrderForm/OrderForm';
import { OrderMsg } from './modules/OrderMsg/OrderMsg';
import { Subscribe } from './modules/Subscribe/Subscribe';

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Filter />
        <Goods />
        <Subscribe />
      </main>
      <Footer />
      <OrderForm />
      <OrderMsg />
    </>
  );
};
