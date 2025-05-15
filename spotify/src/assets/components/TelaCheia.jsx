import React from "react";

const TelaCheia = () => {
    const ativarTelaCheia = () => {
        const elem = document.documentElement;

        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen(); // Safari
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen(); // IE/Edge
        }
    };

    return (
        <div style={styles.container}>
            <button style={styles.botao} onClick={ativarTelaCheia}>
                Ativar Tela Cheia
            </button>
        </div>

    );
};

const styles = {
    container: {
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    botao: {
        padding: "12px 24px",
        fontSize: "16px",
        cursor: "pointer",
        backgroundColor: "#fff",
        border: "none",
        borderRadius: "8px",
    },
};

export default TelaCheia;
