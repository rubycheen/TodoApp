import Prelude () -- 不要用它本來的Prelude
import MiniPrelude -- 用自己做的Prelude


doubleAll :: List Int -> List Int
doubleAll a = map (2*) a
-- double :: Int :: Int //用oprator看型態
-- double = \x -> x * x // \才是最基本的語法

quadAll :: List Int -> List Int
quadAll = doubleAll . doubleAll
-- quadAll = twice doubleAll
--		= map (2*) . map(2*)
--		= map ((2*) . (2*))

--	map f . map g = map (f.g) 

inc :: (Int -> Int) -> (Int -> Int)
inc f x = f (x + 1) 

twice :: (a -> a) -> (a -> a)
twice f = f . f

--g x = x * 2 + 1

--	... map (\x -> x * 2 + 1) xs ...


--squaresUpto :: Int -> List Int
--	squaresUpto n = takeWhile (<=n)
--					(map (\x -> x*x) [1..])

positions :: Char -> List Char -> List Int
	 positions x xs = map snd
	 					(filter (\q -> fst q == x)	
	 						(zip xz [0..]))



