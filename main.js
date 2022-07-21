
const pieces = [
    "whitePawn", "blackPawn", "whiteRook", "blackRook", "whiteKnight", "blackKnight",
    "whiteBishop", "blackBishop", "whiteQueen", "blackQueen", "whiteKing", "blackKing"
]

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



function move (moveFromId, moveToId) {
    //clear moveFrom square
    document.getElementById(moveFromId).classList.remove("piece");
    document.getElementById(moveFromId).classList.remove("highlighting");
    document.getElementById(moveFromId).classList.remove("highlightingPiece");
    document.getElementById(moveFromId).classList.remove("clicked");
    //clear moveTo square
    let pieceToType = getPiece(moveToId);
    let pieceFromType = getPiece(moveFromId);

    if(pieceToType != null && pieceFromType != null) {
        document.getElementById(moveToId).classList.remove(pieceToType);
    }

    if(pieceFromType != null) {
        document.getElementById(moveFromId).classList.remove(pieceFromType);
        document.getElementById(moveToId).classList.add("piece");
        document.getElementById(moveToId).classList.add(pieceFromType);
    }
    document.getElementById(moveToId).classList.remove("highlighting");
    document.getElementById(moveToId).classList.remove("highlightingPiece");
}

function getPiece(id) {
    for(const element of pieces) {
        if (document.getElementById(id).classList.contains(element)) {
            return element;
        }
    }
    return null;
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

let clickedFrom;
let clickedTo;
document.querySelectorAll(".square").forEach(square =>
    square.addEventListener("click", () => {

            if(clickedFrom !== undefined) {
                clickedTo = square.id;
                square.classList.remove('clicked');
            } else {
                clickedFrom = square.id;
                square.classList.add('clicked');
            }

            if(clickedFrom !== undefined && clickedTo !== undefined && clickedTo !== clickedFrom) {
                move(clickedFrom, clickedTo);
                clickedFrom = undefined;
                clickedTo = undefined;
            }

            //this solves square click animation problem
            if(clickedTo === clickedFrom) {
                clickedFrom = undefined;
                clickedTo = undefined;
            }
        }
    ))