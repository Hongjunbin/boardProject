package com.jun.boardProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.jun.boardProject.service.BoardService;
import com.jun.boardProject.vo.Board;

import jakarta.servlet.http.HttpSession;

@RestController
public class BoardController {
	
	@Autowired
	private BoardService boardService;

	@GetMapping("allBoardPage")
	public ModelAndView allBoardPage(ModelAndView mv) {
		List<Board> list = boardService.allBoardPage();
		mv.addObject("list", list);
		mv.setViewName("board/allBoardPage");
		System.out.println(".");
		System.out.println(".....................................");
		return mv;
	}
	
	@GetMapping("getWritePage")
	public ModelAndView getWritePage(ModelAndView mv, HttpSession session) {
		if(session.getAttribute("loginUser") == null) {
			mv.setViewName("redirect:/");
			return mv;
		}
		mv.setViewName("board/boardWritePage");
		return mv;
	}
	
}
