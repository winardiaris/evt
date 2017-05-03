@extends('layouts.app')
@section('title',' - Create Event')
@section('content')
<div class="container">
<div class="row">
  <div class="col-md-8 col-md-offset-2">
    <h2 class="text-info">Create An Event</h2>
    <hr>
      {{ Form::model($user,['route'=>['post-save',Auth::user()->username],'method'=>'POST'])}}
        @include('post.form')

      <div class="col-md-12">
        {!! Form::submit('Save',['class'=>'btn btn-primary']) !!}
      </div>
      {!! Form::close() !!}
  </div>
</div>
</div>
@endsection
@section('js')
<script type="text/javascript">
$(document).ready(function(){
  $.fn.select2.defaults.set("theme", "bootstrap");
  $("select").select2();
  $('#description').summernote();
});
</script>
@endsection