package com.jun.boardProject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.jun.boardProject.service.MemberService;
import com.jun.boardProject.vo.Member;

import jakarta.servlet.http.HttpSession;

@RestController
public class MemberController {
	
	@Autowired
	private MemberService memberService;
	
	@GetMapping("loginPage")
	public ModelAndView loginPage(ModelAndView mv) {
		mv.setViewName("member/loginPage");
		return mv;
	}
	
	@GetMapping("joinPage")
	public ModelAndView joinPage(ModelAndView mv) {
		mv.setViewName("member/joinPage");
		return mv;
	}
	
	@PostMapping("join")
	public ModelAndView joinMember(Member m, ModelAndView mv) {
		String idCheck = memberService.memberIdCheck(m.getUserId());

		if(idCheck.equals(m.getUserId())) {
			mv.addObject("check","check");
			mv.setViewName("redirect:/joinPage");
			return mv;
		}
		int result = memberService.joinMember(m);
		System.out.println(result);
		mv.setViewName("redirect:/");
		return mv;
	}
	
	@PostMapping("login")
	public ModelAndView loginMember(Member m, ModelAndView mv, HttpSession session) {
		
		Member loginUser = memberService.loginMember(m);
		if(loginUser != null) {
			session.setAttribute("loginUser", loginUser);
			mv.setViewName("redirect:/");
		} else {
			mv.addObject("errorMsg","아이디 및 비밀번호가 틀렸거나 없는 계정입니다.");
			mv.setViewName("member/loginPage");
		}
		return mv;
	}
	
	@GetMapping("logout")
	public ModelAndView logoutMember(HttpSession session, ModelAndView mv) {
		session.invalidate();
		mv.setViewName("redirect:/");
		return mv;
	}

}
