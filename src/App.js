import React from 'react';
import './App.css';
import CartHeader from '../src/components/CartHeader'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'
import AddItem from './components/AddItems';




class App extends React.Component {

  // let [cartItemList, forceUpdate] = useState([
  //   { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
  //   { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
  //   { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
  // ]);


  // const [inventory] = useState({
  //   products: [
  //     { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
  //     { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
  //     { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
  //     { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
  //     { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
  //     { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
  //     { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
  //     { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
  //     { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }
  //   ]
  // })
  state = {
    cartItemList: [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },]
    ,
    products: [{ id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
    { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
    { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
    { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
    { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
    { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
    { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
    { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
    { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 }],
    quantity: 0,
    id: 0
  }
  render() {
    let total;

    this.handleQuantityChange = (e) => {

      this.setState({ quantity: e.target.value })

    };
    this.handleProductChange = (e) => {
      this.setState({ id: e.target.value })


    }

    this.handleSubmit = (e) => {
      e.preventDefault()
      this.addItemToCart(this.state)

    }
    // this.addItemToCart=(id, name, price, quantity)
    this.addItemToCart = (state) => {
      let newCartItem = this.state.products.filter(products => products.id == state.id)
      console.log(state.products)
      console.log(this.state.products);
      // this.setState(prevState => {
      //   return {
      //     cartItemList:
      //     {
      //       ...prevState.cartItemList,

      //       id: (this.state.cartItemList.length + 1),

      //       id: newCartItem[0].id,
      //       name: newCartItem[0].name,
      //       priceInCents: newCartItem[0].priceInCents,

      //       quantity: parseInt(state.quantity)
      //     }
      //   }

      // })
      let newItem={
        id:(this.state.cartItemList.length + 1),
        product:{
          id: newCartItem[0].id,
          name: newCartItem[0].name,
          priceInCents: newCartItem[0].priceInCents
        },
        quantity: parseInt(state.quantity)
      }
      this.setState(prevState => ({
        cartItemList: prevState.cartItemList.concat(newItem)
      }))


      console.log(state.cartItemList)
      this.getTotalPrice(state.cartItemList)
    }

    this.getTotalPrice = (cartItemList) => {
      total = 0;
      console.log(this.state.cartItemList)
      console.log(cartItemList)
      cartItemList.map((product, key) =>
        total += (cartItemList[key].product.priceInCents / 100 * cartItemList[key].quantity)
      )
      console.log(total)

    }
    return (
      <div className="App">
        {this.getTotalPrice(this.state.cartItemList)}
        <CartHeader></CartHeader>
        <CartItems cartItemList={this.state.cartItemList} state={this.state}></CartItems>
        <div className="container">Total Price:${total} </div>
        <AddItem items={this.state.products} handleSubmit={this.handleSubmit} handleQuantityChange={this.handleQuantityChange} handleProductChange={this.handleProductChange} state={this.state}></AddItem>

        <CartFooter copyright="&copy;"></CartFooter>
      </div>

    );

  }



} export default App;
