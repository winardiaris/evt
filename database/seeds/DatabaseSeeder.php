<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
      $this->call(CountryListTableSeeder::class);
      $this->call(AdminSeeder::class);
      $this->call(CurrenciesSeeder::class);
      $this->call(DummyDataSeeder::class);
    }
}
