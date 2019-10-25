import Prelude()
import MiniPrelude
import  Test.QuickCheck

rotate :: Int -> List a -> List a
rotate a b = drop a b ++ take a b