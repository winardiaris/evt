@extends('layouts.app')
@section('title',' - Profile '.$user->name)
@section('content')
<div class="container">
<div class="row">
  <div class="col-md-2 col-md-offset-1">
    @include('profile.avatar')
  </div>
  <div class="col-md-8">
    <div class="panel panel-default">
      <div class="panel-body">
      {{ Form::model($user,['route'=>['profile-update',Auth::user()->username],'method'=>'POST'])}}
        @include('profile.form')
<input type="hidden" name="usr">
        {!! Form::submit('Save',['class'=>'btn btn-primary']) !!}
      {!! Form::close() !!}
      </div>
    </div>
  </div>
</div>
</div>
@endsection

@section('js')
    <script type="text/javascript">
        $(document).ready(function(){
            $.fn.select2.defaults.set("theme", "bootstrap");
            $("select").select2();
        });
    </script>
@endsection