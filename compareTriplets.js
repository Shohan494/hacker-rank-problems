function compareTriplets(a, b) {
    let output = [0,0]
    for(let i = 0; i < a.length; i++)
    {
        if(a[i] > b[i])
        {
            output[0] += 1
        }
        else if(a[i] < b[i])
        {
            output[1] += 1
        }
        else{
            
        }
    }
    console.log(output)
    return output;
}

compareTriplets([1,2,5], [2,4,6])
