package com.newgen.bean;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="t_user")
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer id;
	@Column(name="namespace")
	private String namespace;
	@Column(name="username")
	private String username;
	@Column(name="password")
	private String password;
	@Column(name="nickname")
	private String nickname;
	@Column(name="phone")
	private String phone;
	@Column(name="wxaccount")
	private String wxaccount;
	@Column(name="createtime")
	private Date createtime;
	@Column(name="expiretime")
	private Date expiretime;
	@Column(name="spacelimit")
	private Integer spacelimit;
	@Column(name="zdd")
	private Integer zdd;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNamespace() {
		return namespace;
	}
	public void setNamespace(String namespace) {
		this.namespace = namespace;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getWxaccount() {
		return wxaccount;
	}
	public void setWxaccount(String wxaccount) {
		this.wxaccount = wxaccount;
	}
	public Date getCreatetime() {
		return createtime;
	}
	public void setCreatetime(Date createtime) {
		this.createtime = createtime;
	}
	public Date getExpiretime() {
		return expiretime;
	}
	public void setExpiretime(Date expiretime) {
		this.expiretime = expiretime;
	}
	public Integer getSpacelimit() {
		return spacelimit;
	}
	public void setSpacelimit(Integer spacelimit) {
		this.spacelimit = spacelimit;
	}
	public Integer getZdd() {
		return zdd;
	}
	public void setZdd(Integer zdd) {
		this.zdd = zdd;
	}
}
