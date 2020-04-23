import React, {useContext} from 'react';
import {Store, updateColor, updateShape} from "../../store";

const Shapes = props => {
    const {dispatch, state} = useContext(Store);
    return (
        <div className="Shapes">

            <div className="dropdown">
                <button className="dropbtn">Hover to pick a shape</button>
                <div className="dropdown-content">
                    <a onClick={() => dispatch(updateColor(Math.random() * 0xffffff))}>Cube</a>
                    <a onClick={() => dispatch(updateColor(Math.random() * 0xffffff))}>Sphere</a>
                    <a onClick={() => dispatch(updateColor(Math.random() * 0xffffff))}>Torus</a>
                </div>
            </div>

        </div>
    );
}

export default Shapes;
