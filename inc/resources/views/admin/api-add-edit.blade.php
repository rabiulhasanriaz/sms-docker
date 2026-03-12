@extends('admin.master')

@section('api_add_class','current-page')
@section('content')
    <div class="right_col" role="main">
        <div class="">
            @include('reseller.partials.session_messages')
            <div class="page-title">
                <div class="title_left">
                    <h3>API</h3>
                </div>

                <div class="title_right">
                    <div class="col-md-5 col-sm-5  form-group pull-right top_search">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search for...">
                            <span class="input-group-btn">
                            <button class="btn btn-default" type="button">Go!</button>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>
            <div class="row">
                <div class="col-md-12 col-sm-12 ">
                    <div class="x_panel">
                        <div class="x_title">
                            <h2>API Edit</h2>
                            <ul class="nav navbar-right panel_toolbox">
                                <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                </li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                    <ul class="dropdown-menu" role="menu">
                                        <li><a class="dropdown-item" href="#">Settings 1</a>
                                        </li>
                                        <li><a class="dropdown-item" href="#">Settings 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li><a class="close-link"><i class="fa fa-close"></i></a>
                                </li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>
                        <div class="x_content">
                            <form action="{{ route('admin.api-update', $api->id) }}" method="post" class="form-horizontal" role="form"
                                  enctype="multipart/form-data">

                                @csrf

                                <div class="field item form-group">
                                    <label class="col-form-label col-md-3 col-sm-3  label-align" for="form-company-1"> API name : </label>

                                    <div class="col-md-6 col-sm-6">
                                        <input type="text" id="companyName" placeholder="API name" name="api_name"
                                               class="form-control" required="" value="{{ $api->api_name }}"/>
                                        <span class="help-inline col-xs-12 col-sm-7">
									  <span class="middle text-danger" id="companyShow"> ** </span>

{{--									  @if ($errors->has('company_name'))--}}
{{--                                                <span class="text-danger">{{ $errors->first('company_name') }}</span>--}}
{{--                                            @endif--}}
								  </span>
                                    </div>
                                </div>
                                <div class="field item form-group">
                                    <label class="col-form-label col-md-3 col-sm-3  label-align" for="form-field-1"> URL : </label>

                                    <div class="col-md-6 col-sm-6">
                                        <input type="text" id="ResellerName" placeholder="URL" name="api_url"
                                               class="form-control" required="" value="{{ $api->api_url }}"/>
                                        <span class="help-inline col-xs-12 col-sm-7">
									  <span class="middle text-danger" id="resellerName_Show"> ** </span>
{{--									  @if ($errors->has('reseller_name'))--}}
{{--                                                <span class="text-danger">{{ $errors->first('reseller_name') }}</span>--}}
{{--                                            @endif--}}
								  </span>
                                    </div>
                                </div>
                                <div class="field item form-group">
                                    <label class="col-form-label col-md-3 col-sm-3  label-align" for="form-field-1"> Balance : </label>

                                    <div class="col-md-6 col-sm-6">
                                        <input type="text" id="ResellerName" placeholder="Balance" name="api_balance"
                                               class="form-control" required="" value="{{ $api->api_balance }}"/>
                                        <span class="help-inline col-xs-12 col-sm-7">
									  <span class="middle text-danger" id="resellerName_Show"> ** </span>
{{--									  @if ($errors->has('reseller_name'))--}}
                                            {{--                                                <span class="text-danger">{{ $errors->first('reseller_name') }}</span>--}}
                                            {{--                                            @endif--}}
								  </span>
                                    </div>
                                </div>














                                <div class="clearfix form-group">
                                    <div class="col-md-6 offset-md-3">

                                        <input type="submit" class="btn btn-info" value="Update">

                                        &nbsp; &nbsp; &nbsp;
                                        <button class="btn btn-danger" type="reset">
                                            <i class="ace-icon fa fa-undo bigger-110"></i>
                                            Reset
                                        </button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('custom_script')
    <script src="{{ asset('assets') }}/js/data-mask.js" type="text/javascript"></script>
    @include('admin.ajax.check_existence')
@endsection
