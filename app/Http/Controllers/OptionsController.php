<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\UsersOption;

class OptionsController extends Controller
{
    public function __construct()
    {
      $this->middleware('auth');
    }
    public function getUserOption($id){
        // $user=User::where('username',$username)->first();
        $data_option = User::find($id)->options;
        $option='';
        if($data_option->count()>0){
            $ar_name = array();
            $ar_value = array();
            foreach($data_option as $opt){
                array_push($ar_name,$opt->option_name);
                array_push($ar_value,$opt->option_value);
            }
            $option = array_combine($ar_name,$ar_value);
        }
        return $option;
    }
    public function isAdmin($id){
        $options = $this->getUserOption($id);
        return (array_key_exists('is_admin',$options));
    }

}
