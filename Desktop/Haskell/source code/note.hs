--Curry Haskell

poly :: Float -> Float -> Float -> Float -> Float
poly a b c x = a*x*x + b*x + c

poly1 = poly 1 2 1

poly2 a b c = poly a b c 2


square :: Int -> Int
square x = x * x

quad :: Int -> Int
quad = twice square

--   quad 3
-- = (square.square)3
-- = square (square 3)
-- = (square 3) * (square 3)

twice :: (a -> a) -> (a -> a) 
--用f的函數（這裡是Int->Int），再給他一個Int，最後輸出Int
--In Haskell, 確定的型態前面大寫，不確定型態小寫
--一定要是同樣type，但變數名稱可自訂
twice f x = f (f x) 

-- (b->c)/f/ -> (a->b)/g/ -> a/x/ -> c
-- (f.g)x = f(gx) 


--lecture 03


--lift2 :: (b -> c -> d) ->
	   --  ((a -> b) ->
	    -- (a -> c) -> (a -> d))
--lift2 h f g x = h (fx) (gx)
--t litf2 

--k = litf2 (*) (1+) (2+)
-- (*) 單獨談，丟進lift2  


xs = head xs : tail xs



tails :: List a -> List (List a)
tails [] = [[]]
tails(x:xs) = (x : xs) : tails xs






































