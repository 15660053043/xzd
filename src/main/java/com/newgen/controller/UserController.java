package com.newgen.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.newgen.bean.User;
import com.newgen.mapper.UserMapper;

@Controller
@RequestMapping("user")
public class UserController {
	
	@Resource
	private UserMapper userMapper;
	
	@RequestMapping("test")
	@ResponseBody
	public List<User> getControllers(){
		return userMapper.selectAll();
	}
}
