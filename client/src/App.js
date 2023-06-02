import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './components/Home';
import NotFound from './components/NotFound';
import store, { addItem } from './store';

const App = () => {
  useEffect(() => {
    console.log("Hello2")
    const preloadInventory = () => {
      const preloadedItems = [
        {
          id: '1',
          name: 'Australian Cattle Dog',
          description: 'The Australian Cattle Dog, or simply Cattle Dog, is a breed of herding dog originally developed in Australia for droving cattle over long distances across rough terrain. This breed is a medium-sized, short-coated dog that occurs in two main colour forms.',
          price: 20,
          image: 'https://www.akc.org/wp-content/uploads/2017/11/Australian-Cattle-Dog-laying-down-in-the-grass.jpg',
        },
        {
          id: '2',
          name: 'Russian Blue Cat',
          description: 'Known for their mesmerising dark grey coats with a shimmering silver hue and captivating green eyes, the Russian Blue is one of the most famous grey cat breeds. With such a dense, plush coat, it may actually surprise you to know that these cats are hypoallergenic.',
          price: 50.25,
          image: 'https://rawznaturalpetfood.com/wp-content/uploads/russian-blue-cats.jpg',
        },
        {
          id: '3',
          name: 'Green Iguana',
          description: 'The green iguana, also known as the American iguana or the common green iguana, is a large, arboreal, mostly herbivorous species of lizard of the genus Iguana. Usually, this animal is simply called the iguana.',
          price: 15,
          image: 'https://www.everythingreptiles.com/wp-content/uploads/2020/05/Green-Iguana-Feature.jpg',
        },
        {
          id: '4',
          name: 'Cottontail Rabbit',
          description: 'Cottontail rabbits are the leporid species in the genus Sylvilagus, found in the Americas. Most Sylvilagus species have stub tails with white undersides that show when they retreat, giving them their characteristic name. However, this feature is not present in all cottontails nor is it unique to the genus.',
          price: 84,
          image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcT1TzT6AOzcl3JRK7t3K6Z-XrU7FqM8WyCj-8_6ofS0P6Tij4hEjH2j1EOVlRwL52aGQYoMfnuLI_YhW2I',
        },
      ];

      preloadedItems.forEach((item) => store.dispatch(addItem(item)));
    };

    preloadInventory();
  }, []);

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
