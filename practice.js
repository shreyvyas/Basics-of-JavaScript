let a = 10

if (a<10)
{
    console.log("a is less than 10")
}
else
{
    console.log("a is equal to 10")
}

console.log("---------------------------------")

//print 0 to 10 using while loop

let b = 0

while (b < 11)
{
    console.log(b)
    b++
}

console.log("---------------------------------")

//print 10 to 0 using while loop
//10,9,8,7.....0

let c = 10

while (c <= 10)
{
    console.log(c)
    c--
    if (c < 0)
    {
        break
    }
}

console.log("---------------------------------")

for(k=0; k<=10; k++)
{
    console.log(k)
}

console.log("---------------------------------")