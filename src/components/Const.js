import { useEffect, useState } from "react";

export const Const = ({ connective, index, rules, rule, setRules, valueIndex, value }) => {
	const changeValue = (e) => {
		value[1] = e.target.value;
		setRules([...rules]);
	}

	const deleteValue = (e) => {
		// +1 is to offset the actual first value being the comparator
		rule.splice(valueIndex + 1, 1);
		setRules([...rules]);
	}

	return (<div>
		Const:
		<input
			onChange={changeValue}
			placeholder="value"
			style={{ margin: '0 .5em' }}
			type="text"
			value={value[1] || ''}
		/>
		<span onClick={deleteValue} style={{ float: 'right' }}>Delete Const</span>
	</div>);
};
