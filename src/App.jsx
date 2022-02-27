import Card from "./components/Card/Card"
import Header from "./components/Header/Header"
import { GlobalStyle } from "./styles/global"

import foodImg1 from "./assets/imgs/food1.png";
import foodImg2 from "./assets/imgs/food2.png";
import foodImg3 from "./assets/imgs/food3.png";
import foodImg4 from "./assets/imgs/food4.png";
import { DarkProvider, useDarkContext} from "./Context/DarkContex";

function App() {
  
  return (
    <DarkProvider>
        <Header />
        <Card imgCapa={foodImg1} title={'Lunch'} />
        <Card imgCapa={foodImg2} title={'Drink'} />
        <Card imgCapa={foodImg3} title={'Salad'} />
        <Card imgCapa={foodImg4} title={'Meat'} />
        <GlobalStyle  />
    </DarkProvider>
  )
}

export default App
