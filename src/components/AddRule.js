export const AddRule = ({ rules, setRules }) => {

	const onClick = () => {
		setRules([...rules, []]);
	};

	return (<p style={{padding: '1em'}} onClick={onClick}>Add Rule</p>);
};
