package com.tma.toeicHelper.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.tma.toeicHelper.rest.CustomAccessDeniedHandler;
import com.tma.toeicHelper.rest.JwtAuthenticationTokenFilter;
import com.tma.toeicHelper.rest.RestAuthenticationEntryPoint;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Bean
	public JwtAuthenticationTokenFilter jwtAuthenticationTokenFilter() throws Exception {
		JwtAuthenticationTokenFilter jwtAuthenticationTokenFilter = new JwtAuthenticationTokenFilter();
		jwtAuthenticationTokenFilter.setAuthenticationManager(authenticationManager());
		return jwtAuthenticationTokenFilter;
	}

	@Bean
	public RestAuthenticationEntryPoint restServicesEntryPoint() {
		return new RestAuthenticationEntryPoint();
	}

	@Bean
	public CustomAccessDeniedHandler customAccessDeniedHandler() {
		return new CustomAccessDeniedHandler();
	}

	@Bean
	@Override
	protected AuthenticationManager authenticationManager() throws Exception {
		return super.authenticationManager();
	}

	protected void configure(HttpSecurity http) throws Exception {

		http.csrf().ignoringAntMatchers("/api/**");
		http.authorizeRequests().antMatchers("/api/login**").permitAll()
				.antMatchers(HttpMethod.POST,"/api/checkuser").permitAll()
				.antMatchers(HttpMethod.POST,"/api/checkemail").permitAll()
				.antMatchers(HttpMethod.GET,"/api/discussionrooms").permitAll()
				.antMatchers(HttpMethod.GET,"/api/users").permitAll()
				.antMatchers(HttpMethod.GET,"/api/discussionroom/**").permitAll()
				.antMatchers(HttpMethod.DELETE,"/api/discussionroom/**").permitAll()
				.antMatchers(HttpMethod.POST,"/api/discussionroom").permitAll()
				.antMatchers(HttpMethod.PUT,"/api/addcomment/**").permitAll()
				.antMatchers(HttpMethod.PUT,"/api/addvote/**").permitAll()
				.antMatchers(HttpMethod.PUT,"/api/viewusers/**").permitAll()
				.antMatchers(HttpMethod.PUT,"/api/removeviewuser/**").permitAll()
				.antMatchers(HttpMethod.PUT,"/api/removevote/**").permitAll()
				.antMatchers(HttpMethod.PUT,"/api/updatestatus/**").permitAll()
				.antMatchers(HttpMethod.GET, "/api/roomsbyname/**").permitAll()
				.antMatchers(HttpMethod.POST, "/api/userrole").permitAll()
				.antMatchers(HttpMethod.POST, "/api/checkuser").permitAll()
				.antMatchers(HttpMethod.POST, "/api/checkemail").permitAll()
				.antMatchers(HttpMethod.POST, "/api/userrole").permitAll()
				.antMatchers(HttpMethod.POST, "/api/checkuseronline").permitAll()
				.antMatchers(HttpMethod.POST, "/api/checkoutuser").permitAll();
		http.antMatcher("/api/**").httpBasic().authenticationEntryPoint(restServicesEntryPoint()).and()
				.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and().authorizeRequests()
				.antMatchers(HttpMethod.POST, "/api/checkoldpassword").access("hasAnyRole('ADMIN','USER')")
				.antMatchers(HttpMethod.POST, "/api/testresult").access("hasAnyRole('ADMIN','USER')")
				.antMatchers(HttpMethod.POST, "/api/trainingresult").access("hasAnyRole('ADMIN','USER')")
				.antMatchers(HttpMethod.POST, "/api/testsessionresult").access("hasAnyRole('ADMIN','USER')")
				.antMatchers(HttpMethod.PUT, "/api/user").access("hasAnyRole('ADMIN','USER')")
				.antMatchers(HttpMethod.GET, "/api/testrooms").access("hasAnyRole('ADMIN','USER')")
				.antMatchers(HttpMethod.GET, "/api/testroom").access("hasAnyRole('ADMIN','USER')")
				.antMatchers(HttpMethod.PUT, "/api/testroom").access("hasAnyRole('ADMIN','USER')")
				.antMatchers(HttpMethod.PUT, "/api/updatepost").access("hasRole('ADMIN')")
				.antMatchers(HttpMethod.PUT, "/api/**").access("hasRole('ADMIN')")
				.antMatchers(HttpMethod.GET, "/api/**").access("hasAnyRole('ADMIN','USER')")
				.antMatchers(HttpMethod.POST, "/api/**").access("hasRole('ADMIN')")
				.antMatchers(HttpMethod.DELETE, "/api/**").access("hasRole('ADMIN')").and()
				.addFilterBefore(jwtAuthenticationTokenFilter(), UsernamePasswordAuthenticationFilter.class)
				.exceptionHandling().accessDeniedHandler(customAccessDeniedHandler());
	}
}
