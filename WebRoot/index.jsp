﻿<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String esriPath = request.getServerName() + ":"
			+ request.getServerPort() + path + "/";
	String basePath = request.getScheme() + "://" + esriPath;
%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>哈尔滨城市空间信息系统</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="stylesheet" type="text/css"
	href="arcgis_js_api/library/3.13/3.13/dijit/themes/claro/claro.css" />
<link rel="stylesheet" type="text/css"
	href="arcgis_js_api/library/3.13/3.13/dojox/widget/Toaster/Toaster.css" />
<link rel="stylesheet" type="text/css"
	href="arcgis_js_api/library/3.13/3.13/esri/css/esri.css" />
<!-- basic styles -->
<link href="assets/css/bootstrap.min.css" rel="stylesheet" />
<link rel="stylesheet" href="assets/css/font-awesome.min.css" />
<link rel="stylesheet"
	href="http://fonts.googleapis.com/css?family=Open+Sans:400,300" />
<link rel="stylesheet" href="assets/css/ace.min.css" />
<script type="text/javascript" src="assets/js/jquery-1.10.2.min.js"></script>
<script src="assets/js/ace-extra.min.js"></script>
<script type="text/javascript">
	var arcgis_js_api_home = "<%=esriPath%>";
	var dojoConfig = {
		async : true,
		paths : {
			"js" : "/../js"
		}
	};
</script>
<script type="text/javascript"
	src="arcgis_js_api/library/3.13/3.13/init.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/ace.min.js"></script>
<script type="text/javascript" src="js/index.js"></script>
</head>
<body class="claro" style="overflow: hidden;">
	<div class="navbar navbar-default" id="navbar">
		<script type="text/javascript">
				try{ace.settings.check('navbar' , 'fixed')}catch(e){}
		</script>
		<div class="navbar-container" id="navbar-container">
			<p>
			<div class="navbar-header pull-left">
				<img alt="哈尔滨城市空间信息系统" src="assets/images/logo.png">
			</div>
			
			<a href="#" class="navbar-brand" style="margin-top: 15px;"> 哈尔滨城市空间信息系统 </a>
			</p>
			<!-- /.navbar-header -->
			<div class="navbar-header pull-right" role="navigation">
				<ul class="nav ace-nav">
					<li class="light-blue"><a data-toggle="dropdown" href="#"
						class="dropdown-toggle" style="margin-top: 15px;"> <img
							class="nav-user-photo" src="assets/avatars/user.jpg"
							alt="Jason's Photo" /> <span class="user-info"> <small>欢迎光临,</small>
								Admin
						</span> <i class="icon-caret-down"></i>
					</a>
						<ul
							class="user-menu pull-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
							<li><a href="#"> <i class="icon-cog"></i> 设置
							</a></li>
							<li><a href="#"> <i class="icon-user"></i> 个人资料
							</a></li>
							<li class="divider"></li>
							<li><a href="#"> <i class="icon-off"></i> 退出
							</a></li>
						</ul></li>
				</ul>
				<!-- /.ace-nav -->
			</div>
			<!-- /.navbar-header -->
		</div>
		<!-- /.container -->
	</div>
	<div class="main-container" id="main-container">
		<script type="text/javascript">
				try{ace.settings.check('main-container' , 'fixed')}catch(e){}
			</script>
		<div class="main-container-inner">
			<div class="sidebar" id="sidebar">
				<script type="text/javascript">
						try{ace.settings.check('sidebar' , 'fixed')}catch(e){}
					</script>
				<div class="sidebar-shortcuts" id="sidebar-shortcuts">
					<div class="sidebar-shortcuts-large" id="sidebar-shortcuts-large">
						<button id="tab_one" class="btn btn-success" title="搜索定位">
							<i class="icon-map-marker"></i>
						</button>
						<button id="tab_two" class="btn btn-info" title="查询统计">
							<i class="icon-search"></i>
						</button>
						<button id="tab_three" class="btn btn-warning" title="应用分析">
							<i class="icon-bar-chart"></i>
						</button>
						<button id="tab_four" class="btn btn-danger" title="应用分析2">
							<i class="icon-edit"></i>
						</button>
						<button id="tab_one" class="btn btn-success" title="搜索定位">
							<i class="icon-map-marker"></i>
						</button>
					</div>
					<div class="sidebar-shortcuts-mini" id="sidebar-shortcuts-mini">
						<span class="btn btn-success"></span> <span class="btn btn-info"></span>
						<span class="btn btn-warning"></span> <span class="btn btn-danger"></span>
					</div>
				</div>
				<!-- #sidebar-shor	tcuts -->
				<div class="nav-search" id="nav-search" style="display:none">
					<form class="form-search">
						<span class="input-icon"> <input type="text"
							placeholder="Search ..." class="nav-search-input"
							id="nav-search-input" autocomplete="off" /> <i
							class="icon-search nav-search-icon"></i>
						</span>
					</form>
				</div>
				<div id="check-stat" style="display:none">
					<!-- Nav tabs -->
					<ul class="nav nav-tabs" role="tablist">
						<li role="presentation" class="active"><a href="#home"
							aria-controls="home" role="tab" data-toggle="tab">区划</a></li>
						<li role="presentation"><a href="#profile"
							aria-controls="profile" role="tab" data-toggle="tab">网格</a></li>
						<li role="presentation"><a href="#messages"
							aria-controls="messages" role="tab" data-toggle="tab">单位</i></a></li>
						<li role="presentation"><a href="#settings"
							aria-controls="settings" role="tab" data-toggle="tab">自定义</i></a></li>
					</ul>
					<!-- Tab panes -->
					<div class="tab-content">
						<div role="tabpanel" class="tab-pane active" id="home">
							区划 <select style="width:160px">
								<option>1</option>
								<option>2</option>
								<option>3</option>
							</select> <br /> 街道 <select
								style="width:160px;margin-top: 5px; margin-bottom: 5px;">
								<option>1</option>
								<option>2</option>
								<option>3</option>
							</select><br /> 社区 <select style="width:160px">
								<option>1</option>
								<option>2</option>
								<option>3</option>
							</select>
						</div>
						<div role="tabpanel" class="tab-pane" id="profile">.2..</div>
						<div role="tabpanel" class="tab-pane" id="messages">.3..</div>
						<div role="tabpanel" class="tab-pane" id="settings">.4..</div>
					</div>
				</div>
				<div id="analysis" style="display:none">
					<ul class="nav nav-list">
						<li class="active"><a href="index.html"
							class="dropdown-toggle"> <i class="icon-dashboard"></i> <span
								class="menu-text"> 基础应用分析 </span> <b
								class="arrow icon-angle-down"></b>
						</a>
							<ul class="submenu">
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										地图出图
								</a></li>
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										社区面积查询
								</a></li>
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										设施量估算
								</a></li>
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										交通隐患点分析
								</a></li>
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										网吧审批核查
								</a></li>
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										内涝隐患分析
								</a></li>
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										加油站审批核查
								</a></li>
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										最优路径分析
								</a></li>
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										三维点击查询
								</a></li>
							</ul></li>
						<li><a href="#" class="dropdown-toggle"> <i
								class="icon-desktop"></i> <span class="menu-text"> 三维场景分析
							</span> <b class="arrow icon-angle-down"></b>
						</a>
							<ul class="submenu">
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										组件
								</a></li>
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										按钮 &amp; 图表
								</a></li>
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										树菜单
								</a></li>
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										jQuery UI
								</a></li>
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										可拖拽列表
								</a></li>
								<li><a href="#" class="dropdown-toggle"> <i
										class="icon-double-angle-right"></i> 三级菜单 <b
										class="arrow icon-angle-down"></b>
								</a>
									<ul class="submenu">
										<li><a href="#"> <i class="icon-leaf"></i> 第一级
										</a></li>
										<li><a href="#" class="dropdown-toggle"> <i
												class="icon-pencil"></i> 第四级 <b
												class="arrow icon-angle-down"></b>
										</a>
											<ul class="submenu">
												<li><a href="#"> <i class="icon-plus"></i> 添加产品
												</a></li>
												<li><a href="#"> <i class="icon-eye-open"></i> 查看商品
												</a></li>
											</ul></li>
									</ul></li>
							</ul></li>
						<li><a href="#" class="dropdown-toggle"> <i
								class="icon-list"></i> <span class="menu-text"> 地上部件分析 </span> <b
								class="arrow icon-angle-down"></b>
						</a>
							<ul class="submenu">
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										简单 &amp; 动态
								</a></li>
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										jqGrid plugin
								</a></li>
							</ul></li>
						<li><a href="#" class="dropdown-toggle"> <i
								class="icon-edit"></i> <span class="menu-text"> 底下管线分析 </span> <b
								class="arrow icon-angle-down"></b>
						</a>
							<ul class="submenu">
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										表单组件
								</a></li>
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										向导提示 &amp; 验证
								</a></li>
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										编辑器
								</a></li>
								<li><a href="#"> <i class="icon-double-angle-right"></i>
										文件上传
								</a></li>
							</ul></li>
					</ul>
				</div>
				<div id="other" style="display:none">444</div>
				<div class="sidebar-collapse" id="sidebar-collapse">
					<i class="icon-double-angle-left"
						data-icon1="icon-double-angle-left"
						data-icon2="icon-double-angle-right"></i>
				</div>
				<script type="text/javascript">
						try{ace.settings.check('sidebar' , 'collapsed')}catch(e){}
				</script>
			</div>
			<div class="main-content">
				<div class="breadcrumbs" id="breadcrumbs">
					&nbsp;&nbsp; <i class="icon-bar-chart icon-large"> 统计</i>
					&nbsp;&nbsp; <i class="icon-trash icon-large"> 删除</i> <span
						style="margin-left: 750px;">
						<button class="btn btn-xs btn-primary btn-tabs">二三维</button>
						<button class="btn btn-xs btn-success btn-tabs">三维</button>
						<button class="btn btn-xs btn-info btn-tabs">二维</button>
					</span>
				</div>
				<div id="map" class="contentMap"></div>
			</div>
		</div>
	</div>
	<!-- /.main-container -->
	<script type="text/javascript">
	 $(function(){
	 	 $("#tab_one").on("click",function(){
			$("#nav-search").css("display","block");
			$("#check-stat").css("display","none");
			$("#analysis").css("display","none");
			$("#other").css("display","none");
		 });
		 
		 $("#tab_two").on("click",function(){
			$("#nav-search").css("display","none");
			$("#check-stat").css("display","block");
			$("#analysis").css("display","none");
			$("#other").css("display","none");
		 });
		 
		 $("#tab_three").on("click",function(){
			$("#nav-search").css("display","none");
			$("#check-stat").css("display","none");
			$("#analysis").css("display","block");
			$("#other").css("display","none");
		 });
		 
		 $("#tab_four").on("click",function(){
			$("#nav-search").css("display","none");
			$("#check-stat").css("display","none");
			$("#analysis").css("display","none");
			$("#other").css("display","block");
		});
		
	 });
	</script>
</body>
</html>
