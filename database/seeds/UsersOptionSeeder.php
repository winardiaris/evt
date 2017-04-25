<?php

use Illuminate\Database\Seeder;

class UsersOptionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        return DB::table('users_option')->insert(
            array(
                'users_id' => '1',
                'option_name' => 'is_admin',
                'option_value' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            )
        );
    }
}
