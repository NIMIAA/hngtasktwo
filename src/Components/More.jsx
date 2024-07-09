import React from 'react';
import Pot from '../Assets/pot.png';
import Sofa from '../Assets/sofa.png';
import Clock from '../Assets/oakwoodclock.png';
import Light from '../Assets/homePageChandelierImg.png';

const More = () => {

    const others = [
        {
            image: Pot,
            text: "Flower Pot",
            Price: "$500"

        },
        {
            image: Clock,
            text: "Flower Pot",
            Price: "$500",
        },
        {
            image: Sofa,
            text: "Flower Pot",
            Price: "$500",
        },
        {
            image:Light,
            text: "Flower Pot",
            Price: "$500",
        },
    ]
  return (
    <div className='container'>
            <h2 className='item-desc'>YOU MIGHT LIKE THESE</h2>
        <div className="more">
            {
                others.map((item)=>(
                    <div className="items">
                        <img src={item.image}/>
                        <div className="item-desc">
                            <h4>{item.text}</h4>
                            <p>{item.Price}</p>
                        </div>
                    </div>
                )

                )
            }
        </div>
    </div>
  )
}

export default More;