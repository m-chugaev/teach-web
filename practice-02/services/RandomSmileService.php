<?php
class RandomSmileService
{
    public function getSmile()
    {
        $smiles = ["😊", "😄", "😁", "🥳", "😎", "😆", "😋"];
        
        return $smiles[array_rand($smiles)];
    }
}