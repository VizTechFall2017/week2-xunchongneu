
console.log("here");

var indexcard = d3.select('body').append('svg')
    .attr('width',4000)
    .attr('height',800)
    .attr('background-color',"blue")
;

document.bgColor="pink"  //

indexcard.attr('background',"blue");

console.log('indexcard');


var clicked = true;

var circle1 = indexcard.append('circle')
    .attr('cx',700)
    .attr('cy',200)
    .attr('r',20)
    .attr('fill','blue')
    .on('click',function(d){
        if(clicked==true){
            // do something
            d3.select(this).attr('fill','orange').transition().attr('r',100);
            clicked = false;
        }
        else{  //(if clicked==false
            //do something else
            d3.select(this).attr('fill','blue').attr('r',10);
            clicked = true;
        }

        console.log(clicked);

    })

    .on('mouseover',function(d){
        d3.select(this).attr('stroke', 'red')
            .attr('stroke-width', 10);
    })

    .on('mouseout',function(d){
        d3.select(this).attr('stroke', 'white')
            .attr('stroke-width', 3);
    });


indexcard.append('rect')
    .attr('x',100)
    .attr('y',200)
    .attr('width',100)
    .attr('fill','blue')
    .attr('stroke-width', 5)
    .attr('stroke', 'black')
    .attr('fill-opacity',0.8)
    .attr('stroke-opacity',0.9)
    .attr('height',100);

indexcard.append('rect')
    .attr('x',180)
    .attr('y',280)
    .attr('width',100)
    .attr('height',100)
    .attr('stroke-width', 5)
    .attr('stroke', 'black')
    .attr('fill-opacity',0.8)
    .attr('stroke-opacity',0.9)
    .attr('fill','white');



indexcard.append('rect')
    .attr('x',260)
    .attr('y',360)
    .attr('width',100)
    .attr('height',100)
    .attr('stroke-width', 5)
    .attr('stroke', 'black')
    .attr('fill-opacity',0.8)
    .attr('stroke-opacity',0.9)
    .attr('fill','red');




indexcard.append('line')

    .attr('x1',0)
    .attr('x2',1500)
    .attr('y1',50)
    .attr('y2',50)
    .attr('stroke','black')
    .attr('stroke-width',10)
    .attr('width',700);

indexcard.append('line')

    .attr('x1',1200)
    .attr('x2',1200)
    .attr('y1',0)
    .attr('y2',1000)
    .attr('stroke','black')
    .attr('stroke-width',5)
    .attr('height',2500);




circle1.attr('stroke',"purple");




indexcard.append('circle')

    .attr('cx',850)
    .attr('cy',500)
    .attr('r',30)
    .attr('fill','lightblue')
    .attr('fill-opacity',0.5)
    .attr('stroke-width',3)
    .attr('stroke','white')
;


indexcard.append('circle')

    .attr('cx',900)
    .attr('cy',250)
    .attr('r',50)
    .attr('fill','#393aff')
    .attr('fill-opacity',0.5)
    .attr('stroke-width',3)
    .attr('stroke','white');

indexcard.append('circle')

    .attr('cx',600)
    .attr('cy',500)
    .attr('r',40)
    .attr('fill','red')
    .attr('fill-opacity',0.5)
    .attr('stroke-width',3)
    .attr('stroke','white')

;

indexcard.append('circle')

    .attr('cx',500)
    .attr('cy',200)
    .attr('r',100)
    .attr('fill','yellow')
    .attr('stroke-width',3)
    .attr('stroke','white');



