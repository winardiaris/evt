<div class="form-group {!! $errors->has('title') ? 'has-error':'' !!}">
  {!!Form::label('title','Event Name') !!}
  {!!Form::text('id',null,['hidden'=>'true']) !!}
  {!!Form::text('title',null,['class'=>'form-control','placeholder'=>'Event Name']) !!}
  {!! $errors->first('title','<p class="help-block">:message</p>')!!}
</div>
<div class="form-group {!! $errors->has('description') ? 'has-error':'' !!}">
  {!!Form::label('description','Description') !!}
  {!!Form::text('description',null,['class'=>'form-control']) !!}
  {!! $errors->first('description','<p class="help-block">:message</p>')!!}
</div>
<div class="form-group {!! $errors->has('place') ? 'has-error':'' !!}">
  {!!Form::label('place','Place') !!}
  {!!Form::text('place',null,['class'=>'form-control']) !!}
  {!! $errors->first('place','<p class="help-block">:message</p>')!!}
</div>
<div class="form-group {!! $errors->has('price') ? 'has-error':'' !!}">
  {!!Form::label('price','Price') !!}
  {!!Form::text('price',null,['class'=>'form-control']) !!}
  {!! $errors->first('price','<p class="help-block">:message</p>')!!}
</div>