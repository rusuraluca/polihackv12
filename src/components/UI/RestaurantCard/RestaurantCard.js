import React from "react";

import classes from "./RestaurantCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PrimaryTag from "../Tags/PrimaryTag/PrimaryTag";
import dummy from "../../../assets/Background/dummyRestaurant.jpg";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";

export default function RestaurantCard(props) {
    console.log(props.name);
    return (
        <div className={classes.Card} onClick={props.clicked}>
            <div className={classes.Header}>
                {props.imgSrc ? (
                    <img src={require("../../../assets/Background/" + props.name + ".jpeg")} alt={props.name} />
                ) : (
                    <img src={require("../../../assets/Background/" + props.name + ".jpeg")} alt={props.name} />
                )}
            </div>
            <span className={classes.Title}>{props.name}</span>
            <div className={classes.Cusines}>
                <h5>Address</h5>
                <div className={classes.Cv}>
                    <FontAwesomeIcon className={classes.icon} icon={faLocationArrow} />
                    <div className={classes.Location}></div>
                </div>
            </div>
        </div>
    );
}
