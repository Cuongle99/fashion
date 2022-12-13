import React from "react";
import { Link } from "react-router-dom";

const numeral = require("numeral");

export default function SearchItemProduct(props) {
    return (
        <div>
            <Link to={`/products/${props.id}`}>
                <div className="product__search__item">
                    <img src={props.data.image[0]} alt="" />
                    <div className="search__item__content ms-4">
                        <h5 className="product__name">{props.data.name}</h5>
                        <div className="product__price">
                            {props.data.sale > 0 ? (
                                <>
                                    <span className="product__price-default">
                                        {numeral(props.data.price).format(
                                            "$0,0.00"
                                        )}
                                    </span>{" "}
                                    -
                                    <span className="product__price-sale">
                                        {" "}
                                        {numeral(
                                            props.data.price -
                                                (props.data.price *
                                                    props.data.sale) /
                                                    100
                                        ).format("$0,0.00")}
                                    </span>{" "}
                                </>
                            ) : (
                                <span className="product__price-sale">
                                    {numeral(props.data.price).format(
                                        "$0,0.00"
                                    )}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
