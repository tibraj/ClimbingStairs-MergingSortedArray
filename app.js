//Climbing Stairs
function climbingStairs(n) {
    if(n === 0 || n === 1) return 1;
    let first = 1;
    let second = 2;
    for(let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
    }
    return second; //fibonacci sequence
}

console.log(climbingStairs(2));
console.log(climbingStairs(3));
console.log(climbingStairs(4));


//Merging Sorted Array
// ******************
function mergeSortedArray1(nums1, m, nums2, n) {
    m--;
    n--;
    let i = nums1.length - 1;
    while(i >= 0) {
        if(n > -1 && m > -1 && nums1[m] >= nums2[n]) {
            nums1[i] = nums1[m];
            nums1[m] = nums2[n];
            m--;
        } else if(n > -1) {
            nums1[i] = nums2[n--];
        }
        i--;
    }
}

function mergeSortedArray2(nums1, m, nums2, n) {
    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[i - m];
    }
    nums1.sort((a, b) => a - b);
}

function mergeSortedArray3(nums1, m, nums2, n) {
    let first = m - 1;
    let second = n - 1;
    for(let i = m + n - 1; i >= 0; i--) {
        if(second < 0) {
            break;
        }
        if(nums1[first] > nums2[second]) {
            nums1[i] = nums1[first];
            first--;
        } else {
            nums1[i] = nums2[second];
            second--;
        }
    }
}
console.log(mergeSortedArray3([1,2,3,0,0,0], 3, [2,5,6], 3));
console.log(mergeSortedArray2([1], 1, [], 0));

function reverseString(s) {
    // return s.reverse().join('');
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

console.log(reverseString(['h','e','l','l','o']));