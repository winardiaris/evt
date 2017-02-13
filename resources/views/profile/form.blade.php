<div class="form-group {!! $errors->has('name') ? 'has-error':'' !!}">
  {!!Form::label('name','Full Name') !!}
  {!!Form::text('id',null,['hidden'=>'true']) !!}
  {!!Form::text('name',null,['class'=>'form-control','placeholder'=>'Full Name']) !!}
  {!! $errors->first('name','<p class="help-block">:message</p>')!!}
</div>
<div class="form-group {!! $errors->has('username') ? 'has-error':'' !!}">
  {!!Form::label('username','Username') !!}
  {!!Form::text('username',null,['class'=>'form-control','placeholder'=>'Userame']) !!}
  {!! $errors->first('username','<p class="help-block">:message</p>')!!}
</div>
<div class="form-group {!! $errors->has('email') ? 'has-error':'' !!}">
  {!!Form::label('email','Email') !!}
  {!!Form::email('email',null,['class'=>'form-control','placeholder'=>'Email']) !!}
  {!! $errors->first('email','<p class="help-block">:message</p>')!!}
</div>
<div class="form-group {!! $errors->has('attribute_country_id') ? 'has-error':'' !!}">
  {!!Form::label('attribute_country_id','Country of origin') !!}
  {!!Form::select('attribute_country_id',$data_country,
    !isset($profile['attribute_country_id']) ? '':$profile['attribute_country_id'],
    ['class'=>'form-control','placeholder'=>'Country of origin']) !!}
  {!! $errors->first('attribute_country_id','<p class="help-block">:message</p>')!!}
</div>
<div class="form-group {!! $errors->has('attribute_photo') ? 'has-error':'' !!}">
  {!!Form::label('attribute_photo','Photo') !!}
  {!!Form::file('attribute_photo') !!}
  {!! $errors->first('attribute_photo','<p class="help-block">:message</p>')!!}
</div>
<div class="form-group {!! $errors->has('attribute_bio') ? 'has-error':'' !!}">
  {!!Form::label('attribute_bio','Biography') !!}
  {!!Form::text('attribute_bio',!isset($profile['attribute_bio']) ? '':$profile['attribute_bio'],
      ['class'=>'form-control','placeholder'=>'Biography']) !!}
  {!! $errors->first('attribute_bio','<p class="help-block">:message</p>')!!}
</div>
