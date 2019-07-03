import React, { useState } from 'react'

function AddItem(props) {
    const items = props.items
    console.log(props)
    // let happyZooTime={quantity:0, id:0, name:"", price:0}
    // let {quantity, id, name, price} = sadZooTime
    // let state = {}
    // const bla = (obj) => {}
    return (
        <>
            <div className="container">

                Quantity <br></br>
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row"></div> 
                        <form onSubmit={props.handleSubmit}>
                            <input type="number" name="quantity" className="col-md-12" value={props.state.quantity} onChange={props.handleQuantityChange}></input><br></br>

                            Products<br></br>
                            <div className="row"></div>
                            <select className="col-md-12" value={props.state.id} onChange={props.handleProductChange}>
                                <option value="" selected disabled hidden>Choose here</option>
                                {items.map((product, key) =>
                                    <option name={items[key].id} value={items[key].id} >{items[key].name} ${items[key].priceInCents / 100}</option>
                                )}
                            </select>
                            <button /*onClick={this.props.yoAddMe(price,name)}*/ type='submit'>Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AddItem;