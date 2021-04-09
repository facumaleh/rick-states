import Header from './components/header'
import Container from './components/container'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import{Button} from 'react-bootstrap';



function App() {
  return (
    <div id="wrapper">

		<Header/>
     <Button variant="primary">
Reset            </Button> 
    <Container />
    <Footer/>

	</div>
	
    
  );
}

export default App;
