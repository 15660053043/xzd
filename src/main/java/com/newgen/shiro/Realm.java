package com.newgen.shiro;

import org.apache.shiro.SecurityUtils;
import org.apache.shiro.authc.*;
import org.apache.shiro.authz.AuthorizationInfo;
import org.apache.shiro.authz.SimpleAuthorizationInfo;
import org.apache.shiro.realm.AuthorizingRealm;
import org.apache.shiro.session.Session;
import org.apache.shiro.subject.PrincipalCollection;
import org.apache.shiro.subject.SimplePrincipalCollection;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.CollectionUtils;
import org.springframework.beans.factory.annotation.Autowired;

import com.newgen.bean.User;

import java.util.*;

/**
 * Created by Administrator on 2017/2/14.
 */
public class Realm extends AuthorizingRealm {

    @Override
    protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principalCollection) {
        /*String username = (String) principalCollection.fromRealm(getName()).iterator().next();

        User user = userService.isExist(username);

        SimpleAuthorizationInfo info = new SimpleAuthorizationInfo();

        Set<String> perms = new HashSet<String>();
        List<Role> roles = roleService.listByUserId(user.getId());
        if (null != roles && roles.size() > 0) {
            for (Role r : roles) {
                List<String> perm = roleService.list(r.getRole_id());
                perms.addAll(perm);
            }
        }
        if (!CollectionUtils.isEmpty(perms)) {
            // 权限加入AuthorizationInfo认证对象
            info.setStringPermissions(perms);
        }

        System.out.println("用户【" + username + "】权限：{");
        Iterator<String> i = perms.iterator();
        while (i.hasNext()) {
            System.out.println(i.next());
        }
        System.out.println("}");
        return info;*/
    	
    	return null;

    }

    @Override
    protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken authenticationToken) throws AuthenticationException {
       /* UsernamePasswordToken token = (UsernamePasswordToken) authenticationToken;
        String userName = token.getUsername();
        if (userName != null && !"".equals(userName)) {

            User user = userService.isExist(token.getUsername());

            if (null == user) {
                throw new UnknownAccountException();
            }
            if (!String.valueOf(token.getPassword()).toLowerCase().equals(user.getPassword())) {
                throw new IncorrectCredentialsException();
            }

            if (user != null) {

                List<String> perms = new ArrayList<String>();
                List<Role> roles = roleService.listByUserId(user.getId());
                if (null != roles && roles.size() > 0) {
                    for (Role r : roles) {
                        List<String> perm = roleService.list(r.getRole_id());
                        perms.add(StringUtils.join(perm.toArray(), ","));
                    }
                }
                setSessionInfo(user, StringUtils.join(perms.toArray(), ","));

                return new SimpleAuthenticationInfo(user.getLoginName(), user.getPassword(), getName());
            }
        }*/
        return null;
    }


    public void removeUserAuthorizationInfoCache(String username) {
        SimplePrincipalCollection pc = new SimplePrincipalCollection();
        pc.add(username, super.getName());
        super.clearCachedAuthorizationInfo(pc);
    }

    private void setSessionInfo(User user, String perms) {

        Subject sub = SecurityUtils.getSubject();
        Session session = sub.getSession();

        session.setAttribute("PERMISSION", perms);
        session.setAttribute("USER", user);
    }

}
