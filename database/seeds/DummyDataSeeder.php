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
        $attribute_country_id = array('IDN','USA','ITA','MYS');
        $c_user = count(App\User::all());
        $img = array(
                '/img/dummy/1.jpg',
                '/img/dummy/2.jpg',
                '/img/dummy/3.png',
                '/img/dummy/4.svg',
                '/img/dummy/5.jpg',
                '/img/dummy/6.jpg',
                '/img/dummy/7.jpg',
                '/img/dummy/8.jpg',
                '/img/dummy/9.png',
                '/img/dummy/10.png',
                '/img/dummy/11.png',
                '/img/dummy/12.png',
                '/img/dummy/13.svg',
                '/img/dummy/14.jpg',
                '/img/dummy/15.png',
                '/img/dummy/16.png');

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
            $profiles = [
                [
                    'users_id' => $c_user+$i,
                    'attribute_name' => 'attribute_avatar',
                    'attribute_value' => $img[rand(0,15)],
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ],
                [
                    'users_id' => $c_user+$i,
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
                    'users_id' => rand(1,$c_user),
                    'friend_users_id' => rand(1,$c_user),
                    'allow'=>rand(0,1),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ]
            ];
            DB::table('friend_list')->insert($friends);
            //post
            $posts = [
                [
                    'users_id'=>rand(1,$c_user+$i),
                    'title'=>$faker->sentence($nbWords = 6, $variableNbWords = true),
                    'description'=>$faker->paragraph($nbSentences = 3, $variableNbSentences = true),
                    'place'=>$faker->address,
                    'currency_id'=>253,
                    'price'=>rand(5,15),
                    'time_start'=>date('Y-m-d H:i:s',strtotime('+7 days')),
                    'time_end'=>date('Y-m-d H:i:s',strtotime('+7 days 12 hours')),
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
            $c_posts = count(App\Post::all());
            $c_categories = count(App\PostCategory::all());
            echo "count posts :".$c_posts;
            echo "count categori :".$c_categories;
            $have_categories =[
                [
                    'post_id'=>rand(1,$c_posts),
                    'category_id'=>rand(1,$c_categories),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ],
                [
                    'post_id'=>rand(1,$c_posts),
                    'category_id'=>rand(1,$c_categories),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ],
                [
                    'post_id'=>rand(1,$c_posts),
                    'category_id'=>rand(1,$c_categories),
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ]
            ];
            DB::table('post_have_categories')->insert($have_categories);
            //image container
            $image_container = [
                [
                    'users_id'=>rand($c_user,$c_user+$i),
                    'image_type'=>'post',
                    'image_url'=>$img[rand(0,15)],
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ],
                [
                    'users_id'=>rand($c_user,$c_user+$i),
                    'image_type'=>'post',
                    'image_url'=>$img[rand(0,15)],
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ],
                [
                    'users_id'=>rand($c_user,$c_user+$i),
                    'image_type'=>'post',
                    'image_url'=>$img[rand(0,15)],
                    'created_at' => date('Y-m-d H:i:s'),
                    'updated_at' => date('Y-m-d H:i:s'),
                ],
            ];
            DB::table('image_container')->insert($image_container);
            //post image
            $container = App\ImageContainer::where('image_type','post')->get();
            $c_container = count($container);
            echo "count container: ".$c_container;
            $post_images = [
                [
                    'post_id'=>rand(1,$c_posts),
                    'image_container_id'=>rand(1,$c_container),
                ],
                [
                    'post_id'=>rand(1,$c_posts),
                    'image_container_id'=>rand(1,$c_container),
                ],
            ];
            DB::table('post_images')->insert($post_images);

        }
    }
}
