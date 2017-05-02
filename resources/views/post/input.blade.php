{{ Form::model($user,['route'=>['post-save',Auth::user()->username],'method'=>'POST'])}}
  @include('post.form')
  <input type="hidden" name="usr">
  {!! Form::submit('Save',['class'=>'btn btn-primary']) !!}
{!! Form::close() !!}