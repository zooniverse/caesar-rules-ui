export const Lookup = ({ rules, rule, setRules, valueIndex, value }) => {
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

	return (<div className="lookup">
		Lookup:
		<input
			onChange={changeValue}
			placeholder="lookup.variable.thing"
			type="text"
			value={value[1] || ''}
		/>
		<input
			onChange={changeDefaultValue}
			placeholder="default value"
			type="text"
			value={value[2] || ''}
		/>
		<span className="button" onClick={deleteValue}>Delete Lookup</span>
	</div>);
};
