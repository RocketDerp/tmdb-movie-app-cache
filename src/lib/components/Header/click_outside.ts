export function clickOutside(node: { contains: (arg0: any) => any; dispatchEvent: (arg0: CustomEvent<unknown>) => void; }) {
	const handleClick = (event: { target: any; }) => {
		if (!node.contains(event.target)) {
			node.dispatchEvent(new CustomEvent("outclick"));
		}
	};

	document.addEventListener("click", handleClick, true);

	return {
		destroy() {
			document.removeEventListener("click", handleClick, true);
		}
	};
}
