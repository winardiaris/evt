<div class="col-md-12">
  <div class="form-group {!! $errors->has('title') ? 'has-error':'' !!}">
    {!!Form::label('title','Event Title') !!}
    {!!Form::text('id',null,['hidden'=>'true']) !!}
    {!!Form::text('title',null,['class'=>'form-control','placeholder'=>'Event Name']) !!}
    {!! $errors->first('title','<p class="help-block">:message</p>')!!}
  </div>
</div>
<div class="col-md-12">
  <div class="form-group {!! $errors->has('place') ? 'has-error':'' !!}">
    {!!Form::label('place','Location') !!}
    {!!Form::text('place',null,['class'=>'form-control']) !!}
    {!! $errors->first('place','<p class="help-block">:message</p>')!!}
  </div>
</div>
<div class="col-md-4">
  <div class="form-group {!! $errors->has('currency_id') ? 'has-error':'' !!}">
    {!!Form::label('currency_id','Currency') !!}
    {!!Form::select('currency_id',$currency,
      !isset($post['currency_id']) ? '':$post['currency_id'],
      ['class'=>'form-control']) !!}
    {!! $errors->first('currency_id','<p class="help-block">:message</p>')!!}
  </div>
</div>
<div class="col-md-8">
  <div class="form-group {!! $errors->has('price') ? 'has-error':'' !!}">
    {!!Form::label('price','Price') !!}
    {!!Form::number('price',null,['class'=>'form-control']) !!}
    {!! $errors->first('price','<p class="help-block">:message</p>')!!}
  </div>
</div>
<div class="col-md-6">
  <div class="form-group {!! $errors->has('time_start') ? 'has-error':'' !!}">
    {!!Form::label('time_start','Starts') !!}
    <div class="input-group date" id="timestart">
      {!!Form::text('time_start',null,['class'=>'form-control']) !!}
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-calendar"></span>
      </span>
    </div>
    {!! $errors->first('time_start','<p class="help-block">:message</p>')!!}
  </div>
</div>
<div class="col-md-6">
  <div class="form-group {!! $errors->has('time_end') ? 'has-error':'' !!}">
    {!!Form::label('time_end','Ends') !!}
    <div class="input-group date" id="timeend">
      {!!Form::text('time_end',null,['class'=>'form-control']) !!}
      <span class="input-group-addon">
        <span class="glyphicon glyphicon-calendar"></span>
      </span>
    </div>
    {!! $errors->first('time_end','<p class="help-block">:message</p>')!!}
  </div>
</div>
<div class="col-md-12">
  <div class="form-group">
  <label for="file-1">Image</label>
    <input id="file-1" name="photo[]" type="file" multiple class="file" data-overwrite-initial="false" data-min-file-count="2">
  </div>
</div>
<div class="col-md-12">
  <div class="form-group {!! $errors->has('description') ? 'has-error':'' !!}">
    {!!Form::label('description','Event Description') !!}
    {!!Form::textarea('description',null,['class'=>'form-control','style'=>'display:none;']) !!}
    {!! $errors->first('description','<p class="help-block">:message</p>')!!}
  </div>
  <div class="summernote"></div>
</div>
<div class="col-md-12">
  <div class="form-group {!! $errors->has('categories') ? 'has-error':'' !!}">
    {!!Form::label('categories','Categories') !!}
    {!!Form::text('categories',null,['class'=>'form-control', 'data-role'=>'tagsinput' ]) !!}
    {!! $errors->first('categories','<p class="help-block">:message</p>')!!}
  </div>
</div>
<div class="col-md-12">
  <div class="form-group {!! $errors->has('tags') ? 'has-error':'' !!}">
    {!!Form::label('tags','Tags') !!}
    {!!Form::text('tags',null,['class'=>'form-control', 'data-role'=>'tagsinput']) !!}
    {!! $errors->first('tags','<p class="help-block">:message</p>')!!}
  </div>
</div>
<div class="col-md-12"></div>