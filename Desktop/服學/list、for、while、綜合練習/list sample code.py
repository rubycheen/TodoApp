week_days=7      #一周有七天
hobby="dance"    #我的嗜好是跳舞
狗="小忍"        #我的狗叫小忍
print(week_days, type(week_days))
print(hobby, type(hobby))
print(狗, type(狗))
print(123645+123156)
print(23489-5612)
print(20*900)
print(9000/15)
print(800%3)
print(10**5)
a='今天天氣真好'
b="宜蘭最大流動夜市 "
c='3333333'
d="清溝夜市"
print(a[2])
print(b+d)
print(week_days)
print(hobby)
print(狗)
book=input("請輸入書名:")
print(book)
if hobby=="dance":
    print(hobby)
else:
    print("Your hobby is " + hobby)
hobby='singing'
if hobby=="dance":
    print(hobby)
else:
    print("Your hobby is " + hobby)
num="10000"
print(type(num))
num=int(num)
print(type(num))
上映電影="真心話大冒險"
print(上映電影[0])
print(上映電影[1])
print(上映電影[2])
print(上映電影[3])
print(上映電影[4])
print(上映電影[5])

#list part

寶可夢=['妙蛙種子','小火龍','傑尼龜']
print(寶可夢)

print(寶可夢[0])
print(寶可夢[1])
print(寶可夢[2])

print(寶可夢)
寶可夢[0]="皮卡丘"
print(寶可夢)

寶可夢.append('鯉魚王')
print(寶可夢)

寶可夢.insert(2,'綠毛蟲')

print(寶可夢)

寶可夢.append("木守宮")
寶可夢.append("火雉雞")
寶可夢.append("水躍魚")

print(寶可夢)

del 寶可夢[7]
print(寶可夢)

寶可夢.remove("火雉雞")
print(寶可夢)

print(len(寶可夢))
寶可夢[1:3]

print(寶可夢.index('綠毛蟲'))