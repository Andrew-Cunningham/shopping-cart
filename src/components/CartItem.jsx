import React from 'react'

function CartItem(props) {
    return (
        props.props.cartItemList.map((product, key) =>
            <>
                <div className="list-group">
                    <div className="list-group-item">
                        <div key={props.props.cartItemList[key].id} className="row">
                            <div className="col-md-8" >{props.props.cartItemList[key].product.name}</div>
                            <div className="col-md-2">${props.props.cartItemList[key].product.priceInCents / 100}</div>
                            <div className="col-md-2">{props.props.cartItemList[key].quantity}</div>
                        </div>

                    </div>
                </div>
            </>
        )
    )
}

export default CartItem;