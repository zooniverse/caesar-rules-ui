import { Connectives } from "./Connectives.js";

const dropdownItems = Connectives.filter(item => item.isComparator || item.isConjunction);

export const Condition = ({ connective, index, rule, rules, setRules }) => {
	const condition = rule[0];

	const changeCondition = (e) => {
		const connectiveValue = e.target.value;
		const _connective = Connectives.find(c => c.type === connectiveValue) ?? null;

		if (connective?.isComparator && _connective.isConjunction) {
			// converting from comparator to conjunction
			rule.length = 0;
			rule.push(connectiveValue);
		} else if (connective?.isConjunction && _connective.isComparator) {
			// converting from conjunction to comparator
			rule.length = 0;
			rule.push(connectiveValue);
		} else {
			// no conversion needed
			console.log('rule', rule);
			rule[0] = connectiveValue;
		}

		setRules([...rules]);
	};

	return (<select value={condition}
		onChange={changeCondition}
	>
		<option value="">Select Condition</option>
		{dropdownItems.map((rule, index) => {
			return (<option
				key={index}
				value={rule.type}
			>{rule.js}</option>)
		})}
	</select>);
};
