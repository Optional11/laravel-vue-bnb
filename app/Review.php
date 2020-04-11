<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Review extends Model
{

    public function bookable()
    {
        return $this->belongsTo(Bookable::class);
    }

    public function booking ()
    {
        return $this->belongsTo(Booking::class);
    }
    //as we are using uuid (string) we need to override some functions
    public function getIncrementing()
    {
        return false;
    }

    public function getKeyType()
    {
        return 'string';
    }
}