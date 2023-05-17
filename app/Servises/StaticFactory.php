<?php

namespace App\Servises;

use App\Models\Posts;

class StaticFactory
{
    static function save($type)
    {

        switch ($type) {
            case 'database':
                return new Posts();
                break;
            case 'email':
                return new Email();
                break;
            default : throw new \Exception('Unknown format given');
        }
    }
}
