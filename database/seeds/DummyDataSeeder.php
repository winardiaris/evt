<?php

use Illuminate\Database\Seeder;

class DummyDataSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create();

        $limit = 10;
        for($i=0;$i<=$limit;$i++){
            //users
            DB::table('users')->insert([
                    'name' => $faker->name,
                    'username' => $faker->userName,
                    'email' => $faker->unique->email,
                    'password' => Hash::make("password"),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
            ]);
            //userprofiles
            $attribute_country_id = array('IDN','USA','ITA','MYS');
            $profiles = [
                [
                    'users_id' => $i+2,
                    'attribute_name' => 'attribute_avatar',
                    'attribute_value' => $faker->imageUrl($width=200,$height=200),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ],
                [
                    'users_id' => $i+2,
                    'attribute_name' => 'attribute_country_id',
                    'attribute_value' => $attribute_country_id[rand(0,3)],
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ],
            ];
            DB::table('users_profile')->insert($profiles);
            //friends
            $friends = [
                [
                    'users_id' => rand(1,12),
                    'friend_users_id' => rand(1,12),
                    'allow'=>rand(0,1),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ]
            ];
            DB::table('friend_list')->insert($friends);
            //post
            $posts = [
                [
                    'users_id'=>rand(1,12),
                    'title'=>$faker->sentence($nbWords = 6, $variableNbWords = true),
                    'description'=>$faker->paragraph($nbSentences = 3, $variableNbSentences = true),
                    'place'=>$faker->address,
                    'currency_id'=>253,
                    'price'=>rand(9,15),
                    'time_start'=>date('Y-m-d H:i:s',strtotime('+3 days')),
                    'time_end'=>date('Y-m-d H:i:s',strtotime('+3 days 12 hours')),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ]
            ];
            DB::table('posts')->insert($posts);
            //category
            $categories = [
                [
                    'type'=>'category',
                    'name'=>$faker->unique->word,
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ],
                [
                    'type'=>'tag',
                    'name'=>$faker->unique->word,
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ]
            ];
            DB::table('post_categories')->insert($categories);
            //post have categories
            $have_categories =[
                [
                    'post_id'=>rand(1,11),
                    'category_id'=>rand(1,22),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ],
                [
                    'post_id'=>rand(1,11),
                    'category_id'=>rand(1,22),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ],
                [
                    'post_id'=>rand(1,11),
                    'category_id'=>rand(1,22),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ]
            ];
            DB::table('post_have_categories')->insert($have_categories);
            //image container
            $image_container = [
                [
                    'users_id'=>rand(1,11),
                    'image_type'=>'post',
                    'image_url'=>$faker->imageUrl($width=640,$height=400),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ],
                [
                    'users_id'=>rand(1,11),
                    'image_type'=>'post',
                    'image_url'=>$faker->imageUrl($width=640,$height=400),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ],
                [
                    'users_id'=>rand(1,11),
                    'image_type'=>'avatar',
                    'image_url'=>$faker->imageUrl($width=400,$height=400),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ],
            ];
            DB::table('image_container')->insert($image_container);
            //post image
            $post_images = [
                [
                    'post_id'=>rand(1,11),
                    'image_container_id'=>rand(1,22),
                ],
                [
                    'post_id'=>rand(1,11),
                    'image_container_id'=>rand(1,22),
                ],
            ];
            DB::table('post_images')->insert($post_images);

        }
    }
}
