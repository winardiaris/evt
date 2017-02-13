<div class="form-group {!! $errors->has('name') ? 'has-error':'' !!}">
  {!!Form::label('name','Full Name') !!}
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
