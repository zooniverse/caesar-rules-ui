import { ConnectiveValues } from './Connectives.js';
import { Lookup } from './Lookup.js';
import { Const } from './Const.js';

export const Comparator = ({ connective, index, rules, rule, setRules }) => {
	const [_connective, ...values] = rule;
	
	const addValue = (e) => {
		if (e.target.value === '') return;
		const { value } = e.target;
		
		rule.push([value]);
		setRules([...rules]);
		e.target.value = '';
	};

	return (<div style={{'padding': '.5em', border: '1px solid #999' }}>
		<div style={{ padding: '.5em 0' }}>VALUE is {connective.js}</div>

		{values?.map((value, index) => {
			const Component = (value[0] === 'lookup') ? Lookup : Const;
			return (<Component
				key={index}
				rules={rules}
				rule={rule}
				setRules={setRules}
				valueIndex={index}
				value={value}
			/>)
		})}

		<div style={{ padding: '.5em 0' }}>
			<select onChange={addValue}>
				<option value="">Add Value Condition</option>
				<option>lookup</option>
				<option>const</option>
			</select>
		</div>
	</div>);
};
