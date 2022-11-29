import styled from 'styled-components';
import products from '../data'; 
import HomeProducts from '../Components/HomeProducts';

const Home = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1024px;
  width: 80%;
  margin: 70px auto 0;
  gap: 12px;`;

const HomeScreen = () => {
  return (
    <Home>
        {products.map((product) => (
            <HomeProducts key={product.id} product={product}/>
        ))}
    </Home>
  )
}

export default HomeScreen

