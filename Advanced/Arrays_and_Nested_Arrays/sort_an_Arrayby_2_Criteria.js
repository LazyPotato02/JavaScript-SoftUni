function sort_an_Array_by_2_Criteria(input) {
    const twoCriteriaSort = (cur, next) =>
        cur.length - next.length || cur.localeCompare(next);
    input.sort(twoCriteriaSort);
    console.log(input.join('\n'));
}

sort_an_Array_by_2_Criteria(['alpha',

    'beta',

    'gamma'] )