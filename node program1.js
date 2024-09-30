
function isValid(s) {
    const bracketMap = { ')': '(', '}': '{', ']': '[' };
    const stack = [];

    for (const char of s) {
        if (char in bracketMap) {
            const topElement = stack.pop() || '#'; 
            if (bracketMap[char] !== topElement) {
                return false; // 
            }
        } else {
            stack.push(char); 
        }
    }
    
    return stack.length === 0; 
}

module.exports = { isValid };

