<?php

use Illuminate\Database\Seeder;
use League\Csv\Reader;

class CountryListTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      $file = public_path().'/data/country_list.csv';
      $csv = Reader::createFromPath($file);
      $nbInsert = $csv->each(function ($row)  {
        if(empty($row)) return false;

        return  DB::table('country_list')->insert(
            array(
              'country_id' => $row[0],
              'country_name' => $row[1],
            )
          );
      });
    }
}
