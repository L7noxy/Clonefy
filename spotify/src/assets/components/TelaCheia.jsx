import React from "react";
import { RiFullscreenFill } from "react-icons/ri";
import "./TelaCheia.css"

const TelaCheia = () => {
    const ativarTelaCheia = () => {
        const elem = document.documentElement;

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen(); 
        }
    };

    return (
        <div className="tela-cheia">
            <button className="ativarTelaCheia" onClick={ativarTelaCheia}>
                <RiFullscreenFill  size={25} color="white"/>
            </button>
        </div>

    );
};

export default TelaCheia;
