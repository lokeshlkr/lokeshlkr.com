export function prefersDarkMode() {
    window.matchMedia('(prefers-color-scheme: dark)').matches;
}
export function isValidHexColor(value: string) {
    if (
        value.length !== 7 ||
        value[0] !== '#' ||
        parseInt(value.slice(1, 7)) === parseInt(value.slice(1, 6))
    ) {
        return false
    }
    return true
}