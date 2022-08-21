<script>
	export let percent;

	let dash = percent + ' ' + (100 - percent);
	let strokecolor = '';
	switch (true) {
		case percent > 90:
			strokecolor = '#00a654';
			break;
		case percent > 80:
			strokecolor = '#2eb445';
			break;
		case percent > 70:
			strokecolor = '#55c136';
			break;
		case percent > 60:
			strokecolor = '#acd91c';
			break;
		case percent > 50:
			strokecolor = '#d7e40e';
			break;
		case percent > 40:
			strokecolor = '#fbf000';
			break;
		case percent > 30:
			strokecolor = '#f8c10e';
			break;
		case percent > 20:
			strokecolor = '#f3901b';
			break;
		case percent > 10:
			strokecolor = '#f05f2a';
			break;
		default:
			strokecolor = '#e82f37';
			break;
	}
	if (percent === 0) {
		dash = '100 0';
	}
</script>

<svg viewBox="0 0 60 60">
	<path
		stroke-dasharray="10 1"
		stroke-dashoffset="0"
		pathLength="1"
		d="M5,30a25,25,0,1,1,50,0a25,25,0,1,1,-50,0"
		fill="#212121"
		stroke="lightgrey"
		stroke-width="3"
	/>
	<path
		stroke-dasharray={dash}
		stroke-dashoffset="-25"
		pathLength="100"
		d="M5,30a25,25,0,1,1,50,0a25,25,0,1,1,-50,0"
		fill="none"
		stroke={strokecolor}
		stroke-width="3"
	/>
</svg>
