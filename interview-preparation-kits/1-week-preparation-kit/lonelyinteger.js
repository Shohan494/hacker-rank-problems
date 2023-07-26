function lonelyinteger(arr) {
    for(let x = 0; x < arr.length; x++)
    {
      let count = 0;
      for(let y = 0; y < arr.length; y++)
      {
        if(x != y)
        {
          console.log(arr[x],arr[y])
          if(arr[x] == arr[y])
          {
            count++
            console.log("Pair found")
            console.log("Count = " + count)
            break;
          }
        }
      }
      if(count == 0)
      {
        console.log("Count 0")
        console.log(arr[x])
      }
    }
}

lonelyinteger([1,2,3,4,3,2,1])

// sort then check loop
// no sort but check loop inside loop
// check for pair and if found remove the pair

