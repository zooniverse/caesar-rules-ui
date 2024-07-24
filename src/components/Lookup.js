import { useEffect, useState } from "react";

export const Lookup = ({ connective, index, rules, rule, setRules, valueIndex, value }) => {
	const changeValue = (e) => {
		value[1] = e.target.value;
		setRules([...rules]);
	}

	const changeDefaultValue = (e) => {
		value[2] = e.target.value;
		setRules([...rules]);
	}

	const deleteValue = (e) => {
		// +1 is to offset the actual first value being the comparator
		rule.splice(valueIndex + 1, 1);
		setRules([...rules]);
	}

	return (<div>
		Lookup:
		<input
			onChange={changeValue}
			placeholder="lookup.variable.thing"
			style={{ margin: '0 .5em' }}
			type="text"
			value={value[1] || ''}
		/>
		<input
			onChange={changeDefaultValue}
			placeholder="default value"
			style={{ margin: '0 .5em' }}
			type="text"
			value={value[2] || ''}
		/>
		<span onClick={deleteValue} style={{ float: 'right' }}>Delete Lookup</span>
	</div>);
};
