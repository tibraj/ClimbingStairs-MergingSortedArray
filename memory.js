function climbingStairs(n) {
    if(n === 1 || n === 0) return 1;
    let first = 1;
    let second = 2;
    for(let i = 3; i < n.length; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second;
}

function reverseString(s) {
    let left = 0, right = s.length - 1;
    while(left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        ++left;
        --right;
    }
    return s.join('');
}