import React from 'react'

function CartFooter(props) {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/#">{props.copyright} 2019</a>
            </nav>
        </div>
    )
}

export default CartFooter;

