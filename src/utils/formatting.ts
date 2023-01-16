export function headingNormalizer(text: string) {
    return text.toLowerCase()
        .split(' ')
        .map((word: string) => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}

export const formatter = {
    /**Takes a string and returns a string with the first letter of each word capitalized.
     * @param {string} text - The string to be normalized.
     * @example
     * headingNormalizer('hello world') // 'Hello World'
     * headingNormalizer('HELLO WORLD!') // 'Hello World!'
     */
    headingNormalizer
};

export default formatter;

