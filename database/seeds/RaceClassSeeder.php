<?php

use Illuminate\Database\Seeder;
use League\Csv\Reader;

class RaceClassSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        $file = public_path().'/data/race_class.csv';
        $csv = Reader::createFromPath($file);
        $nbInsert = $csv->each(function ($row)  {
            if(empty($row)) return false;

            return  DB::table('race_class')->insert(
                array(
                'name' => $row[0],
                )
            );
        });

    }
}
