import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (155)</div>
        </div>
        <div className="descriptionbox-discription">
            <p>An e-commerce is an online platform that facilitates the
                buying and selling of products or services over the internet. It
                serves as a virtual marketplace where business and individual can
                showcase therir products, interact with customers, and conduct
                transactions without the need for a physical presence. E-commerce
                websites have gained immense popularity due to their convenience,
                assessibility, and the global reach they offer.
            </p>
            <p>
                E-commerce websites typically display products or services along with
                detalied description, images, prices, and any available variations
                (eg., sizes, colors). Each product has its own dedicated page
                with relevant information.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox;
