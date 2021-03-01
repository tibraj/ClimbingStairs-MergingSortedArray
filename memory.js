function climbingStairs(n) {
    if(n === 0 || n === 1) return 1;
    let first = 1;
    let second = 2;
    for(let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second;
}

function reverseString(s) {
    // return s.split('').reverse().join('');
    let left = 0, right = s.length -1;
    while(left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
    }
    return s.join('');
}

function mergeSortedArray(nums1, m, nums2, n) {
    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[i - m];
    }
    nums1.sort((a, b) => a - b);
}