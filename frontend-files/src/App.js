import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header, Footer } from "./components";
import { HomeScreen, ProductScreen } from "./screens/";
import { Container } from "react-bootstrap"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={
          <>
            <Header />
            <Container>
              <div className="main">
                <HomeScreen />
              </div>
            </Container>
            <Footer />
          </>
        }/>
        <Route path='/product/:id' element={
          <>
            <Header />
            <Container>
              <div className="main">
                <ProductScreen id='' />
              </div>
            </Container>
            <Footer />
          </>
        } />
        <Route path='/cart' element={
          <>
            <Header />
            <Footer />
          </>
        } />
        <Route path='/login' element={
          <>
            <Header />
            <Footer />
          </>
        } />
      </Routes> 
    </Router>
    
  );
}

export default App;
