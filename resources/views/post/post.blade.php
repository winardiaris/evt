<div class="panel panel-default post" id="{{$post->id}}">
  <div class="panel-heading">
      <b>
        <a href="{{route('profile-view',$post->user->username)}}">
        @if(count($post->user->profiles->where('attribute_name','attribute_avatar')->first())>0)
          <img src="{{$post->user->profiles->where('attribute_name','attribute_avatar')->first()->attribute_value}}" class="img-icon">
        @endif
          {{$post->user->name}}
        </a>
      </b>
      <br>
      <span class="post-time">{{Carbon\Carbon::parse($post->created_at)->diffForHumans()}}</span>
  </div>
  <div class="panel-body">
  @if(count($post->getImages)>0)
    <section class="image-container image-container-{{count($post->getImages)}}" id="post-image-{{$post->id}}">
      @foreach($post->getImages as $images)
        <img src="{{asset($images->container->image_url)}}" id="{{$images->container->id}}" class="post-image">
      @endforeach
    </section>
  @endif
    <div class="post-content">
      <h4 class="post-title">{{$post->title}}</h4>
      <div class="post-time">
        <span>{{$start = Carbon\Carbon::parse($post->time_start)->formatLocalized('%A %d %B %Y')}}</span> -
        <span>{{ $end = Carbon\Carbon::parse($post->time_end)->formatLocalized('%A %d %B %Y')}}</span>
      </div>
      <span class="post-categories">
        @foreach($post->getCategories as $categories)
          <a href="{{route('category-view',$categories->category->id)}}">{{$categories->category->name}}</a>
        @endforeach
      </span>
      <p class="post-description">
        {{$post->description}}
      </p>
    </div>
  </div>
  <div class="panel-footer">
    <div class="btn-group">
      <button class="btn btn-transparant "><i class="fa fa-heart"></i></button>
      <button class="btn btn-transparant "><i class="fa fa-comment"></i></button>
      <button class="btn btn-transparant "><i class="fa fa-retweet"></i></button>
    </div>
  </div>
</div>