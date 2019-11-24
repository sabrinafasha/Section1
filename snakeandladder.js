nam=new Array();

var player_id=1,random_num=0

var coin1_pos=0, coin2_pos=0,start1=0,start2=0



function start() {

player_id=1

random_num=0

coin1_pos=0

coin2_pos=0

start1=0

start2=0



nam[1]=L1.style;nam[2]=L2.style;nam[3]=L3.style;nam[4]=L4.style;

nam[5]=L5.style;nam[6]=L6.style;nam[7]=L7.style;nam[8]=L8.style

nam[9]=L9.style;nam[10]=L10.style;nam[11]=L11.style;nam[12]=L12.style;

nam[13]=L13.style;nam[14]=L14.style;nam[15]=L15.style



nam[16]=L16.style;nam[17]=L17.style;nam[18]=L18.style;nam[19]=L19.style;nam[20]=L20.style

nam[21]=L21.style;nam[22]=L22.style;nam[23]=L23.style;nam[24]=L24.style;nam[25]=L25.style

cn1.style.top=315

cn1.style.left=440

cn2.style.top=315

cn2.style.left=410

d1.style.visibility=”hidden”

d2.style.visibility=”hidden”

d3.style.visibility=”hidden”

d4.style.visibility=”hidden”

pl1.style.visibility=”visible”

btn1.style.visibility=”visible”

frm0.txt0.enabled=false

frm0.txt0.value=””

	}









function play()

{

get_random()



if(random_num==1)

{

d1.style.visibility=”visible”

d2.style.visibility=”Hidden”

d3.style.visibility=”Hidden”

d4.style.visibility=”Hidden”

}



if(random_num==2)

{

d2.style.visibility=”visible”

d1.style.visibility=”Hidden”

d3.style.visibility=”Hidden”

d4.style.visibility=”Hidden”

}



if(random_num==3)

{

d3.style.visibility=”visible”

d2.style.visibility=”Hidden”

d1.style.visibility=”Hidden”

d4.style.visibility=”Hidden”

}



if(random_num==4)

{

d4.style.visibility=”visible”

d2.style.visibility=”Hidden”

d3.style.visibility=”Hidden”

d1.style.visibility=”Hidden”

}



move_coin()







change_player()



if(coin1_pos==25)

{

alert(“Player -1 won the match        , Play Again”)

pl2.style.visibility=”hidden”

btn2.style.visibility=”hidden”

start()

}



if(coin2_pos==25)

{

alert(“Player -2 won the match       , Play Again”)

pl2.style.visibility=”hidden”

btn2.style.visibility=”hidden”

start()

}

}



function get_random()

{



random_num = (Math.round((Math.random()*3)+1))



}

function change_player()

{



if(player_id==1)

{

player_id=2

pl2.style.visibility=”visible”

btn2.style.visibility=”visible”



pl1.style.visibility=”hidden”

btn1.style.visibility=”hidden”

}

else if(player_id==2)

{

player_id=1

pl1.style.visibility=”visible”

btn1.style.visibility=”visible”



pl2.style.visibility=”hidden”

btn2.style.visibility=”hidden”



}



}







function move_coin()

{

ms1.style.visibility=”hidden”

ms2.style.visibility=”hidden”

if(player_id==1)

{



	if(coin1_pos==0){

	if(random_num==1){

	start1=1}}



	if(start1==1)

	{





		if((coin1_pos+random_num)<26)

		{

			frm0.txt0.value=”Player -1  —->  “+coin1_pos +” To “+(coin1_pos+random_num)

			coin1_pos=coin1_pos+random_num

			t=(parseInt(nam[coin1_pos].top))

			l=(parseInt(nam[coin1_pos].left))

			cn1.style.top=t+15

			cn1.style.left=l+30

			check_snake_ladder1()

		}

	}

}



if(player_id==2)

{



	if(coin2_pos==0){

	if(random_num==1){

	start2=1}}



	if(start2==1)

	{





		if((coin2_pos+random_num)<26)

		{

			frm0.txt0.value=”Player -2  —->  “+coin2_pos +” To “+(coin2_pos+random_num)

			coin2_pos=coin2_pos+random_num

			t=(parseInt(nam[coin2_pos].top))

			l=(parseInt(nam[coin2_pos].left))

			cn2.style.top=t-15

			cn2.style.left=l+20

			check_snake_ladder2()

		}

	}

}



}





function check_snake_ladder1()

{

if( coin1_pos==3)

{

	frm0.txt0.value=”Player -1  —->  3  To 7″

	coin1_pos=7

	t=(parseInt(nam[coin1_pos].top))

	l=(parseInt(nam[coin1_pos].left))

	cn1.style.top=t+15

	cn1.style.left=l+30

ms1.style.visibility=”visible”

}

if( coin1_pos==14)

{

	frm0.txt0.value=”Player -1  —->  14  To 18″

	coin1_pos=18

	t=(parseInt(nam[coin1_pos].top))

	l=(parseInt(nam[coin1_pos].left))

	cn1.style.top=t+15

	cn1.style.left=l+30

ms1.style.visibility=”visible”

}

if( coin1_pos==9)

{

	frm0.txt0.value=”Player -1  —->  9  To 21″

	coin1_pos=21

	t=(parseInt(nam[coin1_pos].top))

	l=(parseInt(nam[coin1_pos].left))

	cn1.style.top=t+15

	cn1.style.left=l+30

ms1.style.visibility=”visible”

}

if( coin1_pos==19)

{

	frm0.txt0.value=”Player -1  —->  19  To 22″

	coin1_pos=22

	t=(parseInt(nam[coin1_pos].top))

	l=(parseInt(nam[coin1_pos].left))

	cn1.style.top=t+15

	cn1.style.left=l+30

ms1.style.visibility=”visible”

}

if( coin1_pos==20)

{

	frm0.txt0.value=”Player -1  —->  20  To 10″

	coin1_pos=10

	t=(parseInt(nam[coin1_pos].top))

	l=(parseInt(nam[coin1_pos].left))

	cn1.style.top=t+15

	cn1.style.left=l+30

ms2.style.visibility=”visible”

}

if( coin1_pos==13)

{

	frm0.txt0.value=”Player -1  —->  13  To 8″

	coin1_pos=8

	t=(parseInt(nam[coin1_pos].top))

	l=(parseInt(nam[coin1_pos].left))

	cn1.style.top=t+15

	cn1.style.left=l+30

ms2.style.visibility=”visible”

}

if( coin1_pos==24)

{

	frm0.txt0.value=”Player -1  —->  24  To 2″

	coin1_pos=2

	t=(parseInt(nam[coin1_pos].top))

	l=(parseInt(nam[coin1_pos].left))

	cn1.style.top=t+15

	cn1.style.left=l+30

ms2.style.visibility=”visible”

}

if( coin1_pos==16)

{

	frm0.txt0.value=”Player -1  —->  16  To 6″

	coin1_pos=6

	t=(parseInt(nam[coin1_pos].top))

	l=(parseInt(nam[coin1_pos].left))

	cn1.style.top=t+15

	cn1.style.left=l+30

ms2.style.visibility=”visible”

}



}



function check_snake_ladder2()

{

if( coin2_pos==3)

{

	frm0.txt0.value=”Player -2  —->  3  To 7″

	coin2_pos=7

	t=(parseInt(nam[coin2_pos].top))

	l=(parseInt(nam[coin2_pos].left))

	cn2.style.top=t-15

	cn2.style.left=l+20

ms1.style.visibility=”visible”

}

if( coin2_pos==14)

{

	frm0.txt0.value=”Player -2  —->  14  To 18″

	coin2_pos=18

	t=(parseInt(nam[coin2_pos].top))

	l=(parseInt(nam[coin2_pos].left))

	cn2.style.top=t-15

	cn2.style.left=l+20

ms1.style.visibility=”visible”

}

if( coin2_pos==9)

{

	frm0.txt0.value=”Player -2  —-> 9  To 21″

	coin2_pos=21

	t=(parseInt(nam[coin2_pos].top))

	l=(parseInt(nam[coin2_pos].left))

	cn2.style.top=t-15

	cn2.style.left=l+20

ms1.style.visibility=”visible”

}

if( coin2_pos==19)

{

	frm0.txt0.value=”Player -2  —->  19  To 22″

	coin2_pos=22

	t=(parseInt(nam[coin2_pos].top))

	l=(parseInt(nam[coin2_pos].left))

	cn2.style.top=t-15

	cn2.style.left=l+20

ms1.style.visibility=”visible”

}

if( coin2_pos==20)

{

	frm0.txt0.value=”Player -2  —->  20  To 10″

	coin2_pos=10

	t=(parseInt(nam[coin2_pos].top))

	l=(parseInt(nam[coin2_pos].left))

	cn2.style.top=t-15

	cn2.style.left=l+20

ms2.style.visibility=”visible”

}

if( coin2_pos==13)

{

	frm0.txt0.value=”Player -2  —->  13  To 8″

	coin2_pos=8

	t=(parseInt(nam[coin2_pos].top))

	l=(parseInt(nam[coin2_pos].left))

	cn2.style.top=t-15

	cn2.style.left=l+20

ms2.style.visibility=”visible”

}

if( coin2_pos==24)

{

	frm0.txt0.value=”Player -2  —->  24  To 2″

	coin2_pos=2

	t=(parseInt(nam[coin2_pos].top))

	l=(parseInt(nam[coin2_pos].left))

	cn2.style.top=t-15

	cn2.style.left=l+20

ms2.style.visibility=”visible”

}

if( coin2_pos==16)

{

	frm0.txt0.value=”Player -2  —-> 16  To 6″

	coin2_pos=6

	t=(parseInt(nam[coin2_pos].top))

	l=(parseInt(nam[coin2_pos].left))

	cn2.style.top=t-15

	cn2.style.left=l+20

ms2.style.visibility=”visible”

}



}
