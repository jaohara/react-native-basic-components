import HomeScreen from './components/screens/HomeScreen';
import ImageScreen from './components/screens/ImageScreen';
import InputScreen from './components/screens/InputScreen';
import TextScreen from './components/screens/TextScreen';


export const routeNames = {
  home: "Home",
  image: "Image Views",
  input: "Text Input",
  text: "Text Views",
}

// TODO: ensure these props are being properly applied to the routes
export const routes = [
  {
    name: routeNames.home,
    component: HomeScreen,
  },  
  {
    name: routeNames.text,
    component: TextScreen,
  },  
  {
    name: routeNames.image,
    component: ImageScreen,
  },  
  {
    name: routeNames.input,
    component: InputScreen,
  },
];