import React, { Component } from 'react';

class TicTacToe extends Component {

    render() {
        if (this.props.data === null) return null;
        let w = 100;
        let h = 100;
        let key=0;
        let strokeWidth=1;
        
        const svgElements = []
        svgElements.push((<line key={key++} x1={w} x2={w} y1="0" y2={3*h} stroke="black" strokeWidth={strokeWidth}/>));
        svgElements.push((<line key={key++} x1={2*w} x2={2*w} y1="0" y2={3*h} stroke="black" strokeWidth={strokeWidth}/>));
        svgElements.push((<line key={key++} x1="0" x2={3*w} y1={h} y2={h} stroke="black" strokeWidth={strokeWidth}/>));
        svgElements.push((<line key={key++} x1="0" x2={3*w} y1={2*h} y2={2*h} stroke="black" strokeWidth={strokeWidth}/>));
        
        for(let i=0;i<9;i++) {
            let symbol = this.props.data[i];
            let x = i % 3;
            let y = Math.floor(i / 3) % 3;
            let r = w/2*0.8;
            let cx = (x+0.5)*w;
            let cy = (y+0.5)*h;

            if (symbol === "X") {
                svgElements.push((<line key={key++} x1={cx-r} x2={cx+r} y1={cy+r} y2={cy-r} stroke="black" strokeWidth={strokeWidth}/>))
                svgElements.push((<line key={key++} x1={cx-r} x2={cx+r} y1={cy-r} y2={cy+r} stroke="black" strokeWidth={strokeWidth}/>))
            }  
            else if (symbol === "O") {
                svgElements.push((<circle key={key++} cx={cx} cy={cy} r={r} stroke="black" fill="white" strokeWidth={strokeWidth} />))
            } 
        }   

        // if any three in a row draw a winning line
        const options = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i in options) {
            let option = options[i];
            let symbol = this.props.data[option[0]];
            if (symbol === " ") continue;
            if (this.props.data[option[1]] !== symbol) continue
            if (this.props.data[option[2]] !== symbol) continue

            let s = option[0];
            let sx = s % 3;
            let sy = Math.floor(s / 3) % 3;
            let scx = (sx+0.5)*w;
            let scy = (sy+0.5)*h;

            let e = option[2];
            let ex = e % 3;
            let ey = Math.floor(e / 3) % 3;
            let ecx = (ex+0.5)*w;
            let ecy = (ey+0.5)*h;

            svgElements.push((<line key={key++} x1={scx} x2={ecx} y1={scy} y2={ecy} stroke="red" strokeWidth="3"/>))
        } 
        return (<svg className="border rounded" width={3*w} height={3*h}>{svgElements}</svg>)
    }
}

export default TicTacToe; 