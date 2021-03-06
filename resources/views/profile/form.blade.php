{{-- jika tambah attribute hanya nambah disini --}}
<div class="form-group {!! $errors->has('name') ? 'has-error':'' !!}">
  {!!Form::label('name','Full Name') !!}
  {!!Form::text('id',null,['hidden'=>'true']) !!}
  {!!Form::text('name',null,['class'=>'form-control','placeholder'=>'Full Name']) !!}
  {!! $errors->first('name','<p class="help-block">:message</p>')!!}
</div>
<div class="form-group {!! $errors->has('username') ? 'has-error':'' !!}">
  {!!Form::label('username','Username') !!}
  {!!Form::text('username',$user->username,['class'=>'form-control','placeholder'=>'Username']) !!}
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
    !isset($userProfile['attribute_country_id']) ? '':$userProfile['attribute_country_id'],
    ['class'=>'form-control']) !!}
  {!! $errors->first('attribute_country_id','<p class="help-block">:message</p>')!!}
</div>
{{-- <div class="form-group {!! $errors->has('attribute_avatar') ? 'has-error':'' !!}">
  {!!Form::label('attribute_avatar','Avatar') !!}
  {!!Form::file('attribute_avatar') !!}
  {!! $errors->first('attribute_avatar','<p class="help-block">:message</p>')!!}
</div>--}}
<div class="form-group {!! $errors->has('attribute_bio') ? 'has-error':'' !!}">
  {!!Form::label('attribute_bio','Biography') !!}
  {!!Form::text('attribute_bio',!isset($userProfile['attribute_bio']) ? '':$userProfile['attribute_bio'],
      ['class'=>'form-control','placeholder'=>'Biography']) !!}
  {!! $errors->first('attribute_bio','<p class="help-block">:message</p>')!!}
</div>
