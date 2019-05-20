








































// $( readyNow );

// // game elements
// let leftPaddle = `<div class= 'leftPaddle' ></div>`;
// let rightPaddle = `<div class= 'rightPaddle' ></div>`;
// let pongBall = `<div class= 'pongBall' ></div>`;

// // array of game pieces
// let gamePieces = [ leftPaddle, rightPaddle, pongBall ];

// function readyNow(){
//     console.log( 'JQ' );
//     // append game pieces
//     $('.playField').append( gamePieces );
//     // serve ball
//     serveBall();
// } // readyNow

// function serveBall(){
//     // target ball
//     let pongBall = $( '.pongBall' );
//     // set starting coordinates
//     let x = 390
//     let y = 290
//     // starting velocity
//     let velocity = 2;

//     // animate pongball
//     while( x < 800 && x > 0 && y < 600 && y > 0 ){
//         x += ( 1 * velocity );
//         y += ( 1 * velocity );
//         pongBall.css( 'margin-left', `${x}px` );
//         pongBall.css( 'margin-top', `${y}px` );
//     }
// }
