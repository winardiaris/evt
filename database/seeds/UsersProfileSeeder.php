<?php

use Illuminate\Database\Seeder;

class UsersProfileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
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
        return DB::table('users_profile')->insert($profiles);

    }
}
