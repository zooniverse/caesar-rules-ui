import { useState } from "react";
import { Rule } from "./Rule.js";

export const CaesarRuleBuilder = () => {
	const [rules, setRules] = useState([]);

	const addRule = () => {
		setRules([...rules, []]);
	};

	return (<div style={{ padding: '1em' }}>

		<h2 style={{ padding: '0 0 1em 0' }}>Caesar Rule Builder</h2>
		<div style={{ padding: '1em', border: '1px solid #999' }}>
			{rules.map((rule, index) => {
				return (<Rule
					key={index}
					index={index}
					parentRule={rules}
					parentRuleIndex={index}
					rules={rules}
					rule={rule}
					setRules={setRules}
				/>)
			})}
			<p style={{padding: '1em'}} onClick={addRule}>Add Rule</p>
		</div>
		<div style={{padding: '1em'}}>Output = {JSON.stringify(rules)}</div>
	</div>);
};
