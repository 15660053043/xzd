<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>登陆</title>
<%@ include file="./global.jsp"%>
<link href="${sr }/css/style.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="${sr }/plugs/jquery-validate/jquery.validate.min.js"></script>
<script type="text/javascript" src="${sr }/plugs/jquery-form/jquery.form.js"></script>
<script type="text/javascript" src="${sr }/js/user/login.js"></script>
<script type="text/javascript" src="${sr }/js/cloud.js"></script>
<script language="javascript">
	$(function() {
		$('.loginbox').css({
			'position' : 'absolute',
			'left' : ($(window).width() - 692) / 2
		});
		$(window).resize(function() {
			$('.loginbox').css({
				'position' : 'absolute',
				'left' : ($(window).width() - 692) / 2
			});
		});
	});
</script>
</head>

<body style="background-color:#1c77ac; background-image:url(${sr }/images/light.png); background-repeat:no-repeat; background-position:center top; overflow:hidden;">

	<div id="mainBody">
		<div id="cloud1" class="cloud"></div>
		<div id="cloud2" class="cloud"></div>
	</div>

	<div class="logintop">
		<span>欢迎登录远程投稿管理平台</span>
		<ul>
			<li><a href="#">回首页</a>
			</li>
			<li><a href="#">帮助</a>
			</li>
			<li><a href="#">关于</a>
			</li>
		</ul>
	</div>

	<div class="loginbody">

		<span class="systemlogo"></span>
		<form id="login_form" method="POST" action="${ctx }/login.shtml">
			<div class="loginbox">
				<ul>
					<li><input id="username" name="username" type="text" class="loginuser" placeholder='用户名' /></li>
					<li><input id="password" name="password" type="password" class="loginpwd" placeholder='密  码' /></li>
					<li><input type="submit" class="loginbtn" value="登录" /><label><input name="remember" type="checkbox" value="" checked="checked" />记住密码</label><label><a href="#">忘记密码？</a> </label></li>
				</ul>
			</div>
		</form>
	</div>
	<div class="loginbm">中国质量新闻网远程投稿管理平台</div>
</body>
</html>