import React from 'react';

const Testimonial = (props) => {
    const { quote, name, from, img } = props.testimonial;
    return (
        <div className="card shadow-md col-md-4">
            <div className="card-body">
                <p className="card-text" style={{ color: '#3A4256' }}>{quote}</p>
            </div>
            <div className="card-footer d-flex align-items-center
            justify-content-center">
                <img className="mx-3" src={img} alt="" width="60" />
                <div>
                    <h6 className="text-brand">{name}</h6>
                    <p className="m-0">{from}</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;