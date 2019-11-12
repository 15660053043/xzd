package com.newgen.spring;

import javax.servlet.ServletContext;
import org.springframework.web.context.ServletContextAware;

public class Config implements ServletContextAware{
	private ServletContext servletContext;

	public void setServletContext(ServletContext servletConfig) {
		this.servletContext = servletConfig;
		this.servletContext.setAttribute("config", this);
	}
	
	public ServletContext getServletContext() {
		return servletContext;
	}
	
}
