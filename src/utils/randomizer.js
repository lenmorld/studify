export default function (set) {
	// sort set to a random order
	return set.sort(function (a, b) { return Math.random() - 0.5 })
}