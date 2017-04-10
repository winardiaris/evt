<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return  DB::table('users')->insert(
            array(
              'name' => env('ADMIN_NAME'),
              'username' => env('ADMIN_USERNAME'),
              'email' => env('ADMIN_EMAIL'),
              'password' => Hash::make(env('ADMIN_PASSWORD')),
              'username' => 'admin',
            )
          );
    }
}
