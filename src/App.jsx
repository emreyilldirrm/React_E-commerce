import { useEffect, useState } from 'react'
import './App.css'
import PageContainer from './container/PageContainer'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'
import Loading from './components/Loading'
import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux'
import './css/BasketProducts.css'
import { calculateBasket, removeToBasket, setDrawer } from './redux/slices/basketSlices'

function App() {
  const { products, drawer, totalAmount } = useSelector((store) => store.basket)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateBasket())
  }, [])


  //   // Sepetten ürün çıkarmak için yeni bir dizi oluştur
  //   const updatedBasket = deleteproduct.filter(product => product.id !== id);
  //   console.log("Silme sonucu array: ", updatedBasket)
  //   setdeleteproduct(updatedBasket);
  //   dispatch(removeToBasket(deleteproduct))
  //   dispatch(calculateBasket())

  // };
  return (
    <div>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />any
        <Drawer anchor={"right"} onClose={() => dispatch(setDrawer())} open={drawer}>
          {
            products && products.map((p) => (

              <div className='basket_products flex-row'>

                <img src={p.image} />
                <h4>{p.title}</h4>
                <p>{p.description}</p>
                <h5>{p.count} adet</h5>
                <h3>{p.price}TL</h3>
                <button onClick={() => dispatch(removeToBasket(p.id))} className='delete-button'>Sepetten Çıkar</button>

              </div>
            ))
          }
          <div className='Total-Amount-Conatiner flex-row'>
            <h2 className='Total-Amount'>Toplam tutar: {totalAmount}TL</h2>
          </div>
        </Drawer>
      </PageContainer>
    </div>
  )
}

export default App
