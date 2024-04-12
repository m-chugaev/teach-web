<?php
class RandomSmileServise
{
    public function getSmile()
    {
        $smiles = ["😊", "😄", "😁", "🥳", "😎", "😆", "😋"];
        
        return $smiles[array_rand($smiles)];
    }
}