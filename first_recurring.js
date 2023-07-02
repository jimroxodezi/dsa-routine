/**
 * algorithm to find the first recurring
 * character in a string
 * @param {string} str the string we want to check
 * @returns {string} the first occuring char if it exists, else null
 */

const firstRecurring = (str) => {
    const count = new Set();

    for (const c of str) {
        if (count.has(c)) {
            return c;
        }
        count.add(c);
    }

    return null
};

// console.log(firstRecurring("abcdab"));

const firstRecurringMap = (str) => {
    const count = new Map();

    for (const c of str) {
        if (count.has(c)) return c;
        count.set(c,1);
    }

    return null;
};

console.log(firstRecurringMap("abcda"));