<?php

use Illuminate\Database\Seeder;
use League\Csv\Reader;

class CurrenciesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $file = public_path().'/data/currency_codes.csv';
        $csv = Reader::createFromPath($file);
        $nbInsert = $csv->each(function ($row)  {
            if(empty($row)) return false;

            return  DB::table('currency')->insert(
                array(
                'country_name' => $row[0],
                'currency_name' => $row[1],
                'currency_code' => $row[2],
                'currency_code_2' => $row[3],
                )
            );
        });
    }
}
