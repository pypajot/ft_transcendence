export function HelperText(props: {className?: string, errorText: string | null}) {
	if (!props.errorText)
		return null
	return (
		<>
			<span className={props?.className} style={{color: "red"}}>{props.errorText}</span>
		</>
	);
}

export default HelperText;