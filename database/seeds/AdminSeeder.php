<?php

use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert(
            array(
                'name' => env('ADMIN_NAME'),
                'username' => env('ADMIN_USERNAME'),
                'email' => env('ADMIN_EMAIL'),
                'password' => Hash::make(env('ADMIN_PASSWORD')),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            )
          );
        DB::table('users_option')->insert(
            array(
                'users_id' => '1',
                'option_name' => 'is_admin',
                'option_value' => 1,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            )
        );
        $profiles = [
            [
                'users_id' => '1',
                'attribute_name' => 'attribute_avatar',
                'attribute_value' => 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.rccartips.com%2Ftamiya-avante-2011.jpg&f=1',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
            [
                'users_id' => '1',
                'attribute_name' => 'attribute_country_id',
                'attribute_value' => 'IDN',
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ],
        ];
        DB::table('users_profile')->insert($profiles);
    }
}
