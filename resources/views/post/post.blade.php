<div class="panel panel-default post" id="{{$post->id}}">
  <div class="panel-heading">
    <span><b><a href="{{route('profile-view',$post->user->username)}}">{{$post->user->name}}</a></b></span>
    <br>
    <span>{{$start = Carbon\Carbon::parse($post->time_start)->formatLocalized('%A %d %B %Y')}}</span> -
    <span>{{ $end = Carbon\Carbon::parse($post->time_end)->formatLocalized('%A %d %B %Y')}}</span>
    <br>
    <span>
      @foreach($post->getCategories as $categories)
        <a href="{{route('category-view',$categories->category->id)}}">{{$categories->category->name}}</a>
      @endforeach
    </span>

  </div>
  <div class="panel-body">
  @if(count($post->getImages)>0)
    <div class="image-container">
      @foreach($post->getImages as $images)
      <img src="{{$images->container->image_url}}" id="{{$images->container->id}}" class="post-image">
      @endforeach
    </div>
  @endif
    <p class="post-content">
      {{$post->description}}
    </p>
  </div>
  <div class="panel-footer">
    <div class="btn-group">
      <button class="btn btn-primary btn-sm"><i class="fa fa-heart"></i></btn>
      <button class="btn btn-primary btn-sm"><i class="fa fa-comment"></i></btn>
      <button class="btn btn-primary btn-sm"><i class="fa fa-retweet"></i></btn>
    </div>
  </div>
</div>