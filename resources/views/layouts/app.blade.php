<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>(Beta) @yield('title')</title>

    <!-- Styles -->
    <link href="{{asset('css/all.css')}}" rel="stylesheet">
    <link href="{{asset('summernote/summernote.css')}}" rel="stylesheet">
    <link rel="shortcut icon" type="image/png" href="{{asset('img/fav.png')}}"/>

    <!-- Scripts -->
    <script>
        window.Laravel = {!! json_encode([
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-inverse  navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">

                    <!-- Collapsed Hamburger -->
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                        <span class="sr-only">Toggle Navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>

                    <!-- Branding Image -->
                    <a class="navbar-brand" href="{{ url('/') }}">
                        <img src="{{asset('img/logo2.png')}}">
                    </a>
                </div>

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->

                    @include('includes.searchbar')
                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right">
                        <!-- Authentication Links -->
                        <li>
                            <a href="{{route('donate')}}">Donate</a>
                        </li>
                    @if (Auth::guest())
                        <li><a href="{{ route('login') }}">Log In</a></li>
                        <li><a href="{{ route('register') }}">Sign Up</a></li>
                    @else
                        <li>
                            <a href="{{ url('/') }}">
                                Home
                            </a>
                        </li>
                        {{-- <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                <i class="fa fa-user"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li>
                                    <a href="#">
                                    <img src="">
                                        arars following you
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <img src="">
                                        arars following you
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="#"  class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                <i class="fa fa-bell"></i>
                            </a>
                            <ul class="dropdown-menu" role="menu">
                                <li>
                                    <a href="#">
                                    <img src="">
                                        xxxx Comment on yyyy's event
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <img src="">
                                        xxxx like your comment
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <img src="">
                                        yyyy's updated event aaaa
                                    </a>
                                </li>
                            </ul>

                        </li> --}}

                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                @if(Session::has('attribute_avatar'))
                                    <img class="user_icon" src="{{Session::get('attribute_avatar')}}">
                                @else
                                    <img class="user_icon" src="{{asset('img/defaultmanavatar.png')}}">
                                @endif
                                                            </a>

                            <ul class="dropdown-menu" role="menu" >
                                <li>
                                    <a href="{{url(Session::get('username'))}}">
                                        <h5>
                                            {{ Session::get('name') }}
                                        </h5>
                                        View profile
                                    </a>
                                </li>

                                {{-- @if (Auth::users()->isAdmin())
                                <li>
                                    <a href="">Admin Panel</a>
                                </li>
                                @endif --}}
                                <li  role="separator" class="divider"></li>
                                <li>
                                    <a href="">Setting & Privacy</a>
                                </li>
                                <li>
                                    <a href="{{ route('logout') }}"
                                        onclick="event.preventDefault();
                                                    document.getElementById('logout-form').submit();">
                                        Logout
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        {{ csrf_field() }}
                                    </form>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <div class="navbar-form navbar-left">
                                <a href="{{route('post-create')}}" class="btn btn-primary">Create</a>
                            </div>
                        </li>
                    @endif
                    </ul>

                </div>
            </div>
        </nav>

        @yield('content')
    </div>
    <footer class="footer">
      <div class="container">
        <p class="text-muted">2017 racingxracing.com</p>
      </div>
    </footer>

    <!-- Scripts -->
    <script src="{{asset('js/app.js')}}"></script>
    <script src="{{asset('js/static.js')}}"></script>
    <script src="{{asset('summernote/summernote.min.js')}}"></script>
    <script src="{{asset('js/main.js')}}"></script>
    <!-- Include this after the sweet alert js file -->
    @include('sweet::alert')
    @yield('js')
</body>
</html>
