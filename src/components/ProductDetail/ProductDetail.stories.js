import React from 'react'
import ProductDetail from './ProductDetail'

export default {
  component: ProductDetail,
  title: 'ProductDetail',
}

export const withExampleData = () => (
  <ProductDetail
    shownProduct={{
      _id: '5f0365f315754ca7dac1fd77',
      productName: 'Bollerwagen',
      ownerFirstname: 'Laura',
      phone: '0171 450-2565',
      location: 'Ottensen',
      ownerNotes: 'Bitte erst Abends nach 18Uhr anrufen!',
      description:
        'Celery quandong swiss chard chicory earthnut pea potato. Salsify taro catsear garlic gram celery bitterleaf wattle seed collard greens nori. Grape wattle seed kombu beetroot horseradish carrot squash brussels sprout chard. ',
      dailyRate: 5,
      weeklyRate: 10,
    }}
  />
)
