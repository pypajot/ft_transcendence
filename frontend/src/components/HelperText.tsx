export function HelperText(props: {className?: string, errorText: string | null}) {
	if (!props.errorText)
		return null
	return (
		<>
			<div className={props?.className} style={{color: "red"}}>{props.errorText}</div>
		</>
	);
}

export default HelperText;