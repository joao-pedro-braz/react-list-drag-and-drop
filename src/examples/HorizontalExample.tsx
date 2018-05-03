import * as React from 'react';
import RLDD from '../RLDD';

const bananas = require('./bananas.json');

interface Item {
	id: number;
	title: string;
	body: string;
}

interface State {
	items: Item[];
}

export default class HorizontalExample extends React.PureComponent<{}, State> {
	constructor(props: {}) {
		super(props);
		this.state = { items: bananas.bananas };
	}

	render() {
		// console.log('HorizontalExample.render');
		const items = this.state.items;
		return (
			<div className="example horizontal">
				<h2>Horizontal Example: Draggable List of Bananas</h2>
				<p>Drag and drop items to re-order the list.</p>
				<RLDD
					cssClasses="example-list-container"
					layout="horizontal"
					items={items}
					itemRenderer={this.itemRenderer}
					onChange={this.handleRLDDChange}
				/>
			</div>
		);
	}

	private itemRenderer = (item: Item, index: number): JSX.Element => {
		return (
			<div className="item">
				<p className="title">{item.title}</p>
				<div className="small">item.id: {item.id} - index: {index}</div>
			</div>
		);
	}

	private handleRLDDChange = (reorderedItems: Array<Item>) => {
		// console.log('Example.handleRLDDChange');
		this.setState({ items: reorderedItems });
	}
}