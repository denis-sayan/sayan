import React, {Component} from 'react';
import 	'./calc.css';
import {rerenderTree} from '../../index.js';

export default class Calc extends Component{
	firstObj = [];
	result = 0;
	arrElements = [];
	render (){
		
		let element1 = React.createRef();
		let element2 = React.createRef();
		let op = React.createRef();
		let firstObj = this.firstObj = {el1: element1, op: op, el2: element2};
		
		let arrElements = this.arrElements;
		let elements = arrElements.map((item)=>{
			let elem2 = React.createRef();
			let op2 = React.createRef();
			item.op = op2;
			item.el2 = elem2;
			return (
				<div className="calc-component">
					<div className="calc-select">
							<select ref={op2}>
								<option>+</option>
								<option>-</option>
								<option>/</option>
								<option>*</option>
							</select>

					</div>
					<div className="calc-input"><input type="text" ref={elem2}/></div>
				</div>
			);
		});
		
		let getResult = () =>{
			let getRes = operation(Number(firstObj.el1.current.value), Number(firstObj.el2.current.value), firstObj.op.current.value);
			this.arrElements.map((item) =>{
				let val1 = getRes;
				let val2 = Number(item.el2.current.value);
				let option = item.op.current.value;
				getRes = operation(val1, val2, option);
				this.basis = getRes;
			});
			this.result = getRes;
			rerenderTree();
		}
		let operation = (v1, v2, type) => {
			let res = '';
			if(type === '+'){
				res = v1+v2;
			}
			if(type === '-'){
				res = v1-v2;
			}
			if(type === '*'){
				res = v1*v2;
			}
			if(type === '/'){
				res = v1/v2;
			}
			return res;
		} 
		let addNewField = () =>{
			arrElements.push({op: '+', el2: 'r'});
			rerenderTree();
		}
		
		return (
			
			<div className="calc">
				<div className="calc-data">
					<div className="calc-fields">
						<div className="calc-input"><input type="text" ref={element1} /></div>
						<div className="calc-select">
								<select ref={op}>
									<option>+</option>
									<option>-</option>
									<option>/</option>
									<option>*</option>
								</select>
						</div>
						<div className="calc-input"><input type="text" ref={element2}/></div>
						{elements}
					</div>
					<button onClick={getResult}>Вычислить</button>
					<button onClick={addNewField}>Добавить поле</button>
				</div>
				<div className="calc-result-contain">
					<div>Результат:</div>
					<div className="calc-result">{this.result}</div>
				</div>
			</div>
		);
	}
}
