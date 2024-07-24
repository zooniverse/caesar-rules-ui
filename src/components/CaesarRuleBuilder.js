import { useState } from "react";
import { AddRule } from "./AddRule.js";
import { Rule } from "./Rule.js";

export const CaesarRuleBuilder = () => {
	const [rules, setRules] = useState([]);

	return (<div>
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
		<AddRule rules={rules} setRules={setRules} />
		<div style={{padding: '1em'}}>Output = {JSON.stringify(rules)}</div>
	</div>);
};
