/**
 * Created by demon on 12.09.16.
 */

$(function() {
    var figures = [{
        row: 1,
        column: 0,
        type: "pawn",
        text: "♟"
    }, {
        row: 0,
        column: 0,
        type: "rook",
        text: "♖"
    }, {
        row: 0,
        column: 1,
        type: "horse",
        text: "♞"
    }, {
        row: 0,
        column: 2,
        type: "bishop",
        text: "♝"
    }, {
        row: 0,
        column: 3,
        type: "queen",
        text: "♛"
    }, {
        row: 0,
        column: 4,
        type: "king",
        text: "♚"
    }];

    var board = $("<table>");
    for (var i = 0; i < 8; i++) {
        var tr = $("<tr>");
        for (var j = 0; j < 8; j++) {
            var td = $("<td>");
            if (i == 1 || i == 6) {
                var f = _.find(figures, function(f) {
                    return f.type == "pawn";
                });
            } else if ((i == 0 || i == 7) && (j == 0 || j == 7)) {
                var f = _.find(figures, function (f) {
                    return f.type == "rook";
                });
            } else if ((i == 0 || i == 7) && (j == 1 || j == 6)) {
                var f = _.find(figures, function (f) {
                    return f.type == "horse";
                });
            } else if ((i == 0 || i == 7) && (j == 2 || j == 5)) {
                var f = _.find(figures, function (f) {
                    return f.type == "bishop";
                });
            }
            else if ((i == 0 || i == 7) && (j == 3)) {
                var f = _.find(figures, function (f) {
                    return f.type == "queen";
                });
            }
            else if ((i == 0 || i == 7) && (j == 4)) {
                var f = _.find(figures, function (f) {
                    return f.type == "king";
                });
            } else {
                var f = _.find(figures, function(f) {
                    return f.row == i && f.column == j;
                });
            }
            if (f) {
                td.text(f.text);
            }
            tr.append(td);
        }
        board.append(tr);
    }
    $("#board").html(board);
});
