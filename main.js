
function startingPosition() {
    //pawns
    addPiece("a2","whitePawn");
    addPiece("b2","whitePawn");
    addPiece("c2","whitePawn");
    addPiece("d2","whitePawn");
    addPiece("e2","whitePawn");
    addPiece("f2","whitePawn");
    addPiece("g2","whitePawn");
    addPiece("h2","whitePawn");
    addPiece("a7","blackPawn");
    addPiece("b7","blackPawn");
    addPiece("c7","blackPawn");
    addPiece("d7","blackPawn");
    addPiece("e7","blackPawn");
    addPiece("f7","blackPawn");
    addPiece("g7","blackPawn");
    addPiece("h7","blackPawn");

    //rooks
    addPiece("a1","whiteRook");
    addPiece("h1","whiteRook");
    addPiece("a8","blackRook");
    addPiece("h8","blackRook");

    //knights
    addPiece("b1","whiteKnight");
    addPiece("g1","whiteKnight");
    addPiece("b8","blackKnight");
    addPiece("g8","blackKnight");

    //bishops
    addPiece("c1","whiteBishop");
    addPiece("f1","whiteBishop");
    addPiece("c8","blackBishop");
    addPiece("f8","blackBishop");

    //kings
    addPiece("e1","whiteKing");
    addPiece("e8","blackKing");

    //queens
    addPiece("d1","whiteQueen");
    addPiece("d8","blackQueen");
}
startingPosition();

function addPiece(id,pieceType) {
    document.getElementById(id).classList.add("piece");
    document.getElementById(id).classList.add(pieceType);
}

document.querySelectorAll(".square").forEach(square =>
    square.addEventListener("mouseenter", () => {
            if(square.classList.contains("piece")) {
                square.classList.add("highlightingPiece")
            } else {
                square.classList.add("highlighting")
            }
        }
    ))

document.querySelectorAll(".square").forEach(square =>
    square.addEventListener("mouseleave", () => {
        if(square.classList.contains("piece")) {
            square.classList.remove("highlightingPiece")
        } else {
            square.classList.remove("highlighting")
        }
        }
    ))