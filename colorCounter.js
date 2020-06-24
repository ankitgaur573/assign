
let colors = ['red',
'green', 'yellow', 'green', 'red', 'red', 'green', 'red', 'green', 'blue', 'yellow',
'green', 'green', 'red', 'green', 'blue'];

console.log(countMaximum(colors));

function countMaximum(colors)
{
    if(colors.length == 0) return null;
    let track = {};
    let max = colors[0] 
    let count = 1;

    for(let i = 0; i < colors.length; i++)
    {
        let color = colors[i];

        if(track[color] == null){
            track[color] = 1;
        }
        else{
            track[color]++;  
        }
        if(track[color] > count)
        {
            max = color;
            count = track[color];
        }
    }
    return {color: max, count: count};
}