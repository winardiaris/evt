<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CountryList extends Model
{
    protected $table = "country_list";
    protected $fillable = ['country_id', 'country_name'];
}
